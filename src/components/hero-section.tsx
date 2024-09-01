import Image from "next/image";
import TypeWritter from "typewriter-effect";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
export default function HeroSection() {
  return (
    <>
      <div className="flex flex-col justify-center md:flex-row lg:p-5 2xl:p-12 px-7 md:justify-between items-center h-screen rounded-[20px] w-full">

        <div className="md:hidden">
            <Image
              src="/herosection-img-mobile.jpg"
              width={200}
              height={200}
              alt="my-picture"
              className="rounded-sm w-48 "
            />
        </div>

        <div
          className="flex flex-col gap-10 2xl:gap-14"
        >

          <div>
            <div className="h-11 lg:mb-5 2xl:mb-9 ">
              <span className="font-medium lg:text-4xl 2xl:text-5xl text-white text-opacity-80">
                <TypeWritter
                  options={{
                    autoStart: true,
                    loop: true,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      
                      .typeString(`<span>SOFTWARE ENGINEER</span>`)
                      .pauseFor(1500)
                      .deleteAll()
                      .typeString(`<span>UI/UX DESIGNER</span>`)
                      .pauseFor(1500)
                      .deleteAll()
                      .typeString(`<span>MOBILE DEVELOPER</span>`)
                      .pauseFor(1500)
                      .deleteAll()
                      .typeString(`<span>GRAPHIC DESIGNER</span>`)
                      .pauseFor(1500)
                      .deleteAll()
                      .start();
                  }}
                />
              </span>
            </div>

            <div className="font-extrabold">
              <span className="text-white leading-none lg:text-6xl 2xl:text-8xl ">
                WONG JUN SHEN
                {/* Hello, I&apos;m{" "} */}
              </span>
              
              {/* <span className="text-transparent bg-clip-text text-8xl leading-none md:text-7xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                JUN SHEN
              </span> */}
            </div>
          </div>

          <div className="border-white border-l-[3px] pl-[30px] h-36 2xl:h-48 flex items-center ">
            <div className="md:w-[454px] lg:text-2xl 2xl:text-3xl font-medium text-gray-300 items-center">
                    I'm a software engineer from Malaysia with a passion for creating
                    innovative ideas and strong design skills.
            </div>
          </div>

          <div className="flex flex-row h-14 items-center gap-5">
            <Link href="#">
            <FaGithub className="w-[50px] h-[50px]"/>
            </Link>
            <Link href="#">
            <FaLinkedin className="w-[50px] h-[50px]"/>
            </Link>
            <Link href="#">
            <MdEmail  className="w-[50px] h-[50px]"/>
            </Link>
            <Link href="#">
            <FaTelegram className="w-[50px] h-[50px]"/>
            </Link>
        
          </div>

        </div>

        <div className="pr-7 hidden md:block">
          <Image
            src="/herosection-img.jpg"
            width={493}
            height={667}
            alt="my-picture"
            className="rounded-2xl md:w-[428px] 2xl:h-[667px] 2xl:w-[493px]"
          />
        </div>

      </div>
    </>
  );
}
