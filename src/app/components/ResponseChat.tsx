"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { IoChatbubbleEllipsesOutline, IoClose } from "react-icons/io5";

const responses: { keywords: string[]; response: string }[] = [
  { keywords: ["hello", "good morning", "hey", "hi"], response: "Hi there! How can I help you?" },
  { keywords: ["how much", "price", "cost"], response: "Typically my fee ranges from $100 to $1500, depending on your vision." },
  { keywords: ["bye", "goodbye", "see you"], response: "Goodbye! Have a great day!" },
];


const getResponse = (input: string): string => {
  input = input.toLowerCase().trim();
  for (const entry of responses) {
    if (entry.keywords.some((keyword) => new RegExp(`\\b${keyword}\\b`).test(input))) {
      return entry.response;
    }
  }
  return "I'm not sure how to answer that. Can you try something else?";
};

const ResponseChat: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [messages, setMessages] = useState<{ role: "user" | "bot"; content: string }[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const chatEndRef = useRef<HTMLDivElement | null>(null);


  useEffect(() => {
    const savedMessages = localStorage.getItem("chatMessages");
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);


  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);


  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage: { role: "user" | "bot"; content: string } = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);


    setTimeout(() => {
      const botMessage: { role: "user" | "bot"; content: string } = { role: "bot", content: getResponse(input) };
      setMessages((prev) => [...prev, botMessage]);
      setLoading(false);
    }, 1000);
  };



  return (
    <>
      <motion.button
        className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
        aria-label="Toggle chat"
      >
        {isOpen ? <IoClose className="w-6 h-6" /> : <IoChatbubbleEllipsesOutline className="w-6 h-6" />}
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-20 right-5 w-80 max-w-full sm:w-96 bg-white dark:bg-gray-900 p-4 shadow-lg rounded-lg transition-all duration-300"
        >
          <h2 className="text-lg font-bold text-black dark:text-white">Chat with Me</h2>

          <div className="h-64 overflow-y-auto border p-3 rounded-md bg-gray-50 dark:bg-gray-800">
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`mb-2 p-2 rounded-md ${
                  msg.role === "user" ? "bg-green-500 text-white" : "bg-gray-300 dark:bg-gray-700 text-black dark:text-white"
                }`}
              >
                <strong>{msg.role === "user" ? "You: " : "Gem: "}</strong>
                {msg.content}
              </motion.div>
            ))}
            {loading && (
              <motion.p
                className="text-gray-500"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
              >
                Typing...
              </motion.p>
            )}
            <div ref={chatEndRef}></div>
          </div>

          <div className="mt-4 flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-grow p-2 border rounded-sm dark:bg-gray-800 dark:text-white"
              placeholder="Ask me anything..."
              disabled={loading}
            />
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={sendMessage}
              disabled={loading}
              className={`ml-2 px-4 py-2 rounded-sm ${loading ? "bg-gray-400" : "bg-green-500 text-white"}`}
            >
              Send
            </motion.button>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default ResponseChat;
