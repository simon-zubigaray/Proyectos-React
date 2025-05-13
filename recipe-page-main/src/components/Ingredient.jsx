export const Ingredient = ({ingredient}) => {
  return (
    <li className="relative pl-6 font-Outfit text-stone-600">
      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-brown-800"></span>
      {ingredient}
    </li>
  );
};
