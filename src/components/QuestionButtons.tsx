
import React from 'react'
import {Check, X} from 'lucide-react'

interface QuestionButtonsProps {
  onAnswer: (answer: boolean) => void
}

const QuestionButtons: React.FC<QuestionButtonsProps> = ({ onAnswer }) => {
  return (
    <div className="flex space-x-4 justify-center">
      <button
        onClick={() => onAnswer(true)}
        className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
      >
        <Check className="h-5 w-5" />
        <span>Yes</span>
      </button>
      
      <button
        onClick={() => onAnswer(false)}
        className="flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
      >
        <X className="h-5 w-5" />
        <span>No</span>
      </button>
    </div>
  )
}

export default QuestionButtons
