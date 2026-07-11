"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // In a real app, you'd call an API here to create the user
    setSubmitted(true);
  }

  return (
    <div className="max-w-sm mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Register</h1>

      {submitted ? (
        <p className="text-green-600">
          Account created! (This is fake — go to Login and use test@test.com / 123456)
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input placeholder="Name" className="border rounded px-3 py-2" required />
          <input type="email" placeholder="Email" className="border rounded px-3 py-2" required />
          <input type="password" placeholder="Password" className="border rounded px-3 py-2" required />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Register
          </button>
        </form>
      )}
    </div>
  );
}