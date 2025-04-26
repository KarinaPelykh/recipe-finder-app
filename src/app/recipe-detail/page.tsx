import { IngredientsList } from "@/components/ingredients-list/IngredientsList";
import Image from "next/image";
import { Suspense } from "react";
import Loading from "./loading";

async function getRecipeDetail(id: number, Api_Key: string) {
  const res = await fetch(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${Api_Key}`,
    { cache: "force-cache" }
  );

  const data = await res.json();

  return data;
}

export default async function RecipeDetail({
  searchParams,
}: {
  searchParams: { [key: string]: number };
}) {
  const Api_Key = process.env.API_KEY;

  if (!Api_Key) {
    throw new Error("API_KEY is not defined in the environment variables.");
  }

  const { id } = await searchParams;

  const data = await getRecipeDetail(id, Api_Key);

  const { title, extendedIngredients, summary, image } = data;
  return (
    <section className="container pb-10 tablet:pb-12 desktop:pb-14">
      <h1 className="mb-10 text-2xl tablet:text-3xl desktop:text-5xl ">
        {title}
      </h1>
      <Image
        src={image}
        alt={title}
        width={400}
        height={360}
        className="mb-10"
      />
      <p className="mb-10 " dangerouslySetInnerHTML={{ __html: summary }} />
      <h2 className="mb-10 text-2xl">Ingredients</h2>
      <Suspense fallback={<Loading />}>
        <IngredientsList extendedIngredients={extendedIngredients} />
      </Suspense>
    </section>
  );
}
