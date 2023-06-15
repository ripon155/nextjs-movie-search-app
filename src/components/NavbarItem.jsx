"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function NavbarItem({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  return (
    <div>
      <Link
        className={`hover:text-amber-600 font-semibold ${
          genre &&
          genre === param &&
          "underline underline-offset-8 decoration-4 decoration-amber-600 "
        }`}
        href={`/?genre=${param}`}
      >
        <div>{title}</div>
      </Link>
    </div>
  );
}

export default NavbarItem;
