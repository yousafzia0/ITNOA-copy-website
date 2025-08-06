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

router.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    // the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
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

  } catch (error) {
    console.error("Chatbot error:", error);
    res.status(500).json({ 
      error: "I'm experiencing some technical difficulties. Please try again or contact us directly.",
      fallback: true
    });
  }
});

export default router;