"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import ChatSidebar from "@/app/components/ChatSidebar";
import ChatMessage from "@/app/components/ChatMessage";
// import ChatSidebar from "@/components/chat/ChatSidebar";
// import ChatMessage from "@/components/chat/ChatMessage";
// import SearchModal from "@/components/chat/SearchModal";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! Ask me about business growth, leadership, or strategy",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Hide welcome message when user sends a message
    setShowWelcomeMessage(false);

    // Add user message
    const userMessage = { role: "user" as const, content: inputValue };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // Simulate AI response
    setTimeout(() => {
      if (
        inputValue.toLowerCase().includes("strategy") ||
        inputValue.toLowerCase().includes("startup")
      ) {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: `
              <h2>1. Customer-Centric Growth</h2>
              <p>Focusing on customer needs is one of the most effective strategies for growing a startup. Understanding their needs, pain points, and desires can help you develop a product or service that resonates with them, ensuring long-term growth. A customer-centric strategy involves:</p>
              <ul>
                <li><strong>Regular Feedback Loops:</strong> Continuously gather feedback through surveys, interviews, and user reviews to understand what your customers value most. This allows you to improve your product based on real-world usage and stay ahead of your competitors.</li>
                <li><strong>Personalization:</strong> Tailor your product, services, and marketing to meet the unique needs of your target audience. The more personalized the experience, the more likely customers will remain loyal and advocate for your brand.</li>
                <li><strong>Customer Support Excellence:</strong> Providing exceptional customer support helps build trust and loyalty. This can lead to repeat business and positive word-of-mouth referrals.</li>
              </ul>
              
              <h2>2. Lean Startup Approach</h2>
              <p>The Lean Startup methodology is widely used by entrepreneurs to reduce waste, optimize resources, and improve product-market fit. It involves:</p>
              <ul>
                <li><strong>Build-Measure-Learn Cycle:</strong> Start by creating a minimum viable product (MVP) — the simplest version of your product that you can use to start gathering feedback about customer needs. Once your MVP is out, measure how it performs, learn from your results, and iterate on the product.</li>
                <li><strong>Pivot or Persevere:</strong> Based on the feedback and data from your MVP, decide whether to pivot (change direction) or persevere (continue on this same path). This approach minimizes risk by validating assumptions before investing heavily in product development.</li>
              </ul>
              
              <h2>3. Developing a Strong Marketing Strategy</h2>
              <p>Marketing plays a critical role in startup growth. A robust marketing strategy helps you build brand awareness, generate leads, and create customer loyalty. Consider these key aspects of an effective startup marketing strategy:</p>
            `,
          },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              "I can help with that! What specific aspects of this topic would you like to explore further?",
          },
        ]);
      }
    }, 1000);
  };

  return (
    <div className="flex h-screen bg-white text-black font-[montserrat]">
      {/* Sidebar */}
      <ChatSidebar
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        setIsSearchModalOpen={setIsSearchModalOpen}
      />

      {/* Main Content */}
      <div className=" lg:w-[947px]  mx-auto flex flex-col h-full relative">
        {/* Mobile menu toggle */}
        <div
          className="md:hidden absolute top-4 left-4 z-10 "
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="w-6 h-0.5 bg-red-500  mb-1.5"></div>
          <div className="w-6 h-0.5 bg-red-500  mb-1.5"></div>
          <div className="w-6 h-0.5 bg-red-500  mb-1.5"></div>
        </div>

        {/* Header */}
        <div className="h-4"></div>

        {/* Messages */}
        {showWelcomeMessage ? (
          <div className="flex-1 flex items-center justify-center p-4">
            <div className="text-center">
              <p className="lg:text-[33px]  text-xl text-black font-medium font-roboto">
                Hello! Ask me about business growth, leadership, or strategy
              </p>
            </div>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto p-4 md:p-6 no-scrollbar">
            {messages.slice(1).map((message, index) => (
              <ChatMessage key={index} message={message} />
            ))}
            <div ref={messagesEndRef} />
          </div>
        )}

        <div className="p-4 ">
          <form onSubmit={handleSubmit} className="relative ">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask me anything about business..."
              className="w-full  text-black border border-[#DADADA] placeholder-[#2C383C] rounded-3xl lg:py-9  py-4 pl-4 pr-12  focus:outline-none focus:ring-2 focus:ring-[#760C2A]"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 mr-2 lg:mt-4 rounded-full  text-[#005163] hover:bg-opacity-80 transition-colors"
            >
              {/* <ArrowUp className="h-4 w-4 text-white" /> */}
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.0961 4.02517C10.321 4.2502 10.4474 4.55537 10.4474 4.87357C10.4474 5.19177 10.321 5.49694 10.0961 5.72197L7.34447 8.47357H14.0477C16.2755 8.47357 18.4121 9.35857 19.9874 10.9339C21.5627 12.5092 22.4477 14.6458 22.4477 16.8736V19.2736C22.4477 19.5918 22.3212 19.8971 22.0962 20.1221C21.8712 20.3471 21.5659 20.4736 21.2477 20.4736C20.9294 20.4736 20.6242 20.3471 20.3991 20.1221C20.1741 19.8971 20.0477 19.5918 20.0477 19.2736V16.8736C20.0477 15.2823 19.4155 13.7562 18.2903 12.6309C17.1651 11.5057 15.639 10.8736 14.0477 10.8736H7.34447L10.0961 13.6252C10.2107 13.7359 10.3021 13.8683 10.365 14.0147C10.4279 14.1611 10.461 14.3186 10.4624 14.4779C10.4638 14.6372 10.4334 14.7952 10.3731 14.9427C10.3127 15.0902 10.2236 15.2242 10.1109 15.3368C9.99827 15.4495 9.86429 15.5386 9.71681 15.599C9.56934 15.6593 9.41132 15.6897 9.25199 15.6883C9.09265 15.6869 8.93519 15.6538 8.78878 15.5909C8.64238 15.528 8.50996 15.4366 8.39927 15.322L3.59927 10.522C3.3743 10.2969 3.24792 9.99177 3.24792 9.67357C3.24792 9.35537 3.3743 9.05021 3.59927 8.82517L8.39927 4.02517C8.6243 3.80021 8.92947 3.67383 9.24767 3.67383C9.56587 3.67383 9.87103 3.80021 10.0961 4.02517Z"
                  fill="#2C383C"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>

      {/* Search Modal */}
      {/* {isSearchModalOpen && (
        <SearchModal onClose={() => setIsSearchModalOpen(false)} />
      )} */}
    </div>
  );
}
