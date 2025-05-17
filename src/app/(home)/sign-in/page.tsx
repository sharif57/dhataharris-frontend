'use client';
import Login from "@/app/components/Login";
import { GoogleOAuthProvider } from "@react-oauth/google";
import React from "react";

export default function LoginPage() {
  return (
    <div>
      {/* <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || ''}> */}
      <GoogleOAuthProvider clientId={'1045021261321-1fgfn6e6gfn7opue59huulslus2773jb.apps.googleusercontent.com'}>
        <Login />
      </GoogleOAuthProvider>
    </div>
  );
}
