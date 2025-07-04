// src/pages/chatbots/SymptomChecker.tsx
import { useState } from "react";

const SymptomChecker = () => {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { sender: "user", text: input };
    const botResponse = {
      sender: "bot",
      text: `Based on "${input}", you may want to consult a doctor.`,
    };

    setMessages([...messages, userMsg, botResponse]);
    setInput("");

    // Speak response
    const utterance = new SpeechSynthesisUtterance(botResponse.text);
    speechSynthesis.speak(utterance);
  };

  const handleVoiceInput = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "en-US";
    recognition.onresult = (event: any) => {
      setInput(event.results[0][0].transcript);
    };
    recognition.start();
  };

  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <h2 className="text-2xl font-bold mb-4">Symptom Checker Bot</h2>
      <div className="bg-white p-4 rounded shadow-md h-[60vh] overflow-y-auto mb-4">
        {messages.map((msg, i) => (
          <p key={i} className={`${msg.sender === "user" ? "text-right text-blue-600" : "text-left text-green-600"}`}>
            <span className="font-semibold">{msg.sender === "user" ? "You" : "Bot"}:</span> {msg.text}
          </p>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 border rounded"
          placeholder="Describe your symptom..."
        />
        <button onClick={handleSend} className="bg-blue-600 text-white px-4 py-2 rounded">Send</button>
        <button onClick={handleVoiceInput} className="bg-gray-200 px-4 py-2 rounded">🎤</button>
      </div>
    </div>
  );
};

export default SymptomChecker;
