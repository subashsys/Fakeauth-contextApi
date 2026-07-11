"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function DashboardPage() {
  const { isAuthenticated, user } = useAuth(); // no more "loading" here
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return <p className="mt-10 text-center">Loading...</p>;
  }

  return (
    <div className="mt-10">
      <h1 className="text-2xl font-bold mb-2">Dashboard</h1>
      <p>Welcome, {user?.name}! This page is only visible when logged in.</p>
    </div>
  );
}