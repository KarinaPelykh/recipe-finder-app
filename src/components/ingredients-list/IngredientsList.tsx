type IngredientsList = {
  id: number;
  name: string;
};

type IngredientsListProps = {
  extendedIngredients: IngredientsList[];
};
export const IngredientsList = ({
  extendedIngredients,
}: IngredientsListProps) => {
  return (
    <ul>
      {extendedIngredients.map(({ id, name }) => (
        <li key={id}>
          <p>{name}</p>
        </li>
      ))}
    </ul>
  );
};
