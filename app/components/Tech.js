import Image from "next/image";

export const skills = [
    {
      title: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      title: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      title: "Javascript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      title: "Sass",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
    },
    {
      title: "TailwindCSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    },
    {
      title: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      title: "NextJS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
      style: { filter: "invert(1)" },
    },
    {
      title: "Typescript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      title: "NodeJS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      title: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      title: "Firebase",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    },
    {
      title: "Figma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
  ];

const Tech = () => {
    return <div className="flex flex-col justify-center items-center min-h-[100vh] p-4 text-white " id="Skills">
    <div className="my-10">
                <div className="text-5xl text-center font-medium">My Skills</div>
            </div>
    <div
    className="grid
    grid-cols-3
    sm:w-8/12
    sm:grid-cols-5 gap-4 place-content-center
    place-items-center 
    "
    >
                     {[...skills,...skills].map((item, index) => <div
                     key={index}
                     data-aos="fade-up"
                     data-aos-duration="700"
                     data-aos-delay={50+ (150*index)}
                     >
                     <div  className="group sm:border-4 border-slate-300 flex gap-2 justify-center items-center p-4 
                     rounded-full transition-all hover:bg-secondary hover:text-black hover:shadow-lg hover:scale-125 hover:cursor-pointer
                     "
                     >
                <div className="">
                <div
          title={item.title}
          key={index}
          className="w-20 h-20 mx-auto flex items-center flex-col justify-center"
        >
          <img src={item.icon} className="h-10 w-10 group-hover:animate-bounce"/>
          <p className="text-xs group-hover:text-black font-bold mt-3 opacity-80">
            {item.title}
          </p>
        </div>
                </div>
                </div>
                </div>)}
             
      
    </div>        
    </div>
}

export default Tech;