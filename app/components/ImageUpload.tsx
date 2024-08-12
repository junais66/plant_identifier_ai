'use client'

import { useState, useRef, useEffect } from 'react'
import { GoogleGenerativeAI } from '@google/generative-ai'

interface ImageUploadProps {
  setPlantInfo: (info: string) => void
  setImageUrl: (url: string) => void
}

export default function ImageUpload({ setPlantInfo, setImageUrl }: ImageUploadProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [progress, setProgress] = useState<number>(0)
  const detailsRef = useRef<HTMLDivElement>(null)

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setIsLoading(true)
    setError(null)
    setProgress(0)

    try {
      const apiKey = process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY
      if (!apiKey) {
        throw new Error('API key is not set')
      }

      // Display the uploaded image
      const imageUrl = URL.createObjectURL(file)
      setImageUrl(imageUrl)

      const genAI = new GoogleGenerativeAI(apiKey)
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })

      const imageData = await file.arrayBuffer()

      // Simulate progress for demonstration
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval)
            return 100
          }
          return prev + 10
        })
      }, 500) // Update progress every 500ms

      const response = await model.generateContent([
        'Identify this plant and provide the following information in a structured format:\n1. Plant Name\n2. Scientific Name\n3. Family\n4. Native Region\n5. Main Characteristics\n6. Care Tips\n7. Interesting Facts',
        { inlineData: { data: Buffer.from(imageData).toString('base64'), mimeType: file.type } },
      ])

      const result = await response.response.text()
      setPlantInfo(result)

      // Scroll to the details section
      detailsRef.current?.scrollIntoView({ behavior: 'smooth' })
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An unknown error occurred')
      setPlantInfo('Failed to identify plant. Please try again.')
    } finally {
      setIsLoading(false)
      setProgress(0)
    }
  }

  return (
    <div className="mb-8">
      <label
        htmlFor="imageUpload"
        className="relative bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full cursor-pointer transition duration-300 shadow-md flex items-center justify-center"
      >
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              className="w-6 h-6 text-white animate-spin"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
              <path d="M4 12a8 8 0 0 1 8-8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        )}
        {isLoading ? `Identifying (${progress}%)` : 'Upload Plant Image'}
      </label>
      <input
        id="imageUpload"
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
        disabled={isLoading}
      />
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {/* Reference to scroll into view */}
      <div ref={detailsRef} />
    </div>
  )
}
