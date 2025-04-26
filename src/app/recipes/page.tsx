import { RecipesList } from "@/components/recipes-list/RecipesList";
import { Suspense } from "react";
import Loading from "./loading";

type SearchParams = Promise<{ [key: string]: string }>;

async function getRecipes(
  query: string,
  cuisine: string,
  numberTime: number,
  Api_Key: string
) {
  const res = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?query=${
      query ?? ""
    }&cuisine=${cuisine ?? ""}&maxReadyTime=${
      numberTime ?? ""
    }&apiKey=${Api_Key}`
  );
  const data = await res.json();

  return data;
}

export default async function RecipesPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const Api_Key = process.env.API_KEY;

  if (!Api_Key) {
    throw new Error("API_KEY is not defined in the environment variables.");
  }

  const { query, cuisine, time } = await searchParams;

  const numberTime = Number(time);

  const { results } = await getRecipes(query, cuisine, numberTime, Api_Key);

  return (
    <section className="container pb-10 tablet:pb-12 desktop:pb-14">
      <h1 className=" mb-10 text-2xl tablet:text-3xl desktop:text-5xl text-center">
        Recipes Page
      </h1>
      <Suspense fallback={<Loading />}>
        <RecipesList results={results} />
      </Suspense>
    </section>
  );
}
