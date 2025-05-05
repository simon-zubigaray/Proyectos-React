import burgerMenu from "../assets/images/icon-menu.svg"

export const NavBar = () => {
  return (
    <>
      <ul className="hidden sm:flex text-lg sm:w-md sm:place-content-around sm:text-base sm:items-center">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">New</a>
        </li>
        <li>
          <a href="">Popular</a>
        </li>
        <li>
          <a href="">Trending</a>
        </li>
        <li>
          <a href="">Categories</a>
        </li>
      </ul>
      <img className="w-10 h-4 cursor-pointer sm:hidden" src={burgerMenu} alt="Menu Hamburguesa" />
    </>
  );
};
