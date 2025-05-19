'use client';
import Login from "@/app/components/Login";
import { GoogleOAuthProvider } from "@react-oauth/google";
import React from "react";

export default function LoginPage() {
  return (
    <div>
      <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_API_KEY_CLIENT_ID || ''}>
      {/* <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_API_KEY_Client_ID || ''}> */}
        <Login />
      </GoogleOAuthProvider>
    </div>
  );
}
