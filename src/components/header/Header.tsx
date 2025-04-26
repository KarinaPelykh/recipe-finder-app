"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const path = usePathname();

  console.log(path);
  const isHome = path === "/" && "Home";

  return (
    <header className="py-3 bg-amber-600 mb-10 ">
      <nav className="container">
        <ul className="text-white flex gap-10">
          <Link href="/" className="text-3xl">
            Home
          </Link>
          <Link
            href="/recipes"
            className={clsx(isHome ? "hidden" : "flex text-3xl")}
          >
            Recipes
          </Link>
        </ul>
      </nav>
    </header>
  );
};
