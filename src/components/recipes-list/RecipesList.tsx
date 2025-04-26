import Image from "next/image";

type RecipeCard = {
  id: number;
  image: string;
  title: string;
};

type RecipesListProps = {
  results: RecipeCard[];
};

export const RecipesList = ({ results }: RecipesListProps) => {
  return (
    <ul className="grid gap-10 mx-auto tablet:grid-cols-2 desktop:grid-cols-3">
      {results?.map(({ id, image, title }) => (
        <li key={id} className="border rounded-3xl px-3.5 py-3 shadow-lg">
          <Image
            src={image}
            alt={title}
            width={300}
            height={260}
            loading="lazy"
            className="rounded-3xl w-full tablet:260 mb-2.5 object-cover"
          />
          <h2 className="text-2xl text-center ">{title}</h2>
        </li>
      ))}
    </ul>
  );
};
