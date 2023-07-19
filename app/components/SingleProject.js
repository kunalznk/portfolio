import Image from "next/image";

const SingleProject = () => {
    return <>
    <div className="my-10">
                <div className="text-5xl text-center font-medium border-1">Social Media Platform </div>
    </div>
    <div className="flex flex-col gap-8">


    <div className="flex sm:flex-row flex-col justify-center items-center gap-8">
        <div className="p-4">
        <Image src="/Col-block.png" height={439} width={362} alt="singleProject"/>
        </div>
        <div className="sm:w-1/2 flex flex-col gap-4 sm:gap-8 sm:p-10 p-4">
            <div className="flex">
                <Image src="/quotation.svg" alt="quotation" height={50} width={50}/>
            </div>
            <div className="sm:text-3xl">
            A vibrant social media platform that empowers users to share their photos, videos, and collaborate with others, fostering creative expression and connection in a visually captivating environment.
            </div>
            <div className="flex justify-end">
                <Image src="/quotation.svg" alt="quotation" height={50} width={50} className="rotate-180"/>
            </div>


            {/*  */}
            <div>
                <div className="font-medium">
                Technology 
                </div>
                <div className="font-normal-">
                Nodejs Myql Express Reacr
                </div>
            </div>
        </div>

    </div>

    <div className="flex sm:flex-row flex-col justify-center items-center gap-8">
    <div className="sm:w-1/2 flex flex-col gap-2 sm:gap-4 sm:p-10 p-4">
            <div className="flex">
            <div className="text-5xl">Summary</div>
            </div>
            <div className="sm:text-2xl font-light">
            A vibrant social media platform that empowers users to share their photos, videos, and collaborate with others, fostering creative expression and connection in a visually captivating environment.
            A vibrant social media platform that empowers users to share their photos, videos, and collaborate with others, fostering creative expression and connection in a visually captivating environment.
            </div>
        </div>
        <div className="p-4 shadow-lg rounded-xl">
        <Image src="/Col-block.png" height={300} width={300} alt="singleProject" className="rounded-md"/>
        </div>
    </div>

    <div className="flex sm:flex-row flex-col justify-center items-center gap-8"> 
    <div className="p-4 shadow-lg rounded-xl">
        <Image src="/Col-block.png" height={300} width={300} alt="singleProject" className="rounded-md"/>
        </div>
    <div className="sm:w-1/2 flex flex-col gap-2 sm:gap-4 sm:p-10 p-4">
            <div className="flex justify-center">
            <div className="text-5xl">Summary</div>
            </div>
            <div className="sm:text-2xl font-light">
            A vibrant social media platform that empowers users to share their photos, videos, and collaborate with others, fostering creative expression and connection in a visually captivating environment.
            A vibrant social media platform that empowers users to share their photos, videos, and collaborate with others, fostering creative expression and connection in a visually captivating environment.
            </div>
        </div>
        
    </div>


    <div className="flex flex-col items-center justify-center gap-4">
            <div className="text-5xl w-3/4">Summary</div>
            <div className="sm:text-2xl font-light w-3/4">
            A vibrant social media platform that empowers users to share their photos, videos, and collaborate with others, fostering creative expression and connection in a visually captivating environment.
            A vibrant social media platform that empowers users to share their photos, videos, and collaborate with others, fostering creative expression and connection in a visually captivating environment.
            </div>
           
    </div>
    </div>
    </>
}

export default SingleProject;