import { RecipesList } from "@/components/recipes-list/RecipesList";
import { Suspense } from "react";
import Loading from "./loading";

export default async function RecipesPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string | string }>;
}) {
  const API_KEY = "203c2aa8f74f4453b19558bd187b7d2c";

  const { query, cuisine, time } = await searchParams;

  const numberTime = Number(time);

  const res = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?query=${
      query ?? ""
    }&cuisine=${cuisine ?? ""}&maxReadyTime=${
      numberTime ?? ""
    }&apiKey=${API_KEY}`
  );
  const { results } = await res.json();

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
