/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Icons from "./Icons";

import { projects } from "../data/projects.json";

const Project = () => {
    return (
        <>
        <div className="min-h-[90vh] flex flex-col justify-center  text-white " id="Work">
    <div className="flex flex-col justify-center items-center gap-4">
        <div className="mt-6">
            <div className="font-medium text-5xl m-4">
            Portfolio
            </div>
        </div>
        <div className="flex-wrap flex justify-center items-center mb-4 sm:gap-4 ">
            {["Backend", "Web Development", "UI/UX", "Linux", "Networking"].map((value,index, array) => <>
                <div key={value} className="text-lg"
                   data-aos="fade-left"
                   data-aos-duration={1000+(1000*index)}
                   >
                {value}
            </div>
            {array.length !== index+1 && <div className="w-2 bg-primary h-[2px]" />}
            </>
           )}
        </div>
        </div>
        <div className="
        grid grid-cols-4 
        gap-2
        p-2
        auto-rows-fit sm:grid-rows-2
        
        ">
                <div className="col-span-4  sm:col-span-2 sm:row-span-1"
                data-aos="fade-right"
                data-aos-duration="700"
                data-aos-delay="50"
                >
                <Anime project={projects[0]}/>
                </div>
                <div className=" col-span-4 sm:col-span-1 sm:col-start-3 sm:row-span-1"
                data-aos="fade-down"
                 data-aos-duration="700"
                 data-aos-delay="50">
                <Anime project={projects[1]}/>
                </div>
                <div className=" col-span-4 sm:col-span-1 sm:col-start-4 sm:row-span-2 sm:row-start-1"
                 data-aos="fade-left"
                 data-aos-duration="700"
                 data-aos-delay="50">
                <Anime project={projects[2]}/>
                </div>
                <div className=" col-span-4 sm:col-span-1 sm:col-start-1 sm:row-span-1 sm:row-start-2"
                 data-aos="fade-right"
                 data-aos-duration="700"
                 data-aos-delay="50">
                <Anime project={projects[3]}/>
                </div>
                <div className=" col-span-4 sm:col-span-2 sm:col-start-2 sm:row-span-1 sm:row-start-2"
                 data-aos="fade-up"
                 data-aos-duration="700"
                 data-aos-delay="50">
                <Anime project={projects[4]}/>
                </div>
        </div>
       
</div>
        </>
    )
}

export default Project;

function AnimatedCard2 () {
    return (
        <div
        className="bg-[url('/profile.png')] bg-no-repeat bg-center bg-cover h-full w-full p-2 ">
            {/* <div className="flex h-full  bg-opacity-10 hover:bg-opacity-100">
                <div className="text-4xl text-secondary  transition duration-300 ease-in-out hover:scale-110">Kunal Zanke</div>
            </div> */}
              {/* <div className="
              border 
              h-full w-full
              flex -translate-y-[50%] 
              flex-col 
              items-center  
              justify-center 
              px-9 text-center 
              transition-all duration-500 
              hover:translate-y-0 invert
              ">
          <h1 className="font-dmserif text-3xl font-bold text-white">Beauty</h1>
          <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
          <button className="rounded-full py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
        </div> */}
        
        <div className=" 
              relative
              h-full w-full 
              flex translate-y-[50%] 
              flex-col 
              items-center  
              justify-center 
              px-9 text-center 
              transition-all duration-500 
              hover:translate-y-0 invert
              ">
                <div className="absolute hover:hidden -top-20 flex items-end justify-center p-2">
        <h1 className="font-dmserif text-3xl font-bold text-white">Beauty</h1>
        </div>
          <h1 className="font-dmserif text-3xl font-bold text-white">Beauty</h1>
          <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
          <button className="rounded-full py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
        </div>
        </div>
    )
}

function AnimateCard() {
    return (<>
        <div className=" 
        sm:h-full w-full
        bg-[url('/portfolio.svg')] 
        bg-cover
        h-96
        relative
        ">
            <div className="
             h-full w-full
             flex flex-col
             justify-between
             items-center
            ">
                <div className="
                text-3xl p-4
                flex w-full
                ">
                    Social Media Sharing Platform
                </div>
                <div className="w-full flex justify-center items-center">
                <h1 className="font-dmserif text-3xl font-bold text-white">Beauty</h1>
                </div>
                <div className="
                text-xl px-8
                w-full
                flex items-center justify-end gap-6
                ">
                     <div>
                    Read More
                    </div>
                    <div>
                    <Image src="/arrow.svg" height={40} width={40} alt="read_more" className="-rotate-90"/>
                    </div>
                </div>
            </div>
            </div>
    </>)
}

function Anime ({ project }) {

  const { title, description,techUsed,imageUrl,githubLink,liveLink,websiteLink } = project;
    return (
        <a href="#" className="group relative block bg-black  h-80 sm:h-full  rounded-md ">
  <img
    alt="Developer"
    src="https://source.unsplash.com/random/728x459"    className="absolute inset-0 h-full w-full object-cover 
    rounded-md
    opacity-75 
    transition-all 
    duration-75
    ease-out
    group-hover:opacity-50
   
    "
  />
  <div className="
    relative h-full
    flex flex-col 
    items-center justify-around sm:justify-between 
    px-4 text-center 
  ">
          <div className="
                text-xl p-4 text-white
                hidden sm:flex w-full
                transform opacity-0 transition-all duration-200 ease-in
                -translate-x-20 
                group-hover:translate-x-0 group-hover:opacity-100
                text-left

                ">
                  {description}
                </div>
                <div className="w-full flex justify-center items-center
             
                ">
                <h1 className="font-dmserif text-3xl font-bold text-white"
                 data-aos="fade-up"
                 data-aos-duration="700"
                 data-aos-delay="50"
                 >{title}</h1>
                </div>
                <div className="
                text-xl px-8 text-white
                w-full
                flex items-center justify-between gap-6
                transform opacity-0 transition-all duration-200 ease-in
                translate-x-20 
                group-hover:translate-x-0 group-hover:opacity-100
                mt-20 sm:m-0
                ">
                  <a href={githubLink} className="rounded-full  p-2 transition-all group hover:bg-black hover:scale-125 hover:cursor-pointer">
            <Icons.Github  />
            </a>
            <a href={websiteLink} className="flex  gap-8 items-center ">
                <div className="w-36 sm:w-auto">
                    Read More
                    </div>
                    <div>
                    <Image src="/arrow.svg" height={40} width={40} alt="read_more" className="-rotate-90 invert"/>
                    </div>

            </a>
                    
                </div>

  </div>


</a>

    )
}

/*
  <div className="relative p-4 sm:p-6 lg:p-8  -translate-x-20 transform opacity-0 transition-all duration-200 ease-in
        group-hover:translate-x-0 group-hover:opacity-100">
    <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
      Developer
    </p>

    <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>
    <h1 className="font-dmserif text-3xl font-bold text-white
    translate-y-8 transform opacity-0 transition-all duration-200 ease-in
    group-hover:translate-y-0 group-hover:opacity-100
    ">Beauty</h1>

    <div className="mt-32 sm:mt-48 lg:mt-64">
      <div
        className="
        translate-x-1/2 transform opacity-0 transition-all duration-200 ease-in
        group-hover:translate-x-0 group-hover:opacity-100
        "
      >
        <p className="text-sm text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
          perferendis hic asperiores quibusdam quidem voluptates doloremque
          reiciendis nostrum harum. Repudiandae?
        </p>
      </div>
    </div>
  </div>
*/