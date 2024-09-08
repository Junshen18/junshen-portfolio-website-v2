import Image from "next/image";
import { useEffect } from "react";
import { Reveal } from "./reveal";
import { motion } from "framer-motion";


export default function AboutMe(){
    const images = [
        '/aboutme1.png',
        '/aboutme2.png',
        '/aboutme3.png',
        '/aboutme4.png',
    ]
    return(
        <>
            <div id="about" className="h-screen  w-[99%] px-2 md:px-12 flex justify-center">

                <div className="flex flex-col md:gap-5 justify-center w-full">
                    <div className="justify-center flex w-full text-5xl md:text-[80px] font-extrabold">
                        <Reveal >
                            <div>
                                About Me
                            </div>
                        </Reveal>
                    </div>
                    <div className=" justify-center items-center flex">
                        <Reveal >
                            <div className="grid grid-cols-2 gap-x-0 lg:flex lg:flex-row justify-center items-center md:h-[400px] lg:h-[220px] xl:h-[300px] w-full px-10 py-3">
                                {images.map((image, idx) => (
                                    <motion.div
                                        key={"images" + idx}
                                        style={{
                                                rotate: Math.random() * 20 - 10,
                                            }}
                                            whileHover={{
                                                scale: 1.1,
                                                rotate: 0,
                                                zIndex: 100,
                                            }}
                                            whileTap={{
                                                scale: 1.1,
                                                rotate: 0,
                                                zIndex: 100,
                                            }}
                                        className="rounded-[20px] -mr-4 mt-4 p-1 bg-white border border-neutral-100 flex-shrink-0 overflow-hidden"
                                    >
                                            <Image
                                                src={image}
                                                alt="images about me"
                                                width="500"
                                                height="320"
                                                className="rounded-2xl object-cover md:w-[250px] md:h-[160px] lg:w-[225px] lg:h-[144px] xl:w-[350px] xl:h-[224px] "
                                            />
                                    </motion.div>
                                ))}
                            </div>  
                        </Reveal>
                    </div>
                    

                    <Reveal>
                    <div className="text-sm md:text-xl xl:text-3xl text-justify md:px-12 2xl:px-20 flex flex-col justify-center items-center gap-5">
                        <p>I’m currently pursuing a degree in Software Engineering at APU, where I’m sharpening my skills in various technologies and expanding my network. 
                            I'm passionate about IT topics and cool, crazy, aesthetic stuff, from the Web 3 industry and blockchain to fancy animation website design. 
                            My passion for technology and problem-solving drives me to actively participate in hackathons, where I typically take on roles as a 
                            Front End Developer, UI/UX Designer, and part-time Graphic Designer, while also embracing backend work to deliver complete solutions. 
                            I love jokes and always try to add a bit of humor to life, believing that laughter makes every challenge easier to tackle!
                        believing that laughter makes every challenge easier to tackle!</p>
                        
                        <div className="w-fit text-xl px-3 py-2 md:px-7 md:py-4 rounded-xl text-center md:text-4xl font-bold bg-opacity-20 bg-neutral-500">"Code is like humor. when you have to explain it it’s bad"</div>
                    </div>
                    
                    </Reveal>
                    
                </div>

            </div>
        </>
    )
}