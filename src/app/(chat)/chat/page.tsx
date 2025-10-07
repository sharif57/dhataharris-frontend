

"use client";

import { useState, useRef, useEffect, Suspense } from "react";
import ChatSidebar from "@/app/components/ChatSidebar";
import ChatMessage from "@/app/components/ChatMessage";
import {
  useChatCreateMutation,
  useChatListQuery,
} from "@/redux/feature/chatSlice";
import { useUserProfileQuery } from "@/redux/feature/userSlice";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface ChatListItem {
  message: string;
  response: string;
}

function Home() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const query = searchParams.get("q");
  console.log("Query:", query);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Stronger Minds, Better Lives: Cultivating Resilience and Self-Care in a Chaotic World",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [, setIsSearchModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { data } = useUserProfileQuery(undefined);
  console.log("User Profile Data:", data?.data);
  const [chatCreate] = useChatCreateMutation();
  const { data: chatList } = useChatListQuery(sessionId);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const storedSessionId = localStorage.getItem("sessionId");
    if (storedSessionId) {
      setSessionId(storedSessionId);
    } else {
      const newSessionId = crypto.randomUUID();
      localStorage.setItem("sessionId", newSessionId);
      setSessionId(newSessionId);
    }
  }, []);

  // Handle query parameter, highlight input, clear URL, and trigger API call
  useEffect(() => {
    if (query && inputRef.current && !isTyping && sessionId && data?.email) {
      setInputValue(query); // Set input value to query
      inputRef.current.focus(); // Focus the input
      inputRef.current.select(); // Highlight the input text

      // Trigger API call with query
      const triggerApiCall = async () => {
        setShowWelcomeMessage(false);
        const userMessage = { role: "user" as const, content: query };
        setMessages((prev) => [...prev, userMessage]);
        setInputValue(""); // Clear input after API trigger
        setIsTyping(true);

        setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

        try {
          const response = await chatCreate({
            session_id: sessionId,
            email: data?.data?.email,
            message: query,
          }).unwrap();

          setMessages((prev) => {
            const newMessages = [...prev];
            newMessages[newMessages.length - 1] = {
              role: "assistant",
              content: response.response,
            };
            return newMessages;
          });
        } catch (error) {
          console.error("Error creating chat:", error);
          setMessages((prev) => {
            const newMessages = [...prev];
            newMessages[newMessages.length - 1] = {
              role: "assistant",
              content: "Sorry, something went wrong. Please try again.",
            };
            return newMessages;
          });
        } finally {
          setIsTyping(false);
        }
      };

      triggerApiCall();
      router.replace(pathname, { scroll: false }); // Clear query from URL
    }
  }, [query, pathname, router, chatCreate, sessionId, data?.email]);

  useEffect(() => {
    if (chatList && chatList.length > 0) {
      setShowWelcomeMessage(false);
      const formattedMessages = chatList.flatMap((item: ChatListItem) => {
        const messages: Message[] = [];
        if (item.message) {
          messages.push({ role: "user", content: item.message });
        }
        if (item.response) {
          messages.push({ role: "assistant", content: item.response });
        }
        return messages;
      });
      setMessages((prev) => [prev[0], ...formattedMessages]);
    }
  }, [chatList]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isTyping) return;

    setShowWelcomeMessage(false);
    const userMessage = { role: "user" as const, content: inputValue };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

    try {
      const response = await chatCreate({
        session_id: sessionId,
        email: data?.data?.email,
        message: inputValue,
      }).unwrap();
      console.log(response, '==========');

      setMessages((prev) => {
        const newMessages = [...prev];
        newMessages[newMessages.length - 1] = {
          role: "assistant",
          content: response.response,
        };
        return newMessages;
      });
    } catch (error) {
      console.error("Error creating chat:", error);
      setMessages((prev) => {
        const newMessages = [...prev];
        newMessages[newMessages.length - 1] = {
          role: "assistant",
          content: "Sorry, something went wrong. Please try again.",
        };
        return newMessages;
      });
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="flex h-screen bg-white text-black font-[roboto]">
      <ChatSidebar
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        setIsSearchModalOpen={setIsSearchModalOpen}
      />
      <div className="lg:w-[947px] mx-auto flex flex-col h-full relative">
        <div
          className="md:hidden absolute top-4 left-4 z-10"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="w-6 h-0.5 bg-red-500 mb-1.5"></div>
          <div className="w-6 h-0.5 bg-red-500 mb-1.5"></div>
          <div className="w-6 h-0.5 bg-red-500 mb-1.5"></div>
        </div>
        <div className="h-4"></div>
        {showWelcomeMessage ? (
          <div className="flex-1 flex items-center justify-center p-4">
            <div className="text-center">
              <p className="lg:text-[33px] leading-snug text-xl text-[#760C2A] font-medium font-roboto">
                Stronger Minds, Better Lives: Cultivating Resilience and
                Self-Care in a Chaotic World
              </p>
            </div>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto p-4 md:p-6 no-scrollbar">
            {messages.slice(1).map((message, index) => (
              <ChatMessage
                key={index}
                message={message}
                isTyping={
                  isTyping &&
                  message.role === "assistant" &&
                  index === messages.length - 2
                }
              />
            ))}
            <div ref={messagesEndRef} />
          </div>
        )}
        <div className="p-4">
          <form onSubmit={handleSubmit} className="relative">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask me anything about multiple sclerosis..."
              className="w-full min-h-6 no-scrollbar text-black border border-[#DADADA] placeholder-[#2C383C] rounded-3xl lg:py-9 py-4 pl-4 pr-12 focus:outline-none focus:ring-2 focus:ring-[#760C2A]"
              disabled={isTyping}
            />
            <button
              type="submit"
              disabled={isTyping || !inputValue.trim()}
              className={`absolute right-2 top-1/2 transform -translate-y-1/2 p-2 mr-2 lg:mt-4 rounded-full transition-colors ${
                isTyping || !inputValue.trim()
                  ? "text-gray-400"
                  : "text-[#005163] hover:bg-opacity-80"
              }`}
            >
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
                  fill="currentColor"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default function Chat() {
  return (
    <Suspense
      fallback={<div className="flex items-center justify-center h-screen">Loading chat...</div>}
    >
      <Home />
    </Suspense>
  );
}