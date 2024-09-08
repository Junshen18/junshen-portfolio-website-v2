import Image from "next/image";
import TypeWritter from "typewriter-effect";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { Compare } from "./ui/compare";
export default function HeroSection() {
  return (
    <>
    
      <div className="flex flex-col justify-center md:flex-row md:gap-8 lg:p-5 2xl:p-12 px-7 md:justify-between items-center h-screen md:h-[800px] xl:h-screen rounded-[20px] w-full">

        {/* Mobile View */}
        <div className="md:hidden mb-5">
            <Image
              src="/me-mobile.jpg"
              width={200}
              height={200}
              alt="my-picture"
              className="rounded-full w-48 "
            />
        </div>


        <motion.div
          initial={{ x:-50, opacity: 0 }}
          animate={{ x:0, opacity: 1}}
          transition={{ type: 'spring', delay: 0.3 }}
          className="flex flex-col gap-5 md:gap-10 2xl:gap-14 justify-center items-center md:items-start"
        >

          <div>
            <div className="h-11 lg:mb-5 2xl:mb-9 hidden md:block">
              <span className="font-medium text-2xl lg:text-4xl 2xl:text-5xl text-white text-opacity-80">
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

            <div className="font-extrabold text-white text-3xl leading-none text-center lg:text-left lg:text-6xl 2xl:text-8xl">
                WONG JUN SHEN
            </div>

            {/* Mobile View */}
            <div className="md:hidden items-center justify-center flex">
              <span className="font-medium text-2xl text-white text-opacity-80">
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
          </div>

          <div className="border-white border-l-[3px] pl-[30px] h-28 md:h-28 2xl:h-48 flex items-center ">
            <div className="md:w-[380px] lg:w-[454px] lg:text-2xl 2xl:text-3xl font-medium text-gray-300 items-center">
                    I'm a software engineer from Malaysia with a passion for creating
                    innovative ideas and strong design skills.
            </div>
          </div>

          <div className="flex flex-row h-14 items-center gap-5">
            <Link href="#">
            <FaGithub className="w-9 h-9 md:w-[50px] md:h-[50px]"/>
            </Link>
            <Link href="#">
            <FaLinkedin className="w-9 h-9 md:w-[50px] md:h-[50px]"/>
            </Link>
            <Link href="#">
            <MdEmail  className="w-9 h-9 md:w-[50px] md:h-[50px]"/>
            </Link>
            <Link href="#">
            <FaTelegram className="w-9 h-9 md:w-[50px] md:h-[50px]"/>
            </Link>
        
          </div>

        </motion.div>

        <motion.div 
        
        initial={{ x:50, opacity: 0 }}
        animate={{ x:0, opacity: 1}}
        transition={{ type: 'spring', delay: 0.3 }}
        
      
        className="pr-7 hidden md:block">
          <Compare
            firstImage="/me.jpeg"
            secondImage="/me-art.jpeg"
            firstImageClassName="object-cover object-left-top "
            secondImageClassname="object-cover object-left-top "
            className="rounded-2xl md:h-[420px] md:w-[300px] lg:h-[490px] lg:w-[350px] xl:h-[700px] xl:w-[500px]"
            slideMode="hover"
            showHandlebar={false}
          />
        </motion.div>

      </div>
    </>
  );
}
