"use client";
import Image from "next/image";
import Link from "next/link";
import useSound from "use-sound";

export default function Header() {
  const [nameSound] = useSound("/soundEffects/Junshen.mp3");
  const [aboutSound] = useSound("/soundEffects/About.mp3");
  const [projectsSound] = useSound("/soundEffects/Projects.mp3");
  const [expertiseSound] = useSound("/soundEffects/Expertise.mp3");
  const [showcaseSound] = useSound("/soundEffects/Showcase.mp3");
  const [contactSound] = useSound("/soundEffects/Contact.mp3");

  const section = ["About", "Projects", "Expertise", "Showcase", "Contact"];
  return (
    <>
      <div className="absolute left-1/2 -translate-x-1/2 flex flex-row justify-between items-center px-3 md:px-6 lg:px-11 py-5 w-11/12">
        <div
          className="flex flex-row gap-[10px] justify-center items-center cursor-pointer"
          onClick={() => {
            nameSound();
          }}
        >
          <Image src="/websitelogo.png" width={50} height={30} alt="logo" />
          <p className="font-extrabold md:text-lg lg:text-2xl xl:text-3xl">JUN SHEN</p>
        </div>

        <div className="hidden md:flex md:flex-row md:gap-7 lg:gap-10 md:text-lg lg:text-2xl xl:text-3xl font-light transition-all">
          
            <Link className="w-auto cursor-pointer hover:font-semibold" 
            href='#about'
              onClick={() =>{
                aboutSound();
              }}
            >
              About
            </Link>
            <p className="w-auto cursor-pointer hover:font-semibold"
              onClick={() =>{
                projectsSound();
              }}
            >
              Projects
            </p>
            <p className="w-auto cursor-pointer hover:font-semibold"
              onClick={() =>{
                expertiseSound();
              }}
            >
              Expertise
            </p>
            <p className="w-auto cursor-pointer hover:font-semibold"
            onClick={() =>{
              showcaseSound();
            }}
            >
              Showcase
            </p>
            <p className="w-auto cursor-pointer hover:font-semibold"
            onClick={() =>{
              contactSound();
            }}
            >
              Contact
            </p>
          
        </div>

        <div className="cursor-pointer md:hidden">
          <Image src="/Menu.png" width={40} height={40} alt="menu" className="w-8 md:w-10"/>
        </div>
        
      </div>
    </>
  );
}
