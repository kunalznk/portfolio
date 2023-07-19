import Image from "next/image";

const BlogList = () => {
    return <>
    <div className="my-10">
        <div className="text-5xl text-center font-medium">My Blog</div>
    </div>
    <div className="
    grid 
    sm:grid-cols-3 
    gap-4 	
    p-4
    place-items-center
    ">
        <BlackCard />
        <WhiteCard />
        <BlackCard />
        <WhiteCard />
        <BlackCard />
        <WhiteCard />
</div>

    </>
}

export default BlogList;


function BlackCard () {
    return <>
    
     <div className="
                bg-primary
                text-secondary
                min-h-[407px]
                max-w-sm
                ">
                  <div className="min-h-[407px] flex flex-col justify-around items-center border-2 border-secondary">
                    <div className="text-center p-8">
                    <div className="text-4xl">
                        Ui & UX Design
                        </div>
                        <div className="text-base mt-6">
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
</>
}

function WhiteCard () {
    return <>
     <div className="
                    opacity-90
                    bg-accent
                    text-primary
                    min-h-[407px]
                    max-w-sm
                    ">
                        <div className="min-h-[407px] flex flex-col justify-around items-center border-2">
                    <div className="text-center p-8">
                    <div className="text-4xl">
                        Ui & UX Design
                        </div>
                        <div className="text-base mt-6">
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
    </>
}