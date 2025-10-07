// "use client";

// import { useRouter } from "next/navigation";
// import type React from "react";
// import { useCreateSessionMutation, useUserAllSessionsQuery } from "@/redux/feature/chatSlice";
// import { useUserProfileQuery } from "@/redux/feature/userSlice";

// import { useState } from "react";

// export default function SearchInput() {
//   const router = useRouter();

//   const [query, setQuery] = useState("");
//     const [createSession] = useCreateSessionMutation();
//       const { data } = useUserProfileQuery(undefined);
//       // console.log("User Profile Data:", data);
//       const { data: sessionData } = useUserAllSessionsQuery(data?.email);
//       console.log("Session Data:", sessionData);
    
//       const handleCreateSession = async () => {
//         try {
//           const response = await createSession({
//             email: data?.email,
//           }).unwrap();
          
    
//           localStorage.setItem("sessionId", response?.session_id);
//           // router.push("/chat");
    
//           window.location.href = "/chat";
//           console.log("Session created successfully:", response);
//         } catch (error) {
//           console.error("Error creating session:", error);
//         }
//       };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle search query submission
//     router.push(`/chat?q=${query}`);
//     console.log("Search query:", query);
//   };

//   return (
//     <div className="relative w-full max-w-5xl mx-auto">
//       <form onSubmit={handleSubmit} className="w-full">
//         <div className="relative w-full rounded-[24px] border border-[#DADADA] overflow-hidden bg-[rgba(33,55,66,0.85)] backdrop-blur-sm shadow-lg">
//           <input
//             type="text"
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             placeholder="How Can I Help You...."
//             className="w-full bg-transparent font-roboto text-white placeholder-white placeholder:text-base text-lg py-7 px-6 outline-none"
//           />
//           <button
//             type="submit"
//             className="absolute right-8 top-1/2 transform -translate-y-1/2 text-white hover:opacity-80 transition-opacity"
//             aria-label="Search"
//           >
//             {/* <ArrowRight className="w-6 h-6" /> */}
            // <svg
            // className="mt-6"
            //   width="24"
            //   height="25"
            //   viewBox="0 0 24 25"
            //   fill="none"
            //   xmlns="http://www.w3.org/2000/svg"
            // >
            //   <path
            //     fillRule="evenodd"
            //     clipRule="evenodd"
            //     d="M9.24841 4.06069C9.47338 4.28573 9.59976 4.5909 9.59976 4.90909C9.59976 5.22729 9.47338 5.53246 9.24841 5.75749L6.49681 8.50909H13.2C15.4278 8.50909 17.5644 9.39409 19.1397 10.9694C20.715 12.5447 21.6 14.6813 21.6 16.9091V19.3091C21.6 19.6274 21.4736 19.9326 21.2485 20.1576C21.0235 20.3827 20.7183 20.5091 20.4 20.5091C20.0818 20.5091 19.7765 20.3827 19.5515 20.1576C19.3264 19.9326 19.2 19.6274 19.2 19.3091V16.9091C19.2 15.3178 18.5679 13.7917 17.4427 12.6665C16.3174 11.5412 14.7913 10.9091 13.2 10.9091H6.49681L9.24841 13.6607C9.36302 13.7714 9.45444 13.9038 9.51733 14.0502C9.58022 14.1966 9.61333 14.3541 9.61471 14.5134C9.6161 14.6727 9.58573 14.8308 9.5254 14.9782C9.46506 15.1257 9.37596 15.2597 9.26329 15.3724C9.15061 15.485 9.01663 15.5741 8.86916 15.6345C8.72168 15.6948 8.56367 15.7252 8.40433 15.7238C8.245 15.7224 8.08753 15.6893 7.94113 15.6264C7.79472 15.5635 7.66231 15.4721 7.55161 15.3575L2.75161 10.5575C2.52665 10.3325 2.40027 10.0273 2.40027 9.70909C2.40027 9.3909 2.52665 9.08573 2.75161 8.86069L7.55161 4.06069C7.77665 3.83573 8.08181 3.70935 8.40001 3.70935C8.71821 3.70935 9.02338 3.83573 9.24841 4.06069Z"
            //     fill="white"
            //   />
            // </svg>
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }
"use client";

import { useRouter } from "next/navigation";
import type React from "react";
import { useCreateSessionMutation } from "@/redux/feature/chatSlice";
import { useUserProfileQuery } from "@/redux/feature/userSlice";
import { useState } from "react";

export default function SearchInput() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [createSession] = useCreateSessionMutation();
  const { data } = useUserProfileQuery(undefined);
  // const { data: sessionData } = useUserAllSessionsQuery(data?.email);

  const handleCreateSession = async () => {
    try {
      const response = await createSession({
        email: data?.data?.email,
      }).unwrap();

      localStorage.setItem("sessionId", response?.session_id);
      console.log("Session created successfully:", response);
    } catch (error) {
      console.error("Error creating session:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    // Create session before navigating
    await handleCreateSession();
    // Navigate to chat with query
    router.push(`/chat?q=${encodeURIComponent(query)}`);
    console.log("Search query:", query);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <form onSubmit={handleSubmit} className="w-full">
        <div className="relative w-full rounded-[24px] border border-[#DADADA] overflow-hidden bg-[rgba(33,55,66,0.85)] backdrop-blur-sm shadow-lg">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="How Can I Help You...."
            className="w-full bg-transparent font-roboto text-white placeholder-white placeholder:text-base text-lg py-7 px-6 outline-none"
          />
          <button
            type="submit"
            className="absolute right-8 top-1/2 transform -translate-y-1/2 text-white hover:opacity-80 transition-opacity"
            aria-label="Search"
          >
           <svg
            className="mt-6"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.24841 4.06069C9.47338 4.28573 9.59976 4.5909 9.59976 4.90909C9.59976 5.22729 9.47338 5.53246 9.24841 5.75749L6.49681 8.50909H13.2C15.4278 8.50909 17.5644 9.39409 19.1397 10.9694C20.715 12.5447 21.6 14.6813 21.6 16.9091V19.3091C21.6 19.6274 21.4736 19.9326 21.2485 20.1576C21.0235 20.3827 20.7183 20.5091 20.4 20.5091C20.0818 20.5091 19.7765 20.3827 19.5515 20.1576C19.3264 19.9326 19.2 19.6274 19.2 19.3091V16.9091C19.2 15.3178 18.5679 13.7917 17.4427 12.6665C16.3174 11.5412 14.7913 10.9091 13.2 10.9091H6.49681L9.24841 13.6607C9.36302 13.7714 9.45444 13.9038 9.51733 14.0502C9.58022 14.1966 9.61333 14.3541 9.61471 14.5134C9.6161 14.6727 9.58573 14.8308 9.5254 14.9782C9.46506 15.1257 9.37596 15.2597 9.26329 15.3724C9.15061 15.485 9.01663 15.5741 8.86916 15.6345C8.72168 15.6948 8.56367 15.7252 8.40433 15.7238C8.245 15.7224 8.08753 15.6893 7.94113 15.6264C7.79472 15.5635 7.66231 15.4721 7.55161 15.3575L2.75161 10.5575C2.52665 10.3325 2.40027 10.0273 2.40027 9.70909C2.40027 9.3909 2.52665 9.08573 2.75161 8.86069L7.55161 4.06069C7.77665 3.83573 8.08181 3.70935 8.40001 3.70935C8.71821 3.70935 9.02338 3.83573 9.24841 4.06069Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}