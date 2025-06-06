import imageMobile from "../assets/images/image-web-3-mobile.jpg";
import imageDesktop from "../assets/images/image-web-3-desktop.jpg";

export const MainArticle = () => {
  return (
    <section className="mb-12">
      <picture>
        <source media="(max-width: 640px)" srcSet={imageMobile} />
        <source media="(min-width: 641px)" srcSet={imageDesktop} />
        <img src={imageMobile} alt="Articulo principal imagen" />
      </picture>
      <div className="sm:flex xl:gap-8">
        <div className="flex-1 py-6">
          <h2 className="text-5xl font-bold leading-none sm:text-[58px]">
            The Bright Future of Web 3.0?
          </h2>
        </div>

        <div className="flex-1 pt-6">
          <p className="text-base text-DarkGrayishBlue mb-10 sm:text-base">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="bg-SoftRed w-[185px] h-12 uppercase text-VeryDarkBlue font-bold hover:bg-VeryDarkBlue hover:text-OffWhite cursor-pointer">
            Read more
          </button>
        </div>
      </div>
    </section>
  );
};
