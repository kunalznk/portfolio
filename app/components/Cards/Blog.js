import Image from "next/image"

export default function Blog ({ blog }) {
    return (
        <div
        className="p-2
        group
        "
        >
            <div className="
            max-w-md
            flex flex-col
            items-center
            transition duration-300 ease-in-out 
            group-hover:scale-105
    
           
            
            ">
        <div className="max-w-md">
        <img src={blog.thumbnail} alt="kunalznk"className="rounded-t-md aspect-video"/>
        </div>
        <div className="flex flex-col justify-between gap-4 bg-secondary text-primary max-w-md rounded-b-md min-w-full">
        <div className="w-full flex justify-between px-2 my-2">
            <div className="p-1">{new Date(blog.pubDate).toLocaleDateString()}</div>
            {/* <div className="p-1">17 Likes</div> */}
            <div className="p-1">By {blog.author}</div>
        </div>
        <div className="text-2xl px-2  sm:px-4">
            {blog.title}
        </div>
        <a href={blog.link} className="w-full flex justify-between px-4 my-2">
            <div className="text-lg">
                Read More
            </div>
            <Image src="/arrow.svg" alt="scroll arrow" width={30} height={0} className="-rotate-90 invert hover:cursor-pointer hover:scale-110" />
        </a>
        </div>
            </div>
            </div>
    )
}


const Arrow = () => {
    return    <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_18_319)">
    <path d="M16.5127 32.2885L23.7853 25.0159C24.0904 24.7547 24.1259 24.2956 23.8646 23.9905C23.6034 23.6855 23.1443 23.6499 22.8392 23.9112C22.8108 23.9356 22.7842 23.9621 22.7599 23.9905L16.7236 30.0195L16.7236 1.22724C16.7236 0.825619 16.398 0.5 15.9963 0.5C15.5947 0.5 15.2691 0.825619 15.2691 1.22724L15.2691 30.0195L9.24015 23.9905C8.9789 23.6855 8.51978 23.6499 8.21473 23.9112C7.90967 24.1725 7.87411 24.6316 8.13542 24.9366C8.15979 24.9651 8.18629 24.9916 8.21473 25.0159L15.4873 32.2886C15.7709 32.5705 16.229 32.5705 16.5127 32.2885Z" fill="#333333"/>
    </g>
    <defs>
    <clipPath id="clip0_18_319">
    <rect width="32" height="32" fill="white" transform="translate(32 0.5) rotate(90)"/>
    </clipPath>
    </defs>
        </svg>
}
