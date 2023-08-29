import Link from "next/link";

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl font-bold">404</h1>
      <p className="text-xl font-medium">
        The page you are looking for does not exist
      </p>
      <Link
        href="/"
        className="mt-5 px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Go back home
      </Link>
    </div>
  );
}
