import Image from "next/image";
import TypeWritter from "typewriter-effect";
import { motion } from "framer-motion";
export default function HeroSection() {
  return (
    <>
      <div className="flex flex-row lg:p-5 2xl:p-12 justify-between items-center border border-opacity-60 border-white rounded-[20px] w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-5 pl-7"
        >
          <div className="font-extrabold">
            <span className="text-white text-[40px] leading-none text-5xl ">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <span className="text-transparent bg-clip-text text-[50px] leading-none md:text-7xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              WONG JUN SHEN
            </span>
          </div>
          <div className="h-16 mb-11">
            <span className="font-medium text-5xl text-white text-opacity-80">
              <TypeWritter
                options={{
                  autoStart: true,
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(`<span>FRONTEND DEVELOPER</span>`)
                    .pauseFor(1500)
                    .deleteAll()
                    .typeString(`<span>SOFTWARE ENGINEER</span>`)
                    .pauseFor(1500)
                    .deleteAll()
                    .typeString(`<span>UI/UX DESIGNER</span>`)
                    .pauseFor(1500)
                    .deleteAll()
                    .typeString(`<span>MOBILE DEVELOPER</span>`)
                    .pauseFor(1500)
                    .deleteAll()
                    .start();
                }}
              />
            </span>
          </div>
          <div className="border-white border-l-4 pl-[30px] h-48 flex items-center">
            <div className="w-[454px] text-3xl font-medium text-gray-300 items-center">
              <TypeWritter
              options={{
                autoStart: true,
                loop: false,
              }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      `<span>I'm a software engineer from Malaysia with a passion for creating
              innovative ideas and strong design skills.</span>`
                    )
                    .start();
                }}
              />
            </div>
          </div>
          <div className="h-12"></div>
        </motion.div>
        <div>
          <Image
            src="/herosection-img.jpg"
            width={493}
            height={667}
            alt="my-picture"
            className="rounded-2xl lg:h-[600px] lg:w-[450px] 2xl:h-[667px] 2xl:w-[493px]"
          />
        </div>
      </div>
    </>
  );
}
