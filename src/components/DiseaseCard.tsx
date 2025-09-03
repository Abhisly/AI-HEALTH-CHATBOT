
import React, { useState } from 'react'
import {ChevronDown, ChevronUp, AlertTriangle} from 'lucide-react'

interface Disease {
  name: string
  description: string
  symptoms: string[]
  recommendations: string[]
  disclaimer: string
}

interface DiseaseCardProps {
  disease: Disease
}

const DiseaseCard: React.FC<DiseaseCardProps> = ({ disease }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{disease.name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{disease.description}</p>
        
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
        >
          <span>{isExpanded ? 'Show Less' : 'Learn More'}</span>
          {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
        
        {isExpanded && (
          <div className="mt-4 space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Common Symptoms:</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {disease.symptoms.map((symptom, index) => (
                  <li key={index}>{symptom}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Recommendations:</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {disease.recommendations.map((rec, index) => (
                  <li key={index}>{rec}</li>
                ))}
              </ul>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
              <div className="flex items-start">
                <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" />
                <p className="text-sm text-yellow-800">{disease.disclaimer}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default DiseaseCard
