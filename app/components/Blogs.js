"use client"
import Image from "next/image";
import Blog from "./Cards/Blog";
import { useEffect, useState } from "react";

const Blogs = () => {

    const [list, setList] = useState([]);
    
    useEffect(() => {
        if(list.length === 0) {
            fetchBlogs()
        }
    }, [list])

    async function fetchBlogs() {
        try {
            const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@kunalznk');
            const data = await res.json();
            const items = data.items;
            setList(items);
        } catch {
            // setError(true);
        }
    }
    return (
<div className="flex flex-col gap-4 justify-center  w-auto sm:container min-h-[90vh] text-white" id="Blog">
            <div className="my-10">
            <h2 class="text-5xl font-bold text-center">Latest Blogs</h2>
                {/* <div className="text-xl text-center font-medium border-1">Explore my latest blog posts</div> */}
            </div>
            <div className="
        grid sm:grid-cols-3 gap-10 
        px-4
        sm:px-10
        place-content-center
        ">
            {list.map((value, index) => <div key={value}
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay={100+(100*index)}
            >
                <Blog key={index} blog={value}/>
            </div>
             )}

        </div>

        </div>
    )
}

export default Blogs;