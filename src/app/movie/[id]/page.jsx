import Image from "next/image";

const TOKEN = process.env.TOKEN;

async function MoviePage({ params }) {
  const movieId = params.id;

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
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

  const movie = await response.json();

  return (
    <div className=" w-full">
      <div className=" p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          width={300}
          height={200}
          className=" rounded-lg "
          placeholder="blur"
          blurDataURL="/spinner.svg"
          style={{ maxWidth: "100%", height: "auto" }}
        ></Image>
        <div>
          <h2 className=" text-lg  mb-3 font-bold text-red-600">
            {movie.title}
          </h2>
          <p>
            <span>{movie.overview}</span>
          </p>
          <p className=" my-1">
            Movie Release Date: <span>{movie.release_date}</span>
          </p>
          <p className=" my-1">
            Run Time: <span>{movie.runtime}</span>
          </p>
          <p className=" my-1">
            Budget: <span>${movie.budget}</span>
          </p>
          <p className=" my-1">
            Revenue: <span>${movie.revenue}</span>
          </p>
          <p className=" my-1">
            Rating: <span>{movie.vote_average}</span>
          </p>
          <p className=" my-1">
            Total Voting: <span>{movie.vote_count}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default MoviePage;
