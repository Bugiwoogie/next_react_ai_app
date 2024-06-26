import fs from "node:fs";
import axios from "axios";
import FormData from "form-data";

export async function image_ultra_request(prompt) {
    const payload = {
        prompt: prompt,
        output_format: "webp"
      };
      
      const response = await axios.postForm(
        `https://api.stability.ai/v2beta/stable-image/generate/ultra`,
        axios.toFormData(payload, new FormData()),
        {
          validateStatus: undefined,
          responseType: "arraybuffer",
          headers: { 
            Authorization: env("STABILITY_AI_API_KEY"), 
            Accept: "image/*" 
          },
        },
      );
      
      if(response.status === 200) {
        fs.writeFileSync("./generated_images/lighthouse.webp", Buffer.from(response.data));
        return response.data
      } else {
        throw new Error(`${response.status}: ${response.data.toString()}`);
      }

}