export const NewArticle = ({title, text}) => {
  return (
    <article className="h-36 border-b-2 border-GrayishBlue py-7 last:border-none">
      <h2 className="cursor-pointer hover:text-SoftOrange text-xl mb-3 font-bold">
        {title}
      </h2>
      <p className="text-base">
        {text}
      </p>
    </article>
  );
};
