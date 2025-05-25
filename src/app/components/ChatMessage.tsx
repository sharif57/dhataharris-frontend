// "use client";

// import { marked } from "marked";
// import Image from "next/image";

// interface MessageProps {
//   message: {
//     role: "user" | "assistant";
//     content: string;
//   };
//   isTyping?: boolean; // Added prop for loading indicator
// }

// export default function ChatMessage({
//   message,
//   isTyping = false,
// }: MessageProps) {
//   if (message.role === "user") {
//     return (
//       <div className="mb-4 max-w-3xl ml-auto">
//         <div className="text-black border border-[#DADADA] p-3 rounded-lg">
//           <p>{message.content}</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="mb-6 max-w-4xl">
//       <div className="p-4 rounded-lg flex lg:items-start items-start space-x-2">
//         <Image
//           src="/logo.png"
//           alt="assistant"
//           width={40}
//           height={40}
//           className="w-10 h-10 rounded-full mb-2"
//         />
//         {isTyping ? (
//           <div className="flex space-x-2 items-center">
//             <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
//             <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse delay-75"></div>
//             <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse delay-150"></div>
//           </div>
//         ) : (
//           <div
//             className="prose prose-invert max-w-none"
//             // dangerouslySetInnerHTML={{ __html: message.content }}
//             dangerouslySetInnerHTML={{ __html: marked.parseInline(message.content) }}
//           />
//         )}
//       </div>
//     </div>
//   );
// }

"use client";

import { marked } from "marked";
import Image from "next/image";
import { useEffect, useState } from "react";

interface MessageProps {
  message: {
    role: "user" | "assistant";
    content: string;
  };
  isTyping?: boolean;
}

export default function ChatMessage({
  message,
  isTyping = false,
}: MessageProps) {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    // Parse markdown content when message changes
    const parseMarkdown = async () => {
      const result = await marked.parse(message.content);
      setHtmlContent(result);
    };

    parseMarkdown();
  }, [message.content]);

  if (message.role === "user") {
    return (
      <div className="mb-4 max-w-3xl ml-auto">
        <div className="text-black border border-[#DADADA] p-3 rounded-lg">
          <p>{message.content}</p>
        </div>
        <div className="text-xs text-gray-500 text-right mt-1">
          {new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="mb-6 max-w-4xl">
      <div className="p-4 rounded-lg flex lg:items-start items-start space-x-2">
        <Image
          src="/logo.png"
          alt="assistant"
          width={40}
          height={40}
          className="w-10 h-10 rounded-full mb-2"
        />
        <div className="flex-1">
          {isTyping ? (
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-2">
                <span className="text-gray-600 text-sm">Thinking</span>
                <span className="animate-pulse">.</span>
                <span className="animate-pulse delay-150">.</span>
                <span className="animate-pulse delay-300">.</span>
              </div>
            </div>
          ) : (
            <div
              className="prose prose-invert max-w-none text-gray-700"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
          )}
          {!isTyping && (
            <div className="text-xs text-gray-500 mt-1">
              {new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}