import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY!);
  const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

  try {
    const { image } = await req.json();
    const imageParts = [
      {
        inlineData: {
          data: image,
          mimeType: "image/jpeg",
        },
      },
    ];

    const result = await model.generateContent([
      "Identify this plant and provide important information about it.",
      ...imageParts,
    ]);

    return NextResponse.json({ result: result.response.text() });
  } catch (error) {
    console.error("Error identifying plant:", error);
    return NextResponse.json({ error: "Error identifying plant" }, { status: 500 });
  }
}