// src/pages/chatbots/MentalHealthBot.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const MentalHealthBot = () => {
  const [query, setQuery] = useState("");
  const [logs, setLogs] = useState<string[]>([]);
  const [isListening, setIsListening] = useState(false);

  const handleSendMessage = () => {
    if (!query.trim()) return;

    // Simulate basic response (you can integrate real ML/AI logic later)
    const response = getBotResponse(query);
    setLogs((prev) => [...prev, `🧍‍♀️ You: ${query}`, `🤖 Bot: ${response}`]);

    // Voice output
    const utterance = new SpeechSynthesisUtterance(response);
    speechSynthesis.speak(utterance);

    setQuery("");
  };

  const handleVoiceInput = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "en-US";
    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setQuery(transcript);
    };
    recognition.start();
  };

  const getBotResponse = (input: string) => {
    const lower = input.toLowerCase();
    if (lower.includes("anxious")) return "Take a deep breath. Try a 4-7-8 breathing exercise to calm your mind.";
    if (lower.includes("sad") || lower.includes("depressed")) return "It's okay to feel down. Consider journaling or going for a walk.";
    if (lower.includes("happy")) return "That's wonderful to hear! Celebrate your joy!";
    if (lower.includes("angry")) return "Try closing your eyes and counting to ten slowly.";
    return "I'm here for you. Tell me more about how you're feeling.";
  };

  const clearLogs = () => setLogs([]);

  return (
    <div className="min-h-screen p-6 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-hospital-secondary">Mental Health Assistant</h1>
        <p className="mb-6 text-gray-700 dark:text-gray-300">
          Your AI-powered mental health companion. Talk freely, and receive calming support and guidance.
        </p>

        {/* Chat Controls */}
        <div className="flex items-center gap-4 mb-4">
          <Input
            placeholder="How are you feeling today?"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            className="flex-grow"
          />
          <Button onClick={handleSendMessage} className="bg-hospital-secondary text-white hover:bg-hospital-dark">
            Send
          </Button>
          <Button onClick={handleVoiceInput} variant="outline">
            🎤 {isListening ? "Listening..." : "Voice"}
          </Button>
        </div>

        {/* Chat Log */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow-md h-[60vh] overflow-y-auto mb-6 border dark:border-gray-700">
          {logs.length === 0 ? (
            <p className="text-gray-500">No conversation yet. Start by sharing how you feel.</p>
          ) : (
            <ul className="space-y-3">
              {logs.map((msg, index) => (
                <li
                  key={index}
                  className={`p-2 rounded ${
                    msg.includes("🧍‍♀️") ? "bg-blue-100 dark:bg-gray-700" : "bg-green-100 dark:bg-green-800"
                  }`}
                >
                  {msg}
                </li>
              ))}
            </ul>
          )}
        </div>

        {logs.length > 0 && (
          <Button variant="destructive" onClick={clearLogs} className="mb-6">
            Clear Chat
          </Button>
        )}

        {/* Features */}
        <div className="mt-10 grid md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-3xl mb-2">🧠</div>
            <p className="font-semibold text-hospital-secondary">Emotional Support</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Safe, anonymous space to talk anytime</p>
          </div>
          <div>
            <div className="text-3xl mb-2">📊</div>
            <p className="font-semibold text-hospital-secondary">Mood Tracking</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Log your feelings daily for insight and balance</p>
          </div>
          <div>
            <div className="text-3xl mb-2">🧘‍♀️</div>
            <p className="font-semibold text-hospital-secondary">Mindfulness Tools</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Try guided breathing and grounding exercises</p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-900 border border-yellow-300 rounded-md">
          <h2 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Disclaimer</h2>
          <p className="text-sm text-yellow-700 dark:text-yellow-300">
            This assistant is for mental health support and not a replacement for professional medical help. Please contact certified therapists or emergency services when needed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MentalHealthBot;
