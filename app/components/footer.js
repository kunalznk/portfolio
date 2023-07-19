import Icons from "./Icons";

export default function Footer () {
    return (
        <div className="bg-primary flex flex-col gap-4 p-8">
            <div className="flex flex-col items-center gap-2 p-4 text-white">
                <div className="text-2xl">Get In Touch</div>
                 <div className="text-5xl">Say Hello</div>
            </div>
            <div className="flex justify-center">
                <button className="bg-slate-100 p-3 rounded-md">
                    Contact 
                </button>
            </div>
            <div className="w-full flex sm:gap-8 p-4 justify-between sm:justify-center  items-center mb-10">
            <a href="https://github.com/kunalznk" className="rounded-full border-1  p-2 transition-all group hover:bg-black hover:scale-125 hover:cursor-pointer">
            <Icons.Github  />
            </a>
            <a href="https://github.com/kunalznk" className="rounded-full border-1  p-2 transition-all hover:bg-black hover:scale-125 hover:cursor-pointer">
            <Icons.Twitter  />
            </a>
            <a href="https://github.com/kunalznk" className="rounded-full border-1  p-2 transition-all hover:bg-black hover:scale-125 hover:cursor-pointer">
            <Icons.StackOverflow  />
            </a>
            <a href="https://github.com/kunalznk" className="rounded-full border-1  p-2 transition-all hover:bg-black hover:scale-125 hover:cursor-pointer">
            <Icons.LinkedIn  />
            </a>
            <a href="https://github.com/kunalznk" className="rounded-full border-1  p-2 transition-all hover:bg-black hover:scale-125 hover:cursor-pointer">
            <Icons.Discord  />
            </a>
            </div>      
        </div>
    )
}