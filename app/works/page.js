import Image from "next/image";

const Works = () => {
    return <div className="container">
        <div className="my-10 ">
        <div className="text-white text-5xl text-center font-medium">My Projects</div>
        </div>
        <div className="
        grid sm:grid-cols-2
        gap-2
        place-items-center
        group
        ">
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
        </div>
    </div>
}

export default Works;


function Project () {
    return <>
   
      <div className="
        grid grid-cols-2
        grid-rows-2
        sm:grid-row-2
        gap-4
        p-4
        shadow-sm
        transition-all
        ease-in
        hover:scale-105
        ">
                <div className="col-span-2 row-span-1 row-end-2
                sm:col-span-1 sm:row-span-2  transition-all hover:cursor-pointer ">
                    <div className="w-full h-full flex justify-end items-center ">
                        <Image src="/Col-block.png" width={439} height={529} alt="wroks_1"/>
                    </div>
                </div>
                <div className="
                col-span-2 row-span-1
                sm:col-span-1 sm:row-span-1
                bg-primary
                text-secondary
                ">
                  <div className="w-full h-full flex flex-col justify-around items-center  text-center gap-4">

                    <div className="w-full flex flex-col items-center p-2 gap-2 mt-10 hover:cursor-pointer">
                    <div className="text-4xl">
                        Ui & UX Design
                        </div>
                        <div className="text-base">
                        User interface design, user experience design, user research.
                        </div>
                    </div>


                    <div className="w-10/12 flex items-center justify-between gap-2">
                    <div className="text-base">
                    Read More
                    </div>
                    <div>
                    <Image src="/arrow.svg" height={20} width={20} alt="read_more" className="invert -rotate-90"/>
                    </div>

                    </div>


                  </div>
                </div>
                <div className="
                col-span-2 row-span-1 
                sm:col-span-1 sm:row-span-1
                    opacity-90
                    bg-accent
                    text-primary
                    ">
                      <div className="w-full h-full flex flex-col justify-around items-center gap-4">


<div className="w-full flex flex-col items-center gap-2 mt-10 text-center">
<div className="text-4xl">
    Ui & UX Design
    </div>
    <div className="text-base transition-transform translate-x-4">
    User interface design, user experience design, user research.
    </div>
</div>


<div className="w-10/12 flex items-center justify-between gap-2">
<div className="text-base">
Read More
</div>
<div>
<Image src="/arrow.svg" height={20} width={20} alt="read_more" className="invert -rotate-90"/>
</div>
</div>

                    </div>
                </div>
        </div>
    </>
}