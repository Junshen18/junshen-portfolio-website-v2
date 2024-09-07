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
            <div className="h-screen w-[99%] px-12">

                <div className="flex flex-col gap-12 justify-center w-full">
                    <div className="justify-center flex w-full text-[80px] font-extrabold">
                        <Reveal >
                            <div>
                                About Me
                            </div>
                        </Reveal>
                    </div>
                    <div className=" justify-center items-center flex">
                        <Reveal >
                            <div className="flex flex-row justify-center items-center  h-[220px] xl:h-[300px] w-full px-10">
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
                                        className="rounded-[20px] -mr-4 mt-4 p-1   bg-white  border border-neutral-100 flex-shrink-0 overflow-hidden"
                                    >
                                            <Image
                                                src={image}
                                                alt="images about me"
                                                width="500"
                                                height="320"
                                                className="rounded-2xl w-[250px] h-[160px] xl:w-[350px] xl:h-[224px] "
                                            />
                                    </motion.div>
                                ))}
                            </div>  
                        </Reveal>
                    </div>
                    

                    <Reveal>
                    <div className="text-2xl 2xl:text-3xl text-justify px-12 2xl:px-20">
                        I am currently pursuing a degree in Software Engineering at APU, where I have been honing my skills in various technologies. 
                        I am interested in exploring various kinds of IT topics, including Web 3 industry, and AI technology. My passion for technology 
                        and problem-solving has led me to voluntarily participate in more hackathons in the future, where I primarily serve as a Front End Developer, 
                        UI/UX desinger and Part time Artist. However, I am not limited to frontend tasks and often take on backend responsibilities, demonstrating my 
                        versatility and commitment to delivering complete solutions.
                    </div>
                    </Reveal>
                    
                </div>

            </div>
        </>
    )
}