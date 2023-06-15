"use client";

import Image from "next/image";
import Link from "next/link";
import { BsHandThumbsUp } from "react-icons/bs";

function Card({ result }) {
  return (
    <div className=" cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group">
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`}
          alt={result.title}
          width={500}
          height={200}
          className=" sm:rounded-t-lg group-hover:opacity-80 duration-200"
          placeholder="blur"
          blurDataURL="/spinner.svg"
          style={{ width: "100%", height: "auto" }}
        ></Image>
        <div className=" p-2">
          <p className=" line-clamp-3 text-md">{result.overview}</p>
          <h2 className="text-lg font-bold space-y-3">
            {result.title || result.name}
          </h2>
          <p className=" flex items-center ">
            {result.release_date}
            <BsHandThumbsUp className=" h-5 mr-1 ml-3" /> {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Card;
