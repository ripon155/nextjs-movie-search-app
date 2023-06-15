"use client";

import Card from "./Card";

function Resultes({ results }) {
  return (
    <div className=" sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-6xl mx-auto py-4 ">
      {results.map((result, index) => (
        <Card key={index} result={result} />
      ))}
    </div>
  );
}

export default Resultes;
