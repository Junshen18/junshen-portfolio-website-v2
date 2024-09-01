import Image from "next/image";

export default function AboutMe(){
    return(
        <>
            <div className="h-screen w-[99%] px-12">

                <div className="flex flex-col gap-12 justify-center w-full">
                    <div className="text-[80px] font-extrabold justify-center flex">
                        About Me
                    </div>

                    <div className="flex justify-center items-center">
                        <Image
                        src="/aboutme1.png"
                        width={500}
                        height={320}
                        alt="devmatch-hackathon"
                        className="rounded-2xl"
                        />
                    </div>

                    <div className="text-2xl 2xl:text-3xl text-justify px-12 2xl:px-20">
                        I am currently pursuing a degree in Software Engineering at APU, where I have been honing my skills in various technologies. 
                        I am interested in exploring various kinds of IT topics, including Web 3 industry, and AI technology. My passion for technology 
                        and problem-solving has led me to voluntarily participate in more hackathons in the future, where I primarily serve as a Front End Developer, 
                        UI/UX desinger and Part time Artist. However, I am not limited to frontend tasks and often take on backend responsibilities, demonstrating my 
                        versatility and commitment to delivering complete solutions.
                    </div>
                </div>

            </div>
        </>
    )
}