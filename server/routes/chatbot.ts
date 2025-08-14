import { Router } from "express";
import OpenAI from "openai";
import { db } from "../db";
import { chatConversations, clientInteractions, aiLearningData } from "../../shared/schema";
import { eq, desc, ilike } from "drizzle-orm";

const router = Router();

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Comprehensive service information with all 40 services
const servicesInfo = `
ITNOA Cybersecurity Consultancy - Complete Service Portfolio (40 Services):

1. IT AUDIT SERVICES (18 Services):
   - SAP Audits (/services/sap-audit) - Comprehensive SAP security assessments and compliance reviews
   - PeopleSoft Audits (/services/peoplesoft-audit) - Oracle PeopleSoft security evaluations and risk assessments  
   - PeopleSoft HCM Security (/services/peoplesoft-hcm-security) - PeopleSoft HCM security assessments
   - PeopleSoft Financial Security (/services/peoplesoft-financial-security) - PeopleSoft Financial security assessments
   - Workday /HCM Security (/services/workday-hcm-security) - Workday Human Capital Management security assessments
   - Database Security Audits (/services/database-security-audit) - SQL Server, Oracle, MySQL, PostgreSQL security audits
   - Operating System Audits (/services/os-audit) - Linux and Windows OS security configuration reviews
   - Network Security (/services/network-security) - Network infrastructure and firewall security assessments
   - Cloud Security (AWS / Azure / GCP) (/services/cloud-security-audits) - Multi-cloud security assessments
   - Application Security & SDLC (/services/application-security-sdlc) - Application security testing and SDLC
   - Identity & Access Management (IAM) (/services/identity-access-management) - IAM security assessments
   - Vulnerability & Patch Management (/services/vulnerability-patch-management) - Vulnerability assessment and patch management
   - Incident Response & Resilience (/services/incident-response-resilience) - Incident response capability testing
   - Third-Party / Vendor Risk (/services/third-party-vendor-risk) - Third-party security assessments
   - SOX Auditing (/services/sox-auditing) - Sarbanes-Oxley compliance auditing
   - HIPAA IT Security Audits (/services/hipaa-security-audits) - Healthcare data protection assessments
   - Data Protection & Privacy (/services/data-protection-privacy) - Data protection compliance assessments
   - IT Governance (COBIT) (/services/it-governance-cobit) - IT governance framework implementation

2. INFORMATION SECURITY (GRC) CONSULTING (16 Services):
   - ISO 27001 Implementation (/services/iso-27001-implementation) - Information Security Management System implementation
   - NIST CSF Implementation (/services/nist-csf-implementation) - NIST Cybersecurity Framework adoption
   - PCI DSS Assessments (/services/pci-dss-assessments) - Payment Card Industry Data Security Standard compliance
   - SOC 2 Compliance (/services/soc-2) - Service Organization Control 2 audits
   - Cloud Security Assessments (/services/cloud-security-assessments) - AWS, Azure, Google Cloud security evaluations
   - Penetration Testing (Program Oversight) (/services/penetration-testing) - Security testing and vulnerability assessments
   - NIST 800‑171 Readiness (/services/nist-171-security-assessment) - Controlled unclassified information compliance
   - Cyber Essentials (UK) (/services/cyber-essentials) - UK government cybersecurity certification
   - AI Governance & Risk (/services/ai-governance-risk) - AI governance frameworks and risk management
   - DevSecOps & Secure SDLC (/services/devsecops-secure-sdlc) - DevSecOps implementation and secure development
   - Third‑Party / Vendor Risk (/services/third-party-vendor-risk) - Vendor security assessments and risk management
   - Incident Response Program (/services/incident-response-program) - Incident response program development
   - Data Privacy & Protection (/services/data-protection-privacy) - Data protection compliance and privacy controls
   - Risk Management Frameworks (/services/risk-management-frameworks) - Enterprise risk management framework development
   - Cybersecurity Maturity Assessments (/services/cybersecurity-maturity-assessments) - Security program maturity evaluation
   - Cloud Security Posture Mgmt (CSPM) (/services/cloud-security-posture-management) - Cloud security posture management

3. BUSINESS CONTINUITY / CYBER RESILIENCE (6 Services):
   - ISO 22301 BCMS Assessment (/services/iso-22301-bcms-assessment) - Business Continuity Management System assessment
   - ISO 22317 Business Impact Analysis (/services/business-impact-analysis-iso-22301) - Business impact analysis and risk assessment
   - ISO/IEC 27031 ICT Readiness & Disaster Recovery (/services/iso-27031-ict-readiness-disaster-recovery) - ICT readiness and disaster recovery
   - Crisis Communication & Incident Response (NIST CSF RS/RC) (/services/crisis-communication-incident-response) - Crisis communication planning
   - Supplier & Third‑Party Continuity (/services/supplier-third-party-continuity) - Third-party supplier continuity planning
   - Ransomware Readiness & Recovery (/services/ransomware-readiness-recovery) - Ransomware prevention and recovery planning

INDUSTRIES SERVED (/industries):
- Financial Services - Banking, fintech, investment firms
- Healthcare & Life Sciences - Hospitals, health tech, pharmaceuticals  
- Government & Public Sector - Federal agencies, state/local government
- Technology & Software - SaaS providers, tech startups, software companies
- Manufacturing & Industrial - Manufacturing plants, supply chain companies
- Education - Universities, K-12 schools, educational technology
- Retail & E-commerce - Online retailers, brick-and-mortar stores
- Energy & Utilities - Power companies, oil & gas, renewable energy

CONTACT OPTIONS:
- Become a Client: /become-client (Client onboarding form)
- Contact Us: /contact (General contact form)  
- All Services Overview: /services (Complete service listings)
- Resources: /resources (Educational content and guides)

KEY DIFFERENTIATORS:
- 40+ specialized cybersecurity services across all domains
- Expert team with deep industry knowledge and certifications
- Comprehensive approach from audit to implementation
- Regulatory compliance expertise (HIPAA, SOX, PCI DSS, ISO standards)
- Multi-cloud security capabilities (AWS, Azure, GCP)
- Advanced threat assessment and penetration testing
- Business continuity and cyber resilience planning
- AI governance and DevSecOps implementation
- Third-party risk management and vendor assessments
`;

// AI Learning Functions
async function learnFromInteraction(sessionId: string, userMessage: string, aiResponse: string, serviceMentioned?: string, intentDetected?: string) {
  try {
    await db.insert(chatConversations).values({
      sessionId,
      userMessage,
      aiResponse,
      serviceMentioned,
      intentDetected
    });
  } catch (error) {
    console.error('Error saving chat conversation:', error);
  }
}

async function saveClientInteraction(sessionId: string, interactionData: any) {
  try {
    await db.insert(clientInteractions).values({
      sessionId,
      interactionType: 'chat',
      ...interactionData
    });
  } catch (error) {
    console.error('Error saving client interaction:', error);
  }
}

async function getLearningData(messagePattern: string) {
  try {
    const learningData = await db
      .select()
      .from(aiLearningData)
      .where(ilike(aiLearningData.questionPattern, `%${messagePattern}%`))
      .orderBy(desc(aiLearningData.effectiveness), desc(aiLearningData.usageCount))
      .limit(3);
    
    return learningData;
  } catch (error) {
    console.error('Error fetching learning data:', error);
    return [];
  }
}

// Enhanced Intelligent fallback with comprehensive service knowledge
const intelligentFallback = async (message: string, sessionId: string) => {
  const lowerMessage = message.toLowerCase();
  let serviceMentioned = '';
  let intentDetected = '';
  
  // Check learning data first
  const learningData = await getLearningData(lowerMessage);
  if (learningData.length > 0) {
    const bestResponse = learningData[0];
    // Update usage count
    await db.update(aiLearningData)
      .set({ usageCount: (bestResponse.usageCount || 0) + 1, lastUsed: new Date() })
      .where(eq(aiLearningData.id, bestResponse.id));
    
    return bestResponse.bestResponse;
  }
  
  // Enhanced service-specific responses with all 40 services
  
  // Healthcare & HIPAA
  if (lowerMessage.includes('hipaa') || lowerMessage.includes('healthcare') || lowerMessage.includes('medical') || lowerMessage.includes('hospital')) {
    serviceMentioned = 'hipaa-security-audits';
    intentDetected = 'healthcare_compliance';
    return "For HIPAA compliance and healthcare security, I recommend our [HIPAA IT Security Audits](/services/hipaa-security-audits). We specialize in healthcare data protection with comprehensive services including Protected Health Information (PHI) security, administrative safeguards, and business associate agreements. We also offer [Data Privacy & Protection](/services/data-protection-privacy) for broader healthcare compliance needs. Would you like to schedule a consultation to discuss your specific healthcare security requirements?";
  }
  
  // SOX Compliance
  if (lowerMessage.includes('sox') || lowerMessage.includes('sarbanes') || lowerMessage.includes('financial reporting')) {
    serviceMentioned = 'sox-auditing';
    intentDetected = 'financial_compliance';
    return "For SOX compliance, we offer comprehensive [SOX Auditing](/services/sox-auditing) services including [SOX Cyber Security Requirements](/services/sox-cyber-security-requirements) and [SOX IT General Controls](/services/sox-it-general-controls). Our SOX specialists ensure your financial reporting controls meet all regulatory standards. We can help with control design, testing, and ongoing compliance maintenance.";
  }
  
  // ISO Standards
  if (lowerMessage.includes('iso') || lowerMessage.includes('27001') || lowerMessage.includes('information security management')) {
    serviceMentioned = 'iso-27001-implementation';
    intentDetected = 'iso_compliance';
    return "For ISO 27001 compliance, our [ISO 27001 Implementation](/services/iso-27001-implementation) service provides end-to-end support from gap analysis to certification. We also offer [ISO 22301 BCMS Assessment](/services/iso-22301-bcms-assessment) for business continuity and [ISO/IEC 27031 ICT Readiness & Disaster Recovery](/services/iso-27031-ict-readiness-disaster-recovery) for comprehensive ISO compliance across your organization.";
  }
  
  // NIST Framework
  if (lowerMessage.includes('nist') || lowerMessage.includes('cybersecurity framework') || lowerMessage.includes('800-171')) {
    serviceMentioned = 'nist-csf-implementation';
    intentDetected = 'nist_compliance';
    return "For NIST compliance, we offer [NIST CSF Implementation](/services/nist-csf-implementation) and [NIST 800‑171 Readiness](/services/nist-171-security-assessment) for controlled unclassified information. Our NIST experts help with framework adoption, gap analysis, and ongoing compliance monitoring across all five core functions: Identify, Protect, Detect, Respond, and Recover.";
  }
  
  // Penetration Testing
  if (lowerMessage.includes('penetration') || lowerMessage.includes('pentest') || lowerMessage.includes('pen test') || lowerMessage.includes('security testing')) {
    serviceMentioned = 'penetration-testing';
    intentDetected = 'security_testing';
    return "Our [Penetration Testing (Program Oversight)](/services/penetration-testing) provides comprehensive security assessments including network, web application, mobile, and infrastructure testing. We use advanced techniques to identify vulnerabilities and provide detailed remediation guidance. This includes external/internal network testing, social engineering simulations, and red team exercises.";
  }
  
  // Cloud Security
  if (lowerMessage.includes('cloud') || lowerMessage.includes('aws') || lowerMessage.includes('azure') || lowerMessage.includes('gcp') || lowerMessage.includes('google cloud')) {
    serviceMentioned = 'cloud-security-assessments';
    intentDetected = 'cloud_security';
    return "For cloud security, we offer [Cloud Security Assessments](/services/cloud-security-assessments) covering AWS, Azure, and Google Cloud, plus [Cloud Security Posture Mgmt (CSPM)](/services/cloud-security-posture-management) for continuous monitoring. Our cloud experts help with configuration reviews, IAM assessments, and compliance validation across multi-cloud environments.";
  }
  
  // AI & DevSecOps
  if (lowerMessage.includes('ai') || lowerMessage.includes('artificial intelligence') || lowerMessage.includes('devsecops') || lowerMessage.includes('secure development')) {
    serviceMentioned = 'ai-governance-risk';
    intentDetected = 'modern_tech_security';
    return "For modern technology security, we offer [AI Governance & Risk](/services/ai-governance-risk) for AI systems and [DevSecOps & Secure SDLC](/services/devsecops-secure-sdlc) for secure development practices. These services help organizations implement responsible AI practices and integrate security into development pipelines.";
  }
  
  // Business Continuity
  if (lowerMessage.includes('business continuity') || lowerMessage.includes('disaster recovery') || lowerMessage.includes('ransomware') || lowerMessage.includes('resilience')) {
    serviceMentioned = 'cyber-resilience';
    intentDetected = 'business_continuity';
    return "For business continuity and cyber resilience, we offer comprehensive services including [Ransomware Readiness & Recovery](/services/ransomware-readiness-recovery), [Crisis Communication & Incident Response](/services/crisis-communication-incident-response), and [ISO 22317 Business Impact Analysis](/services/business-impact-analysis-iso-22301). View all our [Business Continuity / Cyber Resilience](/services/cyber-resilience) services.";
  }
  
  // PCI DSS
  if (lowerMessage.includes('pci') || lowerMessage.includes('payment') || lowerMessage.includes('credit card') || lowerMessage.includes('cardholder data')) {
    serviceMentioned = 'pci-dss-assessments';
    intentDetected = 'payment_compliance';
    return "For payment security compliance, our [PCI DSS Assessments](/services/pci-dss-assessments) ensure your organization meets Payment Card Industry standards. We provide scope definition, security assessments, and ongoing compliance monitoring to protect cardholder data and maintain payment processing privileges.";
  }
  
  // SOC 2
  if (lowerMessage.includes('soc 2') || lowerMessage.includes('soc2') || lowerMessage.includes('service organization control')) {
    serviceMentioned = 'soc-2';
    intentDetected = 'service_compliance';
    return "For SOC 2 compliance, our [SOC 2 Compliance](/services/soc-2) service helps SaaS and technology companies achieve Type I and Type II certifications. We assist with control environment design, policy development, and audit preparation across all five trust service criteria.";
  }
  
  // IT Audit
  if (lowerMessage.includes('audit') || lowerMessage.includes('it audit') || lowerMessage.includes('sap') || lowerMessage.includes('peoplesoft') || lowerMessage.includes('workday')) {
    serviceMentioned = 'it-audit';
    intentDetected = 'it_audit';
    return "We offer comprehensive [IT Audit](/services/it-audit) services covering 18 specialized areas including [SAP Audits](/services/sap-audit), [PeopleSoft Audits](/services/peoplesoft-audit), [Workday /HCM Security](/services/workday-hcm-security), [Database Security Audits](/services/database-security-audit), and many more. Our audits follow ISACA, IIA, and AICPA standards with agile methodology.";
  }
  
  // Cyber Essentials
  if (lowerMessage.includes('cyber essentials') || lowerMessage.includes('uk cybersecurity') || lowerMessage.includes('uk compliance')) {
    serviceMentioned = 'cyber-essentials';
    intentDetected = 'uk_compliance';
    return "For UK cybersecurity requirements, our [Cyber Essentials (UK)](/services/cyber-essentials) service helps organizations achieve the UK government's cybersecurity certification scheme, providing essential cyber protection and meeting government contract requirements.";
  }
  
  // General service inquiry
  if (lowerMessage.includes('service') || lowerMessage.includes('what do you do') || lowerMessage.includes('help') || lowerMessage.includes('consulting')) {
    intentDetected = 'general_inquiry';
    return "ITNOA offers 40+ specialized cybersecurity services across three main categories:\n\n**IT Audit Services** (18 services) - SAP, PeopleSoft, database, network, and compliance audits\n**Information Security (GRC) Consulting** (16 services) - ISO 27001, NIST CSF, PCI DSS, SOC 2, and more\n**Business Continuity / Cyber Resilience** (6 services) - Disaster recovery, ransomware protection, crisis management\n\nWe serve 8+ industries including healthcare, financial services, government, and technology. Visit our [complete services overview](/services) or [contact us](/contact) to discuss your specific needs.";
  }
  
  // Pricing inquiry
  if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('pricing') || lowerMessage.includes('quote')) {
    intentDetected = 'pricing_inquiry';
    return "Our cybersecurity services are customized based on your specific requirements, organization size, and compliance needs. For detailed pricing information, I'd recommend:\n\n1. **[Become a Client](/become-client)** - Complete our client onboarding form for a tailored proposal\n2. **[Contact Us](/contact)** - Speak directly with our experts about your needs\n\nWe offer competitive pricing with flexible engagement models including project-based, retainer, and ongoing support options.";
  }
  
  // Getting started
  if (lowerMessage.includes('get started') || lowerMessage.includes('begin') || lowerMessage.includes('start') || lowerMessage.includes('first step')) {
    intentDetected = 'getting_started';
    return "Great! Let's get you started with ITNOA's cybersecurity services:\n\n**Next Steps:**\n1. **[Become a Client](/become-client)** - Complete our detailed onboarding form\n2. **[Schedule a Consultation](/contact)** - Speak with our cybersecurity experts\n3. **[View Our Services](/services)** - Explore our 40+ specialized services\n4. **[Industry Solutions](/industries)** - See how we serve your specific industry\n\nOur team will work with you to assess your current security posture and recommend the most effective services for your needs.";
  }
  
  // Default response with learning
  intentDetected = 'general_inquiry';
  return "I'm here to help you with ITNOA's comprehensive cybersecurity services! We offer 40+ specialized services including IT audits, compliance consulting, penetration testing, business continuity planning, and much more.\n\n**Quick Links:**\n- [All Services](/services) - Complete service portfolio\n- [Industries We Serve](/industries) - Specialized industry solutions\n- [Become a Client](/become-client) - Get started today\n- [Contact Us](/contact) - Speak with our experts\n\nWhat specific cybersecurity challenge can I help you with? Feel free to ask about any compliance requirements, security assessments, or industry-specific needs!";
};

router.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;
    const sessionId = req.sessionID || `session_${Date.now()}`;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    try {
      // Try OpenAI first with enhanced prompt
      const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          {
            role: "system",
            content: `You are ITNOA's expert cybersecurity AI assistant with comprehensive knowledge across ALL cybersecurity domains. You provide accurate, detailed information on any cybersecurity topic including:

CORE EXPERTISE:
- Information Security Management & Risk Assessment
- Compliance Frameworks (ISO 27001, NIST CSF, SOX, HIPAA, PCI DSS, GDPR, SOC 2, FERPA, FISMA)
- Penetration Testing & Vulnerability Assessment
- Incident Response & Digital Forensics
- Cloud Security (AWS, Azure, GCP, multi-cloud environments)
- Network Security & Infrastructure Protection
- Application Security & Secure Development (SAST, DAST, IAST)
- Identity & Access Management (IAM, Zero Trust)
- Cryptography & Data Protection
- Threat Intelligence & Threat Hunting
- Security Architecture & Engineering
- Business Continuity & Disaster Recovery
- Cyber Resilience & Crisis Management
- DevSecOps & Secure Software Development
- AI Security & Governance
- Industrial Control Systems (ICS) & SCADA Security
- Mobile Security & IoT Security
- Security Operations Center (SOC) Design
- Risk Management & GRC (Governance, Risk, and Compliance)

ADVANCED TOPICS:
- Zero Trust Architecture Design
- Quantum Cryptography & Post-Quantum Security
- Advanced Persistent Threats (APT) Analysis
- Security Automation & Orchestration (SOAR)
- Behavioral Analytics & User Entity Behavior Analytics (UEBA)
- Container & Kubernetes Security
- Serverless Security Architecture
- Supply Chain Security & Third-Party Risk
- Privacy Engineering & Data Minimization
- Security Economics & ROI Analysis

${servicesInfo}

INSTRUCTIONS:
1. Provide comprehensive, expert-level cybersecurity guidance on ANY topic asked
2. When discussing ITNOA services, reference specific service pages with exact URLs
3. For topics beyond ITNOA's direct services, still provide expert cybersecurity advice
4. Keep responses detailed but accessible - assume the user wants thorough information
5. Always offer next steps or additional resources when relevant
6. Maintain professional tone while being helpful and informative
7. If uncertain about specific implementation details, recommend consultation with experts

You're not just limited to ITNOA services - you're a comprehensive cybersecurity expert who can help with any security question or challenge.`
          },
          {
            role: "user",
            content: message
          }
        ],
        max_tokens: 800,
        temperature: 0.7
      });

      const aiResponse = response.choices[0]?.message?.content || "I apologize, but I'm having trouble generating a response right now. Please try again.";
      
      // Learn from this interaction
      await learnFromInteraction(sessionId, message, aiResponse);
      
      res.json({ reply: aiResponse });

    } catch (openaiError) {
      console.error("OpenAI API error:", openaiError);
      
      // Use enhanced intelligent fallback
      const fallbackResponse = await intelligentFallback(message, sessionId);
      
      // Learn from this interaction too
      await learnFromInteraction(sessionId, message, fallbackResponse);
      
      res.json({ reply: fallbackResponse });
    }

  } catch (error) {
    console.error("Chat route error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Analytics endpoint for learning insights
router.get("/analytics", async (req, res) => {
  try {
    const conversationStats = await db
      .select({
        intentDetected: chatConversations.intentDetected,
        count: 'count(*)'
      })
      .from(chatConversations)
      .groupBy(chatConversations.intentDetected)
      .orderBy(desc('count'))
      .limit(10);

    const popularServices = await db
      .select({
        serviceMentioned: chatConversations.serviceMentioned,
        count: 'count(*)'
      })
      .from(chatConversations)
      .where(chatConversations.serviceMentioned)
      .groupBy(chatConversations.serviceMentioned)
      .orderBy(desc('count'))
      .limit(10);

    res.json({
      conversationStats,
      popularServices,
      totalConversations: await db.select().from(chatConversations).then(rows => rows.length)
    });
  } catch (error) {
    console.error("Analytics error:", error);
    res.status(500).json({ error: "Failed to fetch analytics" });
  }
});

export default router;