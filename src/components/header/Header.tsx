import Link from "next/link";

export const Header = () => {
  return (
    <header className=" p-3 bg-amber-600 mb-10">
      <nav>
        <ul className="text-white flex gap-10">
          <Link href="/">Home</Link>
          <Link href="/recipes">Recipes</Link>
        </ul>
      </nav>
    </header>
  );
};
