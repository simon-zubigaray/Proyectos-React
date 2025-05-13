export const Instruction = ({ index, instruction }) => {
  const indexTwoPoints = instruction.indexOf(":");
  const beforeTwoPoints = instruction.slice(0, indexTwoPoints);
  const afterTwoPoints = instruction.slice(indexTwoPoints + 1);

  return (
    <li className="flex items-start gap-2 font-Outfit text-stone-600">
      <span className="text-brown-800 font-bold min-w-[1.5rem]">
        {index + 1}.
      </span>
      <span>
        <span className="font-bold">{beforeTwoPoints}</span>: {afterTwoPoints}
      </span>
    </li>
  );
};
