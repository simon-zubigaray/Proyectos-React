export const ReviewCard = ({ name, status, review, imgUrl }) => {
  return (
    <div className="bg-very-dark-magenta rounded-lg text-light-grayish-magenta px-8 pt-10 pb-8">
      <div className="flex gap-6 mb-6">
        <img className="size-10 rounded-full" src={imgUrl} alt="" />
        <div className="text-[1.0625rem]/[1.2rem]">
          <p className="font-bold">{name}</p>
          <p className="text-soft-pink">{status}</p>
        </div>
      </div>
      <p className="font-medium">{review}</p>
    </div>
  );
};
