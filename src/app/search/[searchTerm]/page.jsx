import Resultes from "@/components/Resultes";

const TOKEN = process.env.TOKEN;

async function page({ params }) {
  const searchTerm = params.searchTerm;

  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&include_adult=false&language=en-US&page=1'`,
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

  return (
    <div>
      {results && results.length === 0 && (
        <h1 className="text-center pt-6">Now results found</h1>
      )}
      {results && <Resultes results={results} />}
    </div>
  );
}

export default page;
