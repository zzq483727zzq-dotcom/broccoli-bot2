import { GoogleGenAI } from '@google/genai';
import fs from 'fs';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function generate() {
  try {
    console.log('Generating image...');
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: 'A cinematic wide-angle shot of a futuristic agricultural robot in a vast, lush green broccoli field at dawn. The robot has a metallic silver and black body, four large rugged black off-road wheels with heavy-duty suspension. In the center front, there is a black rectangular sensor module with a glowing green dot. On top of the robot, there are two angled rectangular panels (like wings) extending upwards and outwards, each with a bright blue LED light shining downwards. A small black antenna sticks up from the top. The background features a dramatic sunrise sky with warm orange and purple hues, contrasting with the cool metallic robot. Photorealistic, 8k resolution, highly detailed, depth of field, professional photography, perfect for a website hero background.',
      config: {
        imageConfig: {
          aspectRatio: "16:9"
        }
      }
    });

    const base64Data = response.candidates[0].content.parts.find(p => p.inlineData)?.inlineData?.data;
    if (base64Data) {
      fs.writeFileSync('public/hero-bg.jpg', Buffer.from(base64Data, 'base64'));
      console.log('Successfully saved hero-bg.jpg');
    } else {
      console.error('No image data found in response');
    }
  } catch (e) {
    console.error('Error generating image:', e);
  }
}
generate();
