import Image from "next/image";

export const skills = [
  {
    title: "Javascript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
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
      title: "ExpressJs",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      title: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        title: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
        {
          title: "Docker",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
          },
          {
            title: "Linux",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
            },

          {
            title: "Rust",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg",
            },
              {
                title: "AWS",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
                },
                {
                  title: "Serverless",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
                  },
                  {
                    title: "Sequelize",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg",
                    },
                    {
                      title: "NextJS",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
                      style: { filter: "invert(1)" },
                      
                    },
                    {
                      title: "React",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                    },
                    {
                      title: "Redux",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
                    },
                    {
                      title: "TailwindCSS",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
                    },
                  {
                    title: "Material UI",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
                  },
                  {
                    title: "Git",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
                  }
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
                     {skills.map((item, index, arr) => <div
                     key={index}
                     data-aos={ (index / 2) > 2 ? "fade-left" :  "fade-right"}
                     data-aos-duration="700"
                     data-aos-delay={50+ (150*index)}
                     >
                     <div  className="group sm:border-2 border-slate-300 flex gap-2 justify-center items-center p-4 
                     rounded-full transition-all hover:bg-white  text-white hover:text-black hover:shadow-lg hover:scale-125 hover:cursor-pointer
                     "
                     >
                <div className="">
                <div
          title={item.title}
          key={index}
          className="w-20 h-20 mx-auto flex items-center flex-col justify-center"
        >
          <img src={item.icon} className="h-12 w-12 contrast-125	 group-hover:animate-bounce"/>
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