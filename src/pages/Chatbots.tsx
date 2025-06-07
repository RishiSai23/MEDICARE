import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Chatbots = () => {
  const chatbots = [
    {
      name: "Symptom Checker",
      description: "AI-powered symptom analysis to help identify potential health issues and provide medical guidance.",
      icon: "🩺",
      path: "/chatbots/symptom-checker",
      color: "bg-hospital-primary"
    },
    {
      name: "Mental Health Bot",
      description: "Confidential mental health support, mood tracking, and stress management assistance.",
      icon: "🧠",
      path: "/chatbots/mental-health",
      color: "bg-hospital-secondary"
    },
    {
      name: "Recovery Tracker",
      description: "Post-treatment recovery monitoring, medication reminders, and progress tracking.",
      icon: "📈",
      path: "/chatbots/recovery-tracker",
      color: "bg-hospital-accent"
    }
  ];

  return (
    <div className="min-h-screen bg-hospital-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-hospital-primary mb-4">AI Health Assistants</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our intelligent chatbots are here to provide 24/7 support for your health and wellness needs. 
            Choose the assistant that best fits your current needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {chatbots.map((bot, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className={`w-16 h-16 ${bot.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-3xl">{bot.icon}</span>
                </div>
                <CardTitle className="text-xl text-hospital-primary">{bot.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6 leading-relaxed">{bot.description}</p>
                <Link to={bot.path}>
                  <Button className="w-full bg-hospital-primary hover:bg-hospital-dark text-white">
                    Start Conversation
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-hospital-primary mb-8">Why Use Our AI Assistants?</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-6">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="font-semibold text-hospital-primary mb-2">Secure & Private</h3>
              <p className="text-sm text-gray-600">All conversations are encrypted and confidential</p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="font-semibold text-hospital-primary mb-2">24/7 Available</h3>
              <p className="text-sm text-gray-600">Get health support anytime, day or night</p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-semibold text-hospital-primary mb-2">Personalized</h3>
              <p className="text-sm text-gray-600">Tailored responses based on your health profile</p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">👨‍⚕️</div>
              <h3 className="font-semibold text-hospital-primary mb-2">Doctor Reviewed</h3>
              <p className="text-sm text-gray-600">AI responses reviewed by medical professionals</p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
          <h3 className="font-semibold text-yellow-800 mb-2">Important Medical Disclaimer</h3>
          <p className="text-sm text-yellow-700">
            Our AI assistants provide general health information and support but are not a substitute for professional medical advice, 
            diagnosis, or treatment. Always consult with qualified healthcare providers for medical emergencies or serious health concerns.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chatbots;