export const MainSection = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-white">
      <h1 className="text-4xl font-bold font-YoungSerif text-stone-900 pb-6 sm:pt-6 sm:w-full">
        Simple Omelette Recipe
      </h1>
      <p className="text-base text-stone-600 font-Outfit leading-6 w-full">
        An easy and quick dish, perfect for any meal. This classic omelette
        combines beaten eggs cooked to perfection, optionally filled with your
        choice of cheese, vegetables, or meats.
      </p>
      <section className="bg-rose-800/10 rounded-lg font-Outfit my-8 w-full">
        <div className="py-6">
          <h2 className="text-xl text-rose-800 font-bold text-left pl-6 pb-2">
            Preparation time
          </h2>
          <ul className="space-y-2 text-stone-600 pl-10 w-[244px] sm:w-full">
            <li className="relative pl-6">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-rose-800"></span>
              <span className="font-bold">Total</span>: Approximately 10 minutes
            </li>
            <li className="relative pl-6">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-rose-800"></span>
              <span className="font-bold">Preparation</span>: 5 minutes
            </li>
            <li className="relative pl-6">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-rose-800"></span>
              <span className="font-bold">Cooking</span>: 5 minutes
            </li>
          </ul>
        </div>
      </section>
    </section>
  );
};

/*
      <section className="bg-rose-800/10 rounded-lg font-Outfit my-6 w-full">
        <h2 className="text-xl text-rose-800 font-bold text-left pt-4 pl-6">Preparation time</h2>
        <ul className="text-stone-600 pl-12 w-[244px]">
          <li><span className="font-bold">Total</span>: Approximately 10 minutes</li>
          <li><span className="font-bold">Preparation</span>: 5 minutes</li>
          <li><span className="font-bold">Cooking</span>: 5 minutes</li>
        </ul>
      </section>
*/
