import logo from "../assets/images/logo.svg";
import { NavBar } from "./NavBar";

export const Header = () => {

  return (
    <header className="flex items-center place-content-between mb-8">
      <img src={logo} alt="Logo de la pagina" />
      <NavBar></NavBar>
    </header>
  );
};
