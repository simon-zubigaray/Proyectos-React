import { Ingredient } from "./Ingredient";

export const IngredientsSection = () => {
  const ingredients = [
    "2-3 large eggs",
    "Salt, to taste",
    "Pepper, to taste",
    "1 tablespoon of butter or oil",
    "Optional fillings: cheese, diced vegetables, cooked meats, herbs",
  ];

  return (
    <section className="py-8 border-b-1 border-stone-900/20">
      <h2 className="text-2xl text-brown-800 font-YoungSerif">Ingredients</h2>
      <ul className="space-y-2 pl-2 pt-4">
        {ingredients.map((ingredient, index) => (
          <Ingredient key={index} ingredient={ingredient} />
        ))}
      </ul>
    </section>
  );
};
