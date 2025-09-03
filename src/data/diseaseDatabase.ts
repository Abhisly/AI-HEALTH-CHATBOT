
export interface Disease {
  name: string
  description: string
  symptoms: string[]
  recommendations: string[]
  disclaimer: string
}

export const diseaseDatabase: Record<string, Disease> = {
  respiratory_infection: {
    name: "Respiratory Infection",
    description: "A respiratory infection affects the airways and lungs. It can be caused by viruses, bacteria, or other pathogens. Symptoms typically include fever, cough, and breathing difficulties.",
    symptoms: [
      "Fever",
      "Persistent cough",
      "Shortness of breath",
      "Chest pain",
      "Fatigue",
      "Body aches"
    ],
    recommendations: [
      "Rest and stay hydrated",
      "Monitor your temperature regularly",
      "Seek immediate medical attention if breathing becomes difficult",
      "Isolate yourself to prevent spreading infection",
      "Consider telemedicine consultation"
    ],
    disclaimer: "Respiratory infections can be serious. Please consult a healthcare provider for proper diagnosis and treatment."
  },

  flu: {
    name: "Influenza (Flu)",
    description: "Influenza is a viral infection that attacks your respiratory system. It's characterized by sudden onset of fever, body aches, and fatigue. The flu is highly contagious and spreads through respiratory droplets.",
    symptoms: [
      "High fever",
      "Body aches and muscle pain",
      "Severe fatigue",
      "Headache",
      "Dry cough",
      "Sore throat",
      "Runny or stuffy nose"
    ],
    recommendations: [
      "Get plenty of rest",
      "Drink lots of fluids",
      "Take over-the-counter pain relievers for aches",
      "Stay home to avoid spreading the virus",
      "Consider antiviral medication if symptoms are severe"
    ],
    disclaimer: "If symptoms worsen or you're in a high-risk group, contact your healthcare provider immediately."
  },

  common_cold: {
    name: "Common Cold",
    description: "The common cold is a viral infection of your nose and throat. It's usually harmless and symptoms typically resolve within a week to 10 days.",
    symptoms: [
      "Runny or stuffy nose",
      "Sore throat",
      "Mild cough",
      "Sneezing",
      "Low-grade fever (rare)",
      "Mild fatigue"
    ],
    recommendations: [
      "Get adequate rest",
      "Stay hydrated with water, warm broths, or tea",
      "Use a humidifier or breathe steam",
      "Gargle with salt water for sore throat",
      "Consider over-the-counter cold medications"
    ],
    disclaimer: "While usually mild, see a doctor if symptoms persist beyond 10 days or worsen significantly."
  },

  tension_headache: {
    name: "Tension Headache",
    description: "Tension headaches are the most common type of headache. They're often caused by stress, poor posture, or muscle tension in the head, neck, and shoulders.",
    symptoms: [
      "Dull, aching head pain",
      "Sensation of tightness around forehead",
      "Tenderness around scalp, neck, and shoulders",
      "Mild to moderate pain",
      "Fatigue"
    ],
    recommendations: [
      "Apply hot or cold compresses to your head or neck",
      "Practice stress management techniques",
      "Get regular sleep and maintain good posture",
      "Stay hydrated and eat regular meals",
      "Consider over-the-counter pain relievers"
    ],
    disclaimer: "Frequent or severe headaches may indicate an underlying condition. Consult a healthcare provider if headaches persist."
  },

  healthy: {
    name: "No Concerning Symptoms Detected",
    description: "Based on your responses, you don't appear to have any concerning symptoms at this time. This is great news for your health!",
    symptoms: [
      "No fever",
      "No persistent cough",
      "No breathing difficulties",
      "No significant pain",
      "Normal energy levels"
    ],
    recommendations: [
      "Continue maintaining good health habits",
      "Eat a balanced diet rich in fruits and vegetables",
      "Exercise regularly and get adequate sleep",
      "Stay hydrated and manage stress",
      "Keep up with regular health check-ups"
    ],
    disclaimer: "Even without symptoms, regular health screenings and preventive care are important for maintaining good health."
  },

  general_consultation: {
    name: "General Health Consultation Recommended",
    description: "Based on your symptoms, it would be beneficial to consult with a healthcare provider for a proper evaluation. Your symptoms may require professional medical assessment.",
    symptoms: [
      "Various symptoms reported",
      "Combination of concerning signs",
      "Symptoms requiring professional evaluation"
    ],
    recommendations: [
      "Schedule an appointment with your healthcare provider",
      "Keep track of your symptoms and their duration",
      "Monitor your temperature and overall well-being",
      "Stay hydrated and get adequate rest",
      "Don't hesitate to seek urgent care if symptoms worsen"
    ],
    disclaimer: "This assessment is not a substitute for professional medical advice. Please consult with a qualified healthcare provider for proper diagnosis and treatment."
  }
}
