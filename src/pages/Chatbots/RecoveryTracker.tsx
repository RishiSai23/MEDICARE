// src/pages/chatbots/RecoveryTracker.tsx
import { useEffect, useState } from "react";

type Entry = {
  text: string;
  timestamp: string;
};

const RecoveryTracker = () => {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [input, setInput] = useState("");

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("recoveryEntries");
    if (saved) setEntries(JSON.parse(saved));
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem("recoveryEntries", JSON.stringify(entries));
  }, [entries]);

  const handleTrack = () => {
    if (!input.trim()) return;

    const newEntry: Entry = {
      text: input,
      timestamp: new Date().toLocaleString(),
    };

    const response = `Recovery note saved: ${input}`;
    speechSynthesis.speak(new SpeechSynthesisUtterance(response));

    setEntries([newEntry, ...entries]);
    setInput("");
  };

  const handleVoiceInput = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "en-US";
    recognition.onresult = (event: any) => {
      setInput(event.results[0][0].transcript);
    };
    recognition.start();
  };

  const deleteEntry = (index: number) => {
    const newList = entries.filter((_, i) => i !== index);
    setEntries(newList);
  };

  const editEntry = (index: number) => {
    const old = entries[index];
    setInput(old.text);
    deleteEntry(index);
  };

  return (
    <div className="min-h-screen bg-green-50 dark:bg-gray-900 p-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-green-700 dark:text-green-300 mb-6">🩺 Recovery Tracker</h2>

        {/* Entry list */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md max-h-[60vh] overflow-y-auto mb-6">
          {entries.length === 0 ? (
            <p className="text-gray-500 dark:text-gray-400">No entries yet. Start tracking your progress!</p>
          ) : (
            <ul className="space-y-4">
              {entries.map((entry, i) => (
                <li key={i} className="p-3 border rounded-md bg-green-100 dark:bg-gray-700 flex justify-between items-start">
                  <div>
                    <p className="text-green-900 dark:text-green-100">{entry.text}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{entry.timestamp}</p>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <button onClick={() => editEntry(i)} className="text-blue-500 text-sm hover:underline">Edit</button>
                    <button onClick={() => deleteEntry(i)} className="text-red-500 text-sm hover:underline">Delete</button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Input Area */}
        <div className="flex gap-2 items-center">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 p-3 rounded-md border border-gray-300 dark:bg-gray-800 dark:text-white"
            placeholder="Log your recovery progress..."
          />
          <button
            onClick={handleTrack}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
          >
            Track
          </button>
          <button
            onClick={handleVoiceInput}
            className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 px-4 py-2 rounded-md text-xl"
          >
            🎤
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecoveryTracker;
