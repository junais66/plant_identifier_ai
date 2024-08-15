'use client'

import { useState } from 'react';
import ImageUpload from './components/ImageUpload';
import PlantInfo from './components/PlantInfo';
import HowItWorks from './components/HowItWorks';
import './globals.css';


export default function Home() {
  const [plantInfo, setPlantInfo] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-200 to-green-300 flex flex-col items-center justify-start p-8">
      <h1 className="text-3xl font-bold mb-4 text-green-800">Plant Identifier AI</h1>
      <p className="text-xl text-green-700 mb-8 text-center max-w-2xl">
        Discover the beauty of nature! Upload an image of any plant, and our AI will identify it and provide you with fascinating information.
      </p>
      <ImageUpload setPlantInfo={setPlantInfo} setImageUrl={setImageUrl} />
      {imageUrl && (
        <div className="mt-8 mb-8 w-full max-w-md">
          <img src={imageUrl} alt="Uploaded plant" className="w-full rounded-lg shadow-lg" />
        </div>
      )}
      {plantInfo && (
        <div className="w-full max-w-4xl">
          <PlantInfo info={plantInfo} />
        </div>
      )}
      <HowItWorks />
    </main>
  );
}
