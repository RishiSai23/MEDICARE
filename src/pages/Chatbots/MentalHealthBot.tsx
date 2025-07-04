import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const MentalHealthBot = () => {
  const [query, setQuery] = useState("");
  const [logs, setLogs] = useState<string[]>([]);
  const [isListening, setIsListening] = useState(false);
  const [useChatbase, setUseChatbase] = useState(true); // toggle switch

  const handleSendMessage = () => {
    if (!query.trim()) return;

    const response = getBotResponse(query);
    setLogs((prev) => [...prev, `🧍‍♀️ You: ${query}`, `🤖 Bot: ${response}`]);

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

  const sendQueryToChatbase = () => {
    const iframe = document.getElementById("chatbase-mental-health") as HTMLIFrameElement;
    if (iframe && query.trim()) {
      iframe.contentWindow?.postMessage({ query }, "*");
      setQuery("");
    }
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
    <div className="min-h-screen p-6 bg-purple-50 dark:bg-gray-900 text-purple-900 dark:text-white">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold text-purple-700 dark:text-purple-300">Mental Health Assistant</h1>
          <Button
            onClick={() => setUseChatbase(!useChatbase)}
            className="bg-purple-600 text-white hover:bg-purple-700"
          >
            Switch to {useChatbase ? "Manual Bot" : "AI Bot"}
          </Button>
        </div>

        <p className="mb-6 text-gray-700 dark:text-gray-300">
          Talk freely with our AI mental health companion. Get emotional support, mindfulness guidance, and track your mood.
        </p>

        {/* Input Section */}
        <div className="flex items-center gap-2 mb-4">
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type how you're feeling..."
            className="flex-1"
            onKeyDown={(e) => e.key === "Enter" && (useChatbase ? sendQueryToChatbase() : handleSendMessage())}
          />
          <Button onClick={useChatbase ? sendQueryToChatbase : handleSendMessage} className="bg-purple-600 text-white">
            Send
          </Button>
          {!useChatbase && (
            <Button onClick={handleVoiceInput} variant="outline">
              🎤 {isListening ? "Listening..." : "Voice"}
            </Button>
          )}
        </div>

        {/* Chat Section */}
        {useChatbase ? (
          <div className="rounded-lg overflow-hidden shadow-md border border-purple-200">
            <iframe
              id="chatbase-mental-health"
              src="https://www.chatbase.co/chatbot-iframe/a6OS5RG44m86imdjlByBz" // Replace with your Chatbase bot ID
              title="Mental Health Bot"
              width="100%"
              height="600px"
              style={{ border: "none" }}
              allow="microphone"
            />
          </div>
        ) : (
          <>
            <div className="bg-white dark:bg-gray-800 p-4 rounded shadow-md h-[60vh] overflow-y-auto mb-6 border dark:border-gray-700">
              {logs.length === 0 ? (
                <p className="text-gray-500">No conversation yet. Start by sharing how you feel.</p>
              ) : (
                <ul className="space-y-3">
                  {logs.map((msg, index) => (
                    <li
                      key={index}
                      className={`p-2 rounded ${
                        msg.includes("🧍‍♀️")
                          ? "bg-blue-100 dark:bg-gray-700"
                          : "bg-green-100 dark:bg-green-800"
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
          </>
        )}

        {/* Features */}
        <div className="mt-10 grid md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-3xl mb-2">🧠</div>
            <p className="font-semibold text-purple-700 dark:text-purple-300">Emotional Support</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Safe, anonymous space to talk anytime</p>
          </div>
          <div>
            <div className="text-3xl mb-2">📊</div>
            <p className="font-semibold text-purple-700 dark:text-purple-300">Mood Tracking</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Log your feelings daily for insight and balance</p>
          </div>
          <div>
            <div className="text-3xl mb-2">🧘‍♀️</div>
            <p className="font-semibold text-purple-700 dark:text-purple-300">Mindfulness Tools</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Try guided breathing and grounding exercises</p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-4 bg-yellow-100 dark:bg-yellow-900 border border-yellow-300 dark:border-yellow-600 rounded-lg text-yellow-900 dark:text-yellow-200">
          <h2 className="font-bold mb-1">Disclaimer</h2>
          <p className="text-sm">
            This AI assistant offers supportive guidance and mindfulness tips. It is not a substitute for a licensed
            therapist. Please seek professional help when needed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MentalHealthBot;
