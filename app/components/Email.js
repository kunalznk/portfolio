
const Email = () => {
    return <div className="flex flex-col justify-center min-h-[90vh] text-center text-white" id="Contact"
    data-aos="fade-up"
    data-aos-duration={700}>
    <div className="text-3xl sm:text-5xl font-medium p-4 mb-8">
     Hire Me For Your Next Amazing Project
    </div>
    <div className="flex flex-col sm:flex-row items-center sm:justify-around">
    <div className="flex flex-col justify-around sm:justify-between h-[400px] sm:max-w-md">

        <div className="text-center sm:text-left text-2xl sm:text-3xl font-light p-2">
        Let’s make somthing new, different and more meaningful or make thing more visual or conceptual? Just say hello!
        </div>

        <div className="text-lg flex items-center sm:items-start flex-col gap-2 mb-10">
            <div className="flex items-center gap-2 font-light">
            <div className="w-4 h-[1.4px] bg-ternary rounded-md"/>
            <div>+917021436054</div>
            </div>
            <div className="flex items-center gap-2 font-light">
            <div className="w-4 h-[1.4px] bg-ternary rounded-md"/>
            <div>kunalznk@gmail.com</div>
            </div>
            <div className="flex items-center gap-2 font-light">
            <div className="w-4 h-[1.4px] bg-ternary rounded-md"/>
            <div>Mumbai Maharashtra, India</div>
            </div>

        </div>

    </div>
    <div className=" p-8 rounded-md sm:w-[450px]">
        <div className="flex flex-col items-center gap-2">
        <div className="p-4  flex justify-center w-full">
            <input placeholder="Your Name" className="bg-inherit outline-0  border-0 border-inherit border-b-[1px] p-1"/>
        </div>
        <div className="p-4  flex justify-center w-full">
            <input placeholder="Your Email Address" className="bg-inherit outline-0  border-0 border-inherit border-b-[1px] p-1"/>
        </div>
        <div className="p-4 flex justify-center w-full">
            <input placeholder="Your Budget" className="bg-inherit outline-0  border-0 border-inherit border-b-[1px] p-1"/>
        </div>
        <div className="p-4  flex justify-center w-full">
            <input placeholder="Your Project Description" className="bg-inherit outline-0  border-0 border-inherit border-b-[1px] p-1"/>
        </div>
        <div className="p-4 flex justify-end w-full hover:scale-105 transition-all">
            <button className="w-24 h-12 bg-white mr-6 rounded-md text-black">
                SEND
            </button>
        </div>
        </div>
    </div>

    </div>
    </div>
}

export default Email;