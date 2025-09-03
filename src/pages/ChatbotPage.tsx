
import React, { useState, useRef, useEffect } from 'react'
import {Send, Bot, User, RotateCcw} from 'lucide-react'
import { diseaseDatabase } from '../data/diseaseDatabase'
import ChatMessage from '../components/ChatMessage'
import QuestionButtons from '../components/QuestionButtons'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

interface DiagnosisState {
  currentQuestionIndex: number
  answers: boolean[]
  isComplete: boolean
  result: string | null
}

const ChatbotPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm HealthBot AI. I'll help you learn about potential health conditions by asking simple yes/no questions. Let's start with some basic symptoms. Are you experiencing any fever?",
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  
  const [diagnosis, setDiagnosis] = useState<DiagnosisState>({
    currentQuestionIndex: 0,
    answers: [],
    isComplete: false,
    result: null
  })

  const messagesEndRef = useRef<HTMLDivElement>(null)

  const questions = [
    "Are you experiencing any fever?",
    "Do you have a persistent cough?",
    "Are you experiencing shortness of breath or difficulty breathing?",
    "Do you have a headache?",
    "Are you feeling unusually tired or fatigued?",
    "Do you have any body aches or muscle pain?",
    "Are you experiencing nausea or vomiting?",
    "Do you have a sore throat?",
    "Are you experiencing any chest pain?",
    "Do you have a runny or stuffy nose?"
  ]

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const addMessage = (text: string, sender: 'user' | 'bot') => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, newMessage])
  }

  const analyzeSymptoms = (answers: boolean[]) => {
    const symptoms = answers.map((answer, index) => ({ answer, question: questions[index] }))
    const positiveSymptoms = symptoms.filter(s => s.answer)

    // Simple scoring system for demonstration
    const feverAndCough = answers[0] && answers[1]
    const respiratorySymptoms = answers[1] || answers[2] || answers[7]
    const fluLikeSymptoms = answers[0] && answers[4] && answers[5]
    const coldSymptoms = answers[7] && answers[9]

    if (feverAndCough && answers[2]) {
      return 'respiratory_infection'
    } else if (fluLikeSymptoms) {
      return 'flu'
    } else if (coldSymptoms && !answers[0]) {
      return 'common_cold'
    } else if (answers[3] && answers[4]) {
      return 'tension_headache'
    } else if (positiveSymptoms.length === 0) {
      return 'healthy'
    } else {
      return 'general_consultation'
    }
  }

  const handleAnswer = (answer: boolean) => {
    const answerText = answer ? "Yes" : "No"
    addMessage(answerText, 'user')

    const newAnswers = [...diagnosis.answers, answer]
    const nextQuestionIndex = diagnosis.currentQuestionIndex + 1

    if (nextQuestionIndex < questions.length) {
      // Ask next question
      setTimeout(() => {
        addMessage(questions[nextQuestionIndex], 'bot')
        setDiagnosis({
          currentQuestionIndex: nextQuestionIndex,
          answers: newAnswers,
          isComplete: false,
          result: null
        })
      }, 1000)
    } else {
      // Complete diagnosis
      const result = analyzeSymptoms(newAnswers)
      const diseaseInfo = diseaseDatabase[result]

      setTimeout(() => {
        addMessage(
          `Based on your answers, here's what I found:\n\n**${diseaseInfo.name}**\n\n${diseaseInfo.description}\n\n**Symptoms:** ${diseaseInfo.symptoms.join(', ')}\n\n**Recommendations:** ${diseaseInfo.recommendations.join(' ')}\n\n**Important:** ${diseaseInfo.disclaimer}`,
          'bot'
        )
        setDiagnosis({
          currentQuestionIndex: nextQuestionIndex,
          answers: newAnswers,
          isComplete: true,
          result
        })
      }, 1500)
    }
  }

  const resetChat = () => {
    setMessages([
      {
        id: '1',
        text: "Hello! I'm HealthBot AI. I'll help you learn about potential health conditions by asking simple yes/no questions. Let's start with some basic symptoms. Are you experiencing any fever?",
        sender: 'bot',
        timestamp: new Date()
      }
    ])
    setDiagnosis({
      currentQuestionIndex: 0,
      answers: [],
      isComplete: false,
      result: null
    })
  }

  return (
    <div className="max-w-4xl mx-auto p-4 h-screen flex flex-col">
      <div className="bg-white rounded-lg shadow-xl flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-4 rounded-t-lg flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Bot className="h-8 w-8" />
            <div>
              <h2 className="text-xl font-semibold">HealthBot AI</h2>
              <p className="text-blue-100 text-sm">Disease Awareness Assistant</p>
            </div>
          </div>
          <button
            onClick={resetChat}
            className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
            title="Reset Chat"
          >
            <RotateCcw className="h-5 w-5" />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 border-t bg-white rounded-b-lg">
          {!diagnosis.isComplete && diagnosis.currentQuestionIndex < questions.length && (
            <QuestionButtons onAnswer={handleAnswer} />
          )}
          
          {diagnosis.isComplete && (
            <div className="text-center">
              <button
                onClick={resetChat}
                className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105"
              >
                Start New Assessment
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ChatbotPage
