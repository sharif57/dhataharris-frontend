"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  useCreateSessionMutation,
  useUserAllSessionsQuery,
} from "@/redux/feature/chatSlice";
import { useUserProfileQuery } from "@/redux/feature/userSlice";
import { Home, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ChatSidebarProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
  setIsSearchModalOpen: (isOpen: boolean) => void;
}

interface ChatSession {
  session_id: string;
  title: string;
}

export default function ChatSidebar({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: ChatSidebarProps) {
  const [createSession] = useCreateSessionMutation();
  const { data } = useUserProfileQuery(undefined);
  // console.log("User Profile Data:", data);
  const { data: sessionData } = useUserAllSessionsQuery(data?.email);
  console.log("Session Data:", sessionData);

  const handleCreateSession = async () => {
    try {
      const response = await createSession({
        email: data?.email,
      }).unwrap();

      localStorage.setItem("sessionId", response?.session_id);
      // router.push("/chat");

      window.location.href = "/chat";
      console.log("Session created successfully:", response);
    } catch (error) {
      console.error("Error creating session:", error);
    }
  };

  const IMAGE = process.env.NEXT_PUBLIC_IMAGE;

  return (
    <>
      {/* Mobile overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-[#F9F9F9]  z-20 md:hidden font-roboto"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <div
        className={`
        fixed md:static top-0 left-0 h-full bg-[#F9F9F9] text-black w-64 z-30
        transform transition-transform duration-300 ease-in-out
        ${
          isMobileMenuOpen
            ? "translate-x-0"
            : "-translate-x-full md:translate-x-0"
        }
      `}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="p-4 flex flex-col mt-7 justify-between items-center">
            <div className="flex items-center gap-16">
              <Image
                src="/logo.png"
                alt="Logo"
                width={100}
                height={100}
                className="w-[80px] "
              ></Image>
              <button
                onClick={handleCreateSession}
                className="p-2 cursor-pointer rounded-full  transition-colors"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13"
                    stroke="#760C2A"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.04 3.02001L8.16 10.9C7.86 11.2 7.56 11.79 7.5 12.22L7.07 15.23C6.91 16.32 7.68 17.08 8.77 16.93L11.78 16.5C12.2 16.44 12.79 16.14 13.1 15.84L20.98 7.96001C22.34 6.60001 22.98 5.02001 20.98 3.02001C18.98 1.02001 17.4 1.66001 16.04 3.02001Z"
                    stroke="#760C2A"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14.91 4.1499C15.58 6.5399 17.45 8.4099 19.85 9.0899"
                    stroke="#760C2A"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Chat Sections */}
          <div className="flex-1 overflow-y-auto scrollbar-hide font-roboto">
            <div className="p-4">
              <h2 className="text-sm font-medium mb-2 font-roboto">Today</h2>
              <ul className="space-y-1">
                {sessionData?.map((chat: ChatSession) => (
                  <Link href={`/chat/${chat?.session_id}`} key={chat?.session_id} className="relative group">
                    <button className="w-full text-left py-2 px-3 rounded hover:bg-[#760C2A] hover:text-white transition-colors text-sm flex items-center justify-between">
                      <span>{chat?.title}</span>
                      <div className="relative"></div>
                    </button>
                  </Link>
                ))}
              </ul>
            </div>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              {/* <Button variant="outline">Open</Button> */}
              <div className="p-4 border-t cursor-pointer hover:bg-[#760C2A] hover:text-white  duration-300 border-b border-[#760C2A] flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-400 mr-3 overflow-hidden">
                  <Image
                    src={`${IMAGE}/${data?.profile_pic}`}
                    alt="User avatar"
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>
                <span className="text-sm">{data?.full_name}</span>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>

              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Home />
                <Link href={"/"}>Home</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="">
                <User />
                <span>{data?.full_name}</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="">
                <User />
                {/* <span>Profile</span> */}
                <Link href={"/my-profile"}>Profile</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </>
  );
}
