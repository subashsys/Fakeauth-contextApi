"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-slate-800 text-white">
      <Link href="/" className="font-bold text-lg">
        MyApp
      </Link>

      <div className="flex gap-4 items-center">
        {isAuthenticated ? (
          <>
            <span className="text-sm text-slate-300">Hi, {user?.name}</span>
            <Link href="/dashboard" className="hover:underline">
              Dashboard
            </Link>
            <button
              onClick={logout}
              className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/login" className="hover:underline">
              Login
            </Link>
            <Link href="/register" className="hover:underline">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}