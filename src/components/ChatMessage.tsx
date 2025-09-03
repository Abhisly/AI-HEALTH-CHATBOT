
import React from 'react'
import {Bot, User} from 'lucide-react'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

interface ChatMessageProps {
  message: Message
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isBot = message.sender === 'bot'

  const formatText = (text: string) => {
    // Simple markdown-like formatting
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br>')
  }

  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-4`}>
      <div className={`flex items-start space-x-3 max-w-3xl ${isBot ? '' : 'flex-row-reverse space-x-reverse'}`}>
        <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
          isBot ? 'bg-blue-500' : 'bg-green-500'
        }`}>
          {isBot ? <Bot className="h-5 w-5 text-white" /> : <User className="h-5 w-5 text-white" />}
        </div>
        
        <div className={`px-4 py-3 rounded-lg shadow-sm ${
          isBot 
            ? 'bg-white border border-gray-200' 
            : 'bg-gradient-to-r from-blue-500 to-green-500 text-white'
        }`}>
          <div 
            className={`text-sm ${isBot ? 'text-gray-800' : 'text-white'}`}
            dangerouslySetInnerHTML={{ __html: formatText(message.text) }}
          />
          <div className={`text-xs mt-1 ${isBot ? 'text-gray-500' : 'text-blue-100'}`}>
            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatMessage
