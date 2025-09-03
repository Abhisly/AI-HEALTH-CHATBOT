
import React, { useState } from 'react'
import {Search, Info} from 'lucide-react'
import { diseaseDatabase } from '../data/diseaseDatabase'
import DiseaseCard from '../components/DiseaseCard'

const DiseasesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const diseases = Object.values(diseaseDatabase).filter(disease =>
    disease.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    disease.symptoms.some(symptom => 
      symptom.toLowerCase().includes(searchTerm.toLowerCase())
    )
  )

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Disease Information Database</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore comprehensive information about various health conditions, their symptoms, and recommendations.
        </p>
      </div>

      {/* Search */}
      <div className="max-w-md mx-auto mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search diseases or symptoms..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Disease Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {diseases.map((disease, index) => (
          <DiseaseCard key={index} disease={disease} />
        ))}
      </div>

      {diseases.length === 0 && (
        <div className="text-center py-12">
          <Info className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
          <p className="text-gray-600">Try searching with different keywords or browse all diseases.</p>
        </div>
      )}

      {/* Disclaimer */}
      <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <div className="flex items-start">
          <Info className="h-6 w-6 text-yellow-600 mr-3 mt-0.5" />
          <div>
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Medical Disclaimer</h3>
            <p className="text-yellow-700">
              This information is for educational purposes only and should not be used as a substitute for professional medical advice, 
              diagnosis, or treatment. Always consult with a qualified healthcare provider for proper medical evaluation and treatment.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DiseasesPage
