"use client";
import { useState } from "react";
import axios from "axios";
import { IoChatbubbleEllipsesOutline, IoClose } from "react-icons/io5"; 


interface Message {
  role: "user" | "bot";
  content: string;
}

const ChatGemini: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false); 

  const API_KEY = "AIzaSyD6TX0VjRIabFD-05fHm7-E6C3thbE3eaQ"; 

  const sendMessage = async () => {
    if (!input) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput(""); 
    setLoading(true);

    try {
      const response = await axios.post<{ candidates: { output: string }[] }>(
        `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateText?key=${API_KEY}`,
        {
          prompt: { text: input },
          maxTokens: 100,
        }
      );

      const aiResponse: Message = {
        role: "bot",
        content: response.data.candidates?.[0]?.output || "Sorry, I couldn't understand that.",
      };

      setMessages((prevMessages) => [...prevMessages, aiResponse]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "bot", content: "Error connecting to AI" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <IoClose className="w-6 h-6" /> : <IoChatbubbleEllipsesOutline className="w-6 h-6" />}
      </button>


      {isOpen && (
        <div className="fixed bottom-20 right-5 w-80 bg-white dark:bg-gray-900 p-4 shadow-lg rounded-lg transition-all duration-300">
          <h2 className="text-lg font-bold text-black dark:text-white">Chat with Me</h2>


          <div className="h-64 overflow-y-auto border p-3 rounded-md bg-gray-50 dark:bg-gray-800">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 p-2 rounded-md ${
                  msg.role === "user"
                    ? "bg-green-500 text-white"
                    : "bg-gray-300 dark:bg-gray-700 text-black dark:text-white"
                }`}
              >
                <strong>{msg.role === "user" ? "You: " : "AI: "}</strong>
                {msg.content}
              </div>
            ))}
            {loading && <p className="text-gray-500">Typing...</p>}
          </div>
          
          <div className="mt-4 flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-grow p-2 border rounded-sm dark:bg-gray-800 dark:text-white"
              placeholder="Ask me anything..."
            />
            <button onClick={sendMessage} className="ml-2 bg-green-500 text-white px-4 py-2 rounded-sm">
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatGemini;
