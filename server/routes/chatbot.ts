import { Router } from "express";
import OpenAI from "openai";

const router = Router();

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Service information for the chatbot
const servicesInfo = `
ITNOA Cybersecurity Consultancy Services:

1. IT AUDIT SERVICES:
   - SAP Audit (/services/sap-audit)
   - Peoplesoft Audit (/services/peoplesoft-audit) 
   - Database Security Audit (/services/database-security-audit)
   - Linux Windows Operating System Audit (/services/os-audit)
   - Network Security (/services/network-security)
   - SOX Auditing (/services/sox-auditing)
   - FFIEC Audits (/services/ffiec-audits)
   - HIPAA Security Audits (/services/hipaa-security-audits)
   - FERPA/FISMA (/services/ferpa-fisma)

2. GRC CONSULTING (/services/grc-consulting):
   - ISO 27001 Implementation (/services/iso-27001-implementation)
   - NIST CSF Implementation (/services/nist-csf-implementation)
   - PCI DSS Assessments (/services/pci-dss-assessments)
   - SOC 2 Compliance (/services/soc-2)
   - Cloud Security Assessments (/services/cloud-security-assessments)

3. BUSINESS CONTINUITY / CYBER RESILIENCE (/services/cyber-resilience):
   - Business Continuity Planning (/services/business-continuity-planning)
   - Business Impact Analysis Per ISO 22301 (/services/business-impact-analysis-iso-22301)
   - Business Continuity System Review (ISO22301) (/services/business-continuity-system-review-iso-22301)

4. SOX AUDITING SERVICES (/services/sox-auditing):
   - Cyber Security Requirements (/services/sox-cyber-security-requirements)
   - IT General Controls (/services/sox-it-general-controls)

5. OTHER SERVICES:
   - Penetration Testing (/services/penetration-testing)
   - NIST 171 Security Assessment (/services/nist-171-security-assessment)
   - Cyber Essentials (/services/cyber-essentials)

CONTACT OPTIONS:
- Become a Client: /become-client
- Contact Us: /contact
- All Services Overview: /services
- Industries Served: /industries
`;

// Intelligent fallback responses for when OpenAI is unavailable
const intelligentFallback = (message: string) => {
  const lowerMessage = message.toLowerCase();
  
  // Service-specific responses
  if (lowerMessage.includes('hipaa') || lowerMessage.includes('healthcare')) {
    return "For HIPAA compliance and healthcare security, I recommend our [HIPAA Security Audits](/services/hipaa-security-audits). We also offer comprehensive [GRC Consulting](/services/grc-consulting) for healthcare organizations. Would you like to know more about healthcare-specific cybersecurity requirements?";
  }
  
  if (lowerMessage.includes('sox') || lowerMessage.includes('sarbanes')) {
    return "For SOX compliance, we offer specialized [SOX Auditing](/services/sox-auditing) services including [SOX Cyber Security Requirements](/services/sox-cyber-security-requirements) and [SOX IT General Controls](/services/sox-it-general-controls). These services ensure your financial reporting controls meet regulatory standards.";
  }
  
  if (lowerMessage.includes('iso') || lowerMessage.includes('27001')) {
    return "For ISO 27001 compliance, check our [ISO 27001 Implementation](/services/iso-27001-implementation) service. We also provide [GRC Consulting](/services/grc-consulting) to help establish comprehensive security management systems.";
  }
  
  if (lowerMessage.includes('penetration') || lowerMessage.includes('pentest') || lowerMessage.includes('pen test')) {
    return "Our [Penetration Testing](/services/penetration-testing) service provides comprehensive security assessments to identify vulnerabilities in your systems. This includes network, web application, and infrastructure testing.";
  }
  
  if (lowerMessage.includes('audit') || lowerMessage.includes('it audit')) {
    return "We offer comprehensive [IT Audit](/services/it-audit) services including [SAP Audit](/services/sap-audit), [Database Security Audit](/services/database-security-audit), [Network Security](/services/network-security), and [Operating System Audit](/services/os-audit). Which specific system would you like to audit?";
  }
  
  if (lowerMessage.includes('business continuity') || lowerMessage.includes('disaster recovery') || lowerMessage.includes('bcp')) {
    return "For business continuity planning, visit our [Business Continuity Planning](/services/business-continuity-planning) and [Cyber Resilience](/services/cyber-resilience) services. We also provide [Business Impact Analysis](/services/business-impact-analysis-iso-22301) per ISO 22301 standards.";
  }
  
  if (lowerMessage.includes('cloud') || lowerMessage.includes('aws') || lowerMessage.includes('azure')) {
    return "Our [Cloud Security Assessments](/services/cloud-security-assessments) service covers AWS, Azure, Google Cloud, and other cloud platforms. We ensure your cloud infrastructure meets security best practices and compliance requirements.";
  }
  
  if (lowerMessage.includes('pci') || lowerMessage.includes('payment') || lowerMessage.includes('card')) {
    return "For payment card security, we offer [PCI DSS Assessments](/services/pci-dss-assessments) to ensure your payment processing systems comply with industry standards and protect cardholder data.";
  }
  
  if (lowerMessage.includes('nist') || lowerMessage.includes('cybersecurity framework')) {
    return "We provide [NIST CSF Implementation](/services/nist-csf-implementation) and [NIST 171 Security Assessment](/services/nist-171-security-assessment) services. These help establish robust cybersecurity frameworks aligned with federal standards.";
  }
  
  if (lowerMessage.includes('soc 2') || lowerMessage.includes('soc2')) {
    return "Our [SOC 2 Compliance](/services/soc-2) service helps organizations demonstrate strong internal controls for security, availability, processing integrity, confidentiality, and privacy of customer data.";
  }
  
  if (lowerMessage.includes('database') || lowerMessage.includes('sql') || lowerMessage.includes('data')) {
    return "For database security, we offer [Database Security Audit](/services/database-security-audit) services covering SQL Server, Oracle, MySQL, PostgreSQL, and other database systems. We assess configurations, access controls, and data protection measures.";
  }
  
  if (lowerMessage.includes('network') || lowerMessage.includes('firewall') || lowerMessage.includes('router')) {
    return "Our [Network Security](/services/network-security) service provides comprehensive network infrastructure assessments including firewalls, routers, switches, and network segmentation analysis.";
  }
  
  if (lowerMessage.includes('government') || lowerMessage.includes('federal') || lowerMessage.includes('fisma') || lowerMessage.includes('ferpa')) {
    return "For government and federal compliance, we offer [FERPA/FISMA](/services/ferpa-fisma) services and [FFIEC Audits](/services/ffiec-audits) for financial institutions. We understand federal security requirements and compliance frameworks.";
  }
  
  // General service inquiries
  if (lowerMessage.includes('services') || lowerMessage.includes('what do you offer') || lowerMessage.includes('help')) {
    return "ITNOA offers comprehensive cybersecurity services including:\n\n• [IT Audit Services](/services/it-audit) - SAP, Database, Network, OS audits\n• [GRC Consulting](/services/grc-consulting) - ISO 27001, NIST, PCI DSS\n• [Business Continuity](/services/cyber-resilience) - BCP and resilience planning\n• [Penetration Testing](/services/penetration-testing) - Security assessments\n• [Cloud Security](/services/cloud-security-assessments) - AWS, Azure, GCP\n\nWhat specific area interests you most?";
  }
  
  // Default response
  return "I'd be happy to help you find the right cybersecurity service! ITNOA specializes in IT audits, compliance consulting, business continuity planning, and security assessments. Could you tell me more about your specific security needs or compliance requirements? You can also browse all our [Services](/services) or [Contact Us](/contact) directly.";
};

router.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    try {
      // Try OpenAI first
      const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          {
            role: "system",
            content: `You are a helpful AI assistant for ITNOA Cybersecurity Consultancy. Your job is to help users find the right cybersecurity service for their needs. You have detailed knowledge of all our services and can provide recommendations.

INSTRUCTIONS:
1. Be friendly, professional, and helpful
2. When recommending services, always provide the direct link in this format: "Visit [Service Name](/path/to/service)"
3. Ask clarifying questions if the user's needs are unclear
4. Keep responses concise but informative
5. If a user asks about pricing or specific technical details, direct them to contact us directly
6. Always end with an offer to help with anything else

SERVICES AVAILABLE:
${servicesInfo}

Remember: Always provide direct links to services when making recommendations.`
          },
          {
            role: "user",
            content: message
          }
        ],
        max_tokens: 500,
        temperature: 0.7,
      });

      const aiResponse = response.choices[0].message.content;

      res.json({ 
        response: aiResponse,
        timestamp: new Date().toISOString()
      });

    } catch (openaiError: any) {
      // Use intelligent fallback if OpenAI fails
      console.log("OpenAI unavailable, using intelligent fallback");
      const fallbackResponse = intelligentFallback(message);
      
      res.json({
        response: fallbackResponse,
        timestamp: new Date().toISOString(),
        fallback: true
      });
    }

  } catch (error) {
    console.error("Chatbot error:", error);
    res.status(500).json({ 
      error: "I'm experiencing some technical difficulties. Please try again or contact us directly.",
      fallback: true
    });
  }
});

export default router;