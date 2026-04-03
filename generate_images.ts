import { GoogleGenAI } from "@google/genai";
import fs from 'fs';
import path from 'path';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function generateAndSave(prompt: string, filename: string) {
    console.log(`Generating ${filename}...`);
    try {
        const response = await ai.models.generateImages({
            model: 'imagen-4.0-generate-001',
            prompt: prompt,
            config: {
                numberOfImages: 1,
                outputMimeType: 'image/jpeg',
                aspectRatio: '16:9',
            },
        });
        const base64Data = response.generatedImages[0].image.imageBytes;
        fs.writeFileSync(path.join('public', filename), Buffer.from(base64Data, 'base64'));
        console.log(`Saved ${filename}`);
    } catch (e) {
        console.error(`Failed to generate ${filename}:`, e);
    }
}

async function main() {
    if (!fs.existsSync('public')) fs.mkdirSync('public');
    
    const baseDesc = "A futuristic agricultural robot. The robot has a metallic silver hexagonal body, four large rugged black wheels, a central black sensor window with a green glowing dot, two angled solar panel wings on top with blue glowing lights underneath, a black antenna, and a downward-pointing cylindrical laser module. ";
    
    await generateAndSave(baseDesc + "It is operating in a dark cinematic broccoli field at night. High-tech, 8k resolution, photorealistic, dramatic lighting, DJI style product photography.", "hero.jpg");
    await generateAndSave(baseDesc + "Close up of the downward-pointing cylindrical laser module shooting a bright blue laser beam at a weed in a broccoli field. High-tech, cinematic lighting, macro photography, depth of field.", "laser.jpg");
    await generateAndSave(baseDesc + "Navigating through a muddy, uneven agricultural field with broccoli plants. Rugged terrain, cinematic lighting, photorealistic, dynamic low angle shot.", "terrain.jpg");
}
main();
