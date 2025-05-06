import { useState } from "react";
import burgerMenu from "../assets/images/icon-menu.svg";
import burgerMenuClose from "../assets/images/icon-menu-close.svg";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      {/* Menú para Desktop */}
      <ul className="hidden sm:flex text-lg sm:w-md sm:place-content-around sm:text-base sm:items-center">
        <li className="hover:text-SoftRed">
          <a href="#">Home</a>
        </li>
        <li className="hover:text-SoftRed">
          <a href="#">New</a>
        </li>
        <li className="hover:text-SoftRed">
          <a href="#">Popular</a>
        </li>
        <li className="hover:text-SoftRed">
          <a href="#">Trending</a>
        </li>
        <li className="hover:text-SoftRed">
          <a href="#">Categories</a>
        </li>
      </ul>

      {/* Botón menú hamburguesa (solo móvil) */}
      <img
        className="w-10 h-4 cursor-pointer sm:hidden z-50 relative"
        src={burgerMenu}
        alt="Abrir menú"
        onClick={toggleMenu}
      />

      {/* Overlay oscuro */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 bg-opacity-50 sm:hidden z-40"
          onClick={toggleMenu}
        />
      )}

      {/* Panel deslizante con botón de cerrar */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 sm:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Botón de cerrar */}
        <div className="flex justify-end p-4">
          <img
            className="w-6 h-6 cursor-pointer"
            src={burgerMenuClose}
            alt="Cerrar menú"
            onClick={toggleMenu}
          />
        </div>

        {/* Enlaces del menú */}
        <ul className="flex flex-col gap-6 p-6 text-lg">
          <li className="hover:text-SoftRed">
            <a href="#">Home</a>
          </li>
          <li className="hover:text-SoftRed">
            <a href="#">New</a>
          </li>
          <li className="hover:text-SoftRed">
            <a href="#">Popular</a>
          </li>
          <li className="hover:text-SoftRed">
            <a href="#">Trending</a>
          </li>
          <li className="hover:text-SoftRed">
            <a href="#">Categories</a>
          </li>
        </ul>
      </div>
    </>
  );
};
