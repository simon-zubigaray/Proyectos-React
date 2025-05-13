export const NutritionSection = () => {
  const nutrition = [
    {
      type: "Calories",
      amount: "277kcal",
    },
    {
      type: "Carbs",
      amount: "0g",
    },
    {
      type: "Protein",
      amount: "20g",
    },
    {
      type: "Fat",
      amount: "22g",
    },
  ];

  return (
    <section className="pt-4">
      <h2 className="py-4 text-2xl text-brown-800 font-YoungSerif">Nutrition</h2>
      <p className="font-Outfit text-stone-600">
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <div className="">
        {nutrition.map((item, index) => (
          <div key={index} className="grid grid-cols-2 border-b-1 border-stone-900/20 py-3 last:border-none">
            <p className="font-Outfit text-stone-600 text-left pl-8">{item.type}</p>
            <span className="font-Outfit text-brown-800 font-bold text-left pl-2">
              {item.amount}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
