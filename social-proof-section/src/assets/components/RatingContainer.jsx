import { RatingCard } from "./RatingCard";

const ratings = [
  "Rated 5 Stars in Reviews",
  "Rated 5 Stars in Report Guru",
  "Rated 5 Stars in BestTech",
];

export const RatingContainer = () => {
  const positionClass = ["xl:place-self-start", "xl:place-self-center", "xl:place-self-end"];

  return (
    <div className="flex flex-col gap-4 xl:w-[540px] xl:justify-center xl:items">
      {ratings.map((text, index) => {
        return <RatingCard key={text} text={text} className={positionClass[index]} />;
      })}
    </div>
  );
};
