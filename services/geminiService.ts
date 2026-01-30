
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getAdoptionAdvice = async (petType: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Proporciona 3 consejos rápidos y valiosos para alguien que está pensando en adoptar un ${petType} en una protectora en España. Sé amable, conciso y profesional.`,
      config: {
        temperature: 0.7,
        maxOutputTokens: 200,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Error fetching Gemini advice:", error);
    return "Considere siempre el compromiso de tiempo y recursos necesarios para dar una vida feliz a su nueva mascota.";
  }
};
