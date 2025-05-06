import { NewArticle } from "./NewArticle";

export const NewContainer = () => {
  return (
    <aside className="max-h-[620px] bg-VeryDarkBlue text-OffWhite py-7 px-5">
      <h2 className="text-SoftOrange text-4xl font-bold">New</h2>
      <NewArticle
        title="Hydrogen VS Electric Cars"
        text="Will hydrogen-fueled cars ever catch up to EVs?"
      ></NewArticle>
      <NewArticle
        title="The Downsides of AI Artistry"
        text="What are the possible adverse effects of on-demand AI image generation?"
      ></NewArticle>
      <NewArticle
        title="Is VC Funding Drying Up?"
        text="Private funding by VC firms is down 50% YOY. We take a look at what that means."
      ></NewArticle>
    </aside>
  );
};
