import Image from "next/image";
import { useState, useEffect } from 'react';
import { useClient } from 'next/client'; // Only needed if entire component uses client-side logic
import { image_ultra_request } from "@/apis/stabylity_ai/stability_image_ultra";


export default function Home() {
  useClient();
  const [generatedImage, setGeneratedImage] = useState(null); // State to hold the generated image URL (optional)
  const [prompt, setPrompt] = useState(null);

  useEffect(() => {
    const textarea = document.getElementById("promt_textarea");
    if (textarea) {
      setPrompt(textarea.value); // Capture prompt on client-side
    }
  }, []);

  const handleGenerateClick = () => {
    image_ultra_request(prompt)
      .then(response => {
        const generatedImageUrl = response.data.url
        setGeneratedImage(generatedImageUrl);
      })
      .catch(error => {
        console.error("Error generating image:", error);
      });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <label className="block">
          <textarea
            id="promt_textarea"
            rows="4"
            cols="50"
            type="text"
            name="input_promt"
            style={{ color: "black" }}
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Type your idea here"
          />
        </label>
        <div>
          <button
            id="generate_button"
            style={{ borderRadius: "10%", backgroundColor: "white", color: "black", float: "right" }}
            className="p-2 mt-3"
            onClick={handleGenerateClick}
          >
            Generate
          </button>
        </div>
      </div>
      <div>
        {generatedImage && ( // Conditionally render the image
          <Image
            src={generatedImage}
            alt="Generated Image"
            width={500}
            height={300}
          />
        )}
      </div>
    </main>
  );
}
