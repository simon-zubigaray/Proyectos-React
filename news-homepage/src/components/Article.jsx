export const Article = ({ image, number, title, text }) => {
  return (
    <article className="flex h-[162px]">
      <div className="max-w-[100px] flex-none">
        <img src={image} alt="" />
      </div>
      <div className="pl-6">
        <p className="text-SoftRed text-3xl mb-2 font-bold">
          {number}
        </p>
        <h2 className="font-bold mb-1.5 hover:text-SoftOrange cursor-pointer">
          {title}
        </h2>
        <p className="text-DarkGrayishBlue text-base">{text}</p>
      </div>
    </article>
  );
};
