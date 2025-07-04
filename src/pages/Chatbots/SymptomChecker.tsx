import { useState } from "react";

const SymptomChecker = () => {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [input, setInput] = useState("");
  const [useChatbase, setUseChatbase] = useState(true); // toggle between iframe and manual bot

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    const botResponse = {
      sender: "bot",
      text: `Based on "${input}", you may want to consult a doctor.`,
    };

    setMessages((prev) => [...prev, userMsg, botResponse]);
    setInput("");

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
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Symptom Checker Bot</h2>
        <button
          onClick={() => setUseChatbase(!useChatbase)}
          className="bg-blue-500 text-white px-4 py-1 rounded"
        >
          Switch to {useChatbase ? "Manual Bot" : "AI Bot"}
        </button>
      </div>

      {useChatbase ? (
        <div className="rounded-xl shadow-lg overflow-hidden border">
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/i8_LatvAqwayCgsNrmdym" // Replace with your Chatbase bot ID
            width="100%"
            height="600px"
            title="Symptom Checker Bot"
            style={{ border: "none" }}
            allow="microphone"
          ></iframe>
        </div>
      ) : (
        <>
          <div className="bg-white p-4 rounded shadow-md h-[60vh] overflow-y-auto mb-4">
            {messages.map((msg, i) => (
              <p
                key={i}
                className={`${
                  msg.sender === "user"
                    ? "text-right text-blue-600"
                    : "text-left text-green-600"
                }`}
              >
                <span className="font-semibold">
                  {msg.sender === "user" ? "You" : "Bot"}:
                </span>{" "}
                {msg.text}
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
            <button
              onClick={handleSend}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Send
            </button>
            <button
              onClick={handleVoiceInput}
              className="bg-gray-200 px-4 py-2 rounded"
            >
              🎤
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default SymptomChecker;
