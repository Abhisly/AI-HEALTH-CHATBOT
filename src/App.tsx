
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import ChatbotPage from './pages/ChatbotPage'
import HomePage from './pages/HomePage'
import DiseasesPage from './pages/DiseasesPage'
import Header from './components/Header'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chatbot" element={<ChatbotPage />} />
          <Route path="/diseases" element={<DiseasesPage />} />
        </Routes>
        <Toaster position="top-right" />
      </div>
    </Router>
  )
}

export default App
