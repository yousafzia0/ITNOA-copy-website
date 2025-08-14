import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, integer, jsonb, index } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

// Session storage table for authentication
export const sessions = pgTable(
  "sessions",
  {
    sid: varchar("sid").primaryKey(),
    sess: jsonb("sess").notNull(),
    expire: timestamp("expire").notNull(),
  },
  (table) => [index("IDX_session_expire").on(table.expire)],
);

// Chatbot conversations for learning and analytics
export const chatConversations = pgTable("chat_conversations", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  sessionId: varchar("session_id").notNull(),
  userMessage: text("user_message").notNull(),
  aiResponse: text("ai_response").notNull(),
  serviceMentioned: varchar("service_mentioned"),
  intentDetected: varchar("intent_detected"),
  satisfactionScore: integer("satisfaction_score"), // 1-5 rating if provided
  timestamp: timestamp("timestamp").defaultNow(),
});

// Client interactions and preferences for learning
export const clientInteractions = pgTable("client_interactions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  sessionId: varchar("session_id").notNull(),
  interactionType: varchar("interaction_type").notNull(), // 'chat', 'contact_form', 'meeting_request'
  servicesInquired: text("services_inquired").array(),
  companySize: varchar("company_size"), // 'small', 'medium', 'large', 'enterprise'
  industry: varchar("industry"),
  urgencyLevel: varchar("urgency_level"), // 'low', 'medium', 'high', 'critical'
  preferredContactMethod: varchar("preferred_contact_method"),
  specificRequirements: text("specific_requirements"),
  followUpNeeded: varchar("follow_up_needed").default('pending'), // 'pending', 'completed', 'not_needed'
  timestamp: timestamp("timestamp").defaultNow(),
});

// AI learning data for continuous improvement
export const aiLearningData = pgTable("ai_learning_data", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  questionPattern: text("question_pattern").notNull(),
  bestResponse: text("best_response").notNull(),
  serviceCategory: varchar("service_category").notNull(),
  confidenceScore: integer("confidence_score").notNull(), // 1-100
  usageCount: integer("usage_count").default(0),
  lastUsed: timestamp("last_used").defaultNow(),
  effectiveness: integer("effectiveness").default(100), // 1-100, updated based on user feedback
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertChatConversationSchema = createInsertSchema(chatConversations).omit({
  id: true,
  timestamp: true,
});

export const insertClientInteractionSchema = createInsertSchema(clientInteractions).omit({
  id: true,
  timestamp: true,
});

export const insertAILearningDataSchema = createInsertSchema(aiLearningData).omit({
  id: true,
  lastUsed: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type ChatConversation = typeof chatConversations.$inferSelect;
export type InsertChatConversation = z.infer<typeof insertChatConversationSchema>;
export type ClientInteraction = typeof clientInteractions.$inferSelect;
export type InsertClientInteraction = z.infer<typeof insertClientInteractionSchema>;
export type AILearningData = typeof aiLearningData.$inferSelect;
export type InsertAILearningData = z.infer<typeof insertAILearningDataSchema>;
