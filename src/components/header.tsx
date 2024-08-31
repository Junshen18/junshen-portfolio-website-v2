"use client";
import Image from "next/image";
import useSound from "use-sound";

export default function Header() {
  const [buttonSound] = useSound("/soundEffects/Homepage.mp3");
  const section = ["About", "Projects", "Expertise", "Showcase", "Contact"];
  return (
    <>
      <div className="absolute left-1/2 -translate-x-1/2 flex flex-row justify-between items-center border border-white border-opacity-60 rounded-[20px] px-11 py-5 w-11/12">
        <div
          className="flex flex-row gap-[10px] justify-center items-center cursor-pointer"
          onClick={() => {
            buttonSound();
          }}
        >
          <Image src="/websitelogo.png" width={50} height={30} alt="logo" />
          <p className="font-extrabold text-2xl">JUN SHEN</p>
        </div>
        <div className="flex flex-row gap-10 text-2xl font-light transition-all">
          {section.map((item) => (
            <p key={item} className="w-auto cursor-pointer hover:font-semibold">
              {item}
            </p>
          ))}
        </div>
        <div className="cursor-pointer">
          <Image src="/Menu.png" width={40} height={40} alt="menu" />
        </div>
      </div>
    </>
  );
}
