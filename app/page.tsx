import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-10 text-center">
      <h1 className="text-3xl font-bold">Welcome to MyApp</h1>
      <p className="text-slate-500 mt-2">
        A simple auth flow demo using React Context API
      </p>

      <Link
        href="/register"
        className="inline-block mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Get Started
      </Link>
    </div>
  );
}