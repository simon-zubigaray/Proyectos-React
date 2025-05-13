import { Instruction } from "./Instruction";

export const InstructionsSection = () => {

    const instructions = [
        'Beat the eggs: In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.',
        'Heat the pan: Place a non-stick frying pan over medium heat and add butter or oil.',
        'Cook the omelette: Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.',
        'Add fillings (optional): When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.',
        'Fold and serve: As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.',
        'Enjoy: Serve hot, with additional salt and pepper if needed.',
    ]

  return (
    <section className="py-8 border-b-1 border-stone-900/20">
      <h2 className="text-2xl text-brown-800 font-YoungSerif">Instructions</h2>
      <ul className="space-y-2 pl-2 pt-4">
        {instructions.map((instruction, index) => (
          <Instruction key={index} index={index} instruction={instruction} />
        ))}
      </ul>
    </section>
  );
};