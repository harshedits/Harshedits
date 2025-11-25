import { GoogleGenAI } from "@google/genai";
import { CONTACT_INFO, SERVICES, GENERAL_FAQ } from '../constants';

const SYSTEM_INSTRUCTION = `
You are the virtual assistant for Varanasi Silk Emporium, located in Gonda.
Your name is "Varanasi Silk Assistant".
Your goal is to help customers choose sarees, answer questions about location, pricing, and materials.

Store Details:
Address: ${CONTACT_INFO.address}
Phone: ${CONTACT_INFO.phone}
Owner: ${CONTACT_INFO.name}

Products:
${SERVICES.map(s => `- ${s.title}: ${s.description} (Price: ${s.priceRange})`).join('\n')}

FAQs:
${GENERAL_FAQ.map(f => `Q: ${f.question} A: ${f.answer}`).join('\n')}

Guidelines:
1. Be polite, professional, and welcoming (use Indian English nuances like "Namaste").
2. Keep answers concise (under 50 words unless asked for detail).
3. If asked about latest fashion trends outside the store's scope, use Google Search grounding.
4. If asked about stock not listed, invite them to visit the store or call/WhatsApp ${CONTACT_INFO.phone}.
`;

export const getAIResponse = async (userPrompt: string): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // We check if the query implies needing external info (trends, news) vs internal store info.
    // For simplicity, we enable search tool but rely on system instruction to guide when to use it.
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userPrompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        tools: [{ googleSearch: {} }] // Enable grounding for broader queries
      }
    });

    return response.text || "I apologize, I'm having trouble connecting to the store's brain right now. Please call us directly.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently offline. Please contact the shop owner directly via WhatsApp.";
  }
};