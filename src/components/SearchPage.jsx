"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

function SearchPage() {
  const [search, setSearch] = useState("");

  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!search) return;
    router.push(`/search/${search}`);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-6xl mx-auto justify-between items-center"
    >
      <input
        type="text"
        placeholder="search..."
        className=" w-full h-14 outline-none rounded placeholder-gray-500 bg-transparent p-4 text-2xl"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        disabled={!search}
        className=" text-amber-600 disabled:text-gray-800 p-4"
      >
        Search
      </button>
    </form>
  );
}

export default SearchPage;
