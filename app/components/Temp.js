import Image from "next/image";

export default function Temp () {
    return (
        <>

        <div className="min-h-screen">


            {/* ------------------------------------------------------- */}

           

          

          
        <div className="
        container
        grid grid-cols-5
     ">
           <div className="
           col-span-12
           md:col-span-3
           ">
            <div className="m-4 sm:m-10 flex flex-col gap-4">
            <div className="flex gap-2 items-center h-14">
            <div className="bg-primary h-1 w-10 border"/>
            {/* ubutnu */}
            <div className="font-bold  text-3xl">Hello</div> 
            </div>
            <div className="text-7xl font-medium">
                {`I'm Kunal Zanke`}
            </div>
            <div className="text-4xl font-light">
            A UX / UI designer, product designer, content creator and creative director.
            </div>
            <div className="text-2xl font-light">
            Of course, there’s so much more to me than just a few fancy titles. Scroll down and get to know me,
            </div>
            </div>              
           </div>
           <div className="
           col-span-full
           border-1
           md:col-span-2
           p-4
           content-center
           ">
            <div className="flex items-center h-full">
            <Image src="/profile.jpeg" alt="kunalznk" width={728} height={459} className="grayscale rounded-lg"/>
            </div>
           </div>
        </div>


{/* ------------------------------------------------------- */}

<div className="
        border-1
        grid grid-cols-4
     ">
           <div className="
           border-1
           col-span-12
           md:col-span-2
           ">
            <div className="flex gap-4 p-4 justify-center sm:justify-start">
            {[1,2,3,4,5].map((value) => <Image key={value} src="/twitter.svg" alt="kunalznk" width={30} height={30} className="grayscale rounded-lg"/>)}
            </div>              
           </div>
           <div className="
           hidden
           sm:flex
           col-span-full
           border-1
           md:col-span-2
           p-4
           ">
            <div className="flex flex-col gap-2">
                <p>SCROLL</p>
                <Image src="/arrow.svg" alt="scroll arrow" width={40} height={40}/>
            </div>
           </div>
</div>
</div>



{/* -------------------------------------------------------------- */}


        <div className="flex-col gap-4 border-1 w-auto sm:container min-h-screen">
            <div className="my-10">
                <div className="text-5xl text-center font-medium border-1">My Blog</div>
            </div>
            <div className="
        grid grid-cols-3 gap-10 
        px-4
        sm:px-10
        content-center
        ">
            {[1,2,3].map((value) => <div key={value}
            className="col-span-3 sm:col-span-1 p-2
            transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg
            "
            >
                <div className="
                max-w-md
                flex flex-col
                items-center
                ">
            <Image src="/profile.jpeg" alt="kunalznk" width={380} height={337} className="grayscale"/>
            <div className="flex flex-col justify-between gap-4 bg-primary text-secondary max-w-sm">
            <div className="w-full flex justify-between px-2 my-2">
                <div className="p-1">25 comments</div>
                <div className="p-1">17 Likes</div>
                <div className="p-1">By Adams</div>
            </div>
            <div className="text-2xl px-2  sm:px-4">
                Design is not just color it speaks visually Design is not just color it speaks visually...
            </div>
            <div className="w-full flex justify-between px-4 my-2">
                <div className="text-lg">
                    Read More
                </div>
                <Image src="/arrow.svg" alt="scroll arrow" width={30} height={0} className="-rotate-90 invert hover:cursor-pointer hover:scale-110" />
            </div>
            </div>
                </div>
                </div>)}

        </div>

        </div>
        

{/* ------------------------------------------------------------------------------------------ */}

<div className="border-1 min-h-screen container">
    <div className="flex flex-col justify-center items-center gap-2 py-4">
        <div>
            <div className="font-medium text-5xl m-4">
            Portfolio
            </div>
        </div>
        <div className="flex justify-center items-center sm:gap-4">
            {[1,2,3,4].map((value) => <>
                <div key={value} className="text-lg">
                {value}
            </div>
            <div className="w-2 bg-primary h-[2px]" />
            </>
           )}
        </div>
        </div>
<div className="
grid grid-cols-4 
auto-rows-fit sm:grid-rows-2
min-h-[70vh] container
">
        <div className="col-span-4  sm:col-span-2 sm:row-span-1 border">
        <AnimatedCard2 />
        </div>
        <div className=" col-span-4 sm:col-span-1 sm:col-start-3 sm:row-span-1">
        <AnimatedCard2 />
        </div>
        <div className=" col-span-4 sm:col-span-1 sm:col-start-4 sm:row-span-2 sm:row-start-1 border-2">
        <AnimatedCard2 />
        </div>
        <div className=" col-span-4 sm:col-span-1 sm:col-start-1 sm:row-span-1 sm:row-start-2 border">
        <AnimatedCard2 />
        </div>
        <div className=" col-span-4 sm:col-span-2 sm:col-start-2 sm:row-span-1 sm:row-start-2 border">
        {/* <div
            className="bg-[url('/profile.png')] bg-no-repeat bg-cover h-full w-full p-2 border-8">
                <div className="flex h-full  bg-opacity-10 hover:bg-opacity-100">
                    <div className="text-4xl text-secondary  transition duration-300 ease-in-out hover:scale-110">Kunal Zanke</div>
                </div>
            </div> */}
            <AnimatedCard2 />
        </div>
       

</div>




{/* -------------------------------------------- */}

<div className="container 
            h-80 w-full border-4
            flex justify-center items-center
            text-[200px] bg-primary opacity-70
            text-secondary
            text-opacity-10
            ">Hello</div>
          
</div>
        </>
    )
}



function Card () {
    return (
        <div
  className="bg-[url('/profile.png')] bg-no-repeat bg-cover border-2 h-[432px] sm:h-full p-4 m-4 sm:m-0
  relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30
  ">
    <div className="flex flex-col h-full w-full justify-between">

        {/* Image start heading */}
        <div className="w-3/4 border-2 p-2 flex gap-4 text-secondary">
                <div className="text-2xl">Brochure Design</div>
        </div>

        {/* Image end heading */}
        <div className="min-w-max flex justify-end gap-4 text-secondary  p-2 border-secondary border-2">
                <div className="text-lg">Read More</div>
                <Image src="/arrow.svg" alt="scroll arrow" width={30} height={0} className="invert -rotate-90 hover:cursor-pointer hover:scale-110" />
        </div>
        
    </div>
</div>
    )
}


function AnimatedCard () {
    return (
        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="h-full w-auto">
          <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://fastly.picsum.photos/id/738/768/384.jpg?hmac=aFRZn3E79MIXssx_PUeH8t3u_E8BdsygcjIlABmkGVU" alt="" />
        </div>
        {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div> */}
        <div className="absolute inset-0 flex -translate-y-[70%] flex-col-reverse hover:flex-col items-center  justify-start hover:justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 invert">
          <h1 className="font-dmserif text-3xl font-bold text-white">Beauty</h1>
          <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
          <button className="rounded-full py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
        </div>
       
      </div>
    )
}

function AnimatedCard2 () {
    return (
        <div
        className="bg-[url('/profile.png')] bg-no-repeat bg-center bg-cover h-full w-full p-2 border-8">
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
              border 
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
                <div className="absolute hover:hidden -top-20 flex items-end justify-center p-2 border">
        <h1 className="font-dmserif text-3xl font-bold text-white">Beauty</h1>
        </div>
          <h1 className="font-dmserif text-3xl font-bold text-white">Beauty</h1>
          <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
          <button className="rounded-full py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
        </div>
        </div>
    )
}