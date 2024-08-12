'use client'

import { FC } from 'react';
import { FaRobot, FaImage, FaInfoCircle } from 'react-icons/fa'; // Import Font Awesome icons

const steps = [
  {
    title: '1. Upload Image',
    description: 'Click on the upload button and select an image of the plant you want to identify.',
    icon: <FaImage style={{ fontSize: '3rem' }} />, // Image icon for uploading
  },
  {
    title: '2. AI Analyzes',
    description: 'Our AI will analyze the image to identify the plant and gather relevant information.',
    icon: <FaRobot style={{ fontSize: '3rem' }} />, // AI icon for analysis
  },
  {
    title: '3. Get Information',
    description: 'Receive detailed information about the plant, including care tips and interesting facts.',
    icon: <FaInfoCircle style={{ fontSize: '3rem' }} />, // Information icon for results
  },
];

const HowItWorks: FC = () => {
  return (
    <section className="w-full max-w-4xl mx-auto mt-12 px-4">
      <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <div key={index} className="bg-green-800 text-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center">
            <div className="mb-4 flex items-center justify-center">
              {step.icon}
            </div>
            <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
