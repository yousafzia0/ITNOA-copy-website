import { 
  type User, 
  type InsertUser,
  type ChatConversation,
  type InsertChatConversation,
  type ClientInteraction,
  type InsertClientInteraction,
  type AILearningData,
  type InsertAILearningData,
  users,
  chatConversations,
  clientInteractions,
  aiLearningData
} from "@shared/schema";
import { db } from "./db";
import { eq, desc } from "drizzle-orm";
import { randomUUID } from "crypto";

export interface IStorage {
  // User operations
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // AI Learning operations
  saveChatConversation(conversation: InsertChatConversation): Promise<ChatConversation>;
  saveClientInteraction(interaction: InsertClientInteraction): Promise<ClientInteraction>;
  saveAILearningData(learningData: InsertAILearningData): Promise<AILearningData>;
  
  // Analytics operations
  getChatAnalytics(): Promise<{
    totalConversations: number;
    topIntents: Array<{ intent: string; count: number }>;
    topServices: Array<{ service: string; count: number }>;
  }>;
}

export class DatabaseStorage implements IStorage {
  // User operations
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  // AI Learning operations
  async saveChatConversation(conversation: InsertChatConversation): Promise<ChatConversation> {
    const [savedConversation] = await db
      .insert(chatConversations)
      .values(conversation)
      .returning();
    return savedConversation;
  }

  async saveClientInteraction(interaction: InsertClientInteraction): Promise<ClientInteraction> {
    const [savedInteraction] = await db
      .insert(clientInteractions)
      .values(interaction)
      .returning();
    return savedInteraction;
  }

  async saveAILearningData(learningData: InsertAILearningData): Promise<AILearningData> {
    const [saved] = await db
      .insert(aiLearningData)
      .values(learningData)
      .returning();
    return saved;
  }

  // Analytics operations
  async getChatAnalytics() {
    const conversations = await db.select().from(chatConversations);
    
    // Count total conversations
    const totalConversations = conversations.length;
    
    // Aggregate top intents
    const intentCounts = conversations.reduce((acc, conv) => {
      if (conv.intentDetected) {
        acc[conv.intentDetected] = (acc[conv.intentDetected] || 0) + 1;
      }
      return acc;
    }, {} as Record<string, number>);
    
    const topIntents = Object.entries(intentCounts)
      .map(([intent, count]) => ({ intent, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);

    // Aggregate top services
    const serviceCounts = conversations.reduce((acc, conv) => {
      if (conv.serviceMentioned) {
        acc[conv.serviceMentioned] = (acc[conv.serviceMentioned] || 0) + 1;
      }
      return acc;
    }, {} as Record<string, number>);
    
    const topServices = Object.entries(serviceCounts)
      .map(([service, count]) => ({ service, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);

    return {
      totalConversations,
      topIntents,
      topServices
    };
  }
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private conversations: Map<string, ChatConversation>;
  private interactions: Map<string, ClientInteraction>;
  private learningData: Map<string, AILearningData>;

  constructor() {
    this.users = new Map();
    this.conversations = new Map();
    this.interactions = new Map();
    this.learningData = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async saveChatConversation(conversation: InsertChatConversation): Promise<ChatConversation> {
    const id = randomUUID();
    const savedConversation: ChatConversation = {
      ...conversation,
      id,
      timestamp: new Date()
    };
    this.conversations.set(id, savedConversation);
    return savedConversation;
  }

  async saveClientInteraction(interaction: InsertClientInteraction): Promise<ClientInteraction> {
    const id = randomUUID();
    const savedInteraction: ClientInteraction = {
      ...interaction,
      id,
      timestamp: new Date()
    };
    this.interactions.set(id, savedInteraction);
    return savedInteraction;
  }

  async saveAILearningData(learningData: InsertAILearningData): Promise<AILearningData> {
    const id = randomUUID();
    const saved: AILearningData = {
      ...learningData,
      id,
      lastUsed: new Date()
    };
    this.learningData.set(id, saved);
    return saved;
  }

  async getChatAnalytics() {
    const conversations = Array.from(this.conversations.values());
    const totalConversations = conversations.length;
    
    // Aggregate intents and services (in-memory implementation)
    const intentCounts = conversations.reduce((acc, conv) => {
      if (conv.intentDetected) {
        acc[conv.intentDetected] = (acc[conv.intentDetected] || 0) + 1;
      }
      return acc;
    }, {} as Record<string, number>);
    
    const serviceCounts = conversations.reduce((acc, conv) => {
      if (conv.serviceMentioned) {
        acc[conv.serviceMentioned] = (acc[conv.serviceMentioned] || 0) + 1;
      }
      return acc;
    }, {} as Record<string, number>);

    return {
      totalConversations,
      topIntents: Object.entries(intentCounts).map(([intent, count]) => ({ intent, count })).slice(0, 10),
      topServices: Object.entries(serviceCounts).map(([service, count]) => ({ service, count })).slice(0, 10)
    };
  }
}

// Use DatabaseStorage for production, MemStorage for development if needed
export const storage = new DatabaseStorage();
