import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center flex-1 gap-10">
      <h1 className="text-electric-blue text-4xl font-extrabold font-mono ">
        404 - Page Not Found
      </h1>
      <Link
        href="/"
        className="font-mono bg-electric-blue text-white py-2 px-4 rounded border-transparent border-2 hover:bg-blue-600 transition-colors"
      >
        Home
      </Link>
    </div>
  );
};

export default NotFound;
