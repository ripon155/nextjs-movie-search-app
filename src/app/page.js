// import Image from "next/image";

import Resultes from "@/components/Resultes";

const API_KEY = process.env.API_KEY;
const TOKEN = process.env.TOKEN;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";

  const response = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/movie/week"
    }?language=en-US&page=1`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        accept: "application/json",
      },
    },
    { next: { revalidate: 1000 } }
  );

  if (!response.ok) {
    throw new Error("faild to fetch data");
  }

  const data = await response.json();
  const results = data.results;
  console.log(results);
  return (
    <div>
      <Resultes results={results} />
    </div>
  );
}
