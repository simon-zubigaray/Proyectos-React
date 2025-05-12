import PerfilImg from "../images/avatar-jessica.jpeg";
import { Button } from "./Button";

export const Card = () => {
  const nameButtons = [
    "Github",
    "Frontend Mentor",
    "LinkedIn",
    "X",
    "Instagram",
  ];

  return (
    <div className="bg-grey-800 w-[324px] h-[580px] rounded-2xl flex flex-col items-center justify-center py-6 sm:w-[400px] sm:h-[620px]">
      <div className="flex flex-col items-center pb-6">
        <img
          className="size-20 rounded-full mb-6"
          src={PerfilImg}
          alt="Imagen personal"
        />
        <h2 className=" text-white text-3xl mb-2">Jessica Randall</h2>
        <p className="text-fluorecent-green font-bold text-sm">
          London, United Kingdom
        </p>
      </div>
      <p className="text-white text-sm pb-6">
        "Front-end developer and avid reader"
      </p>
      <div className="flex flex-col gap-4">
        {nameButtons.map((name, index) => {
          return <Button key={index} name={name} />;
        })}
      </div>
    </div>
  );
};
