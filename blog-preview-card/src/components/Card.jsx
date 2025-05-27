import Info from "./Info";
import MainImage from "../assets/images/illustration-article.svg";

export function Card() {
  return (
    <article className="w-xs h-[500px] flex flex-col border rounded-2xl bg-custom-White p-6">
      <figure>
        <img className="rounded-2xl mb-6 max-w-full h-auto" src={MainImage} alt="" />
      </figure>
      <Info />
    </article>
  );
}
