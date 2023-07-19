import Image from 'next/image'
import About from './components/About'
import Blog from './components/Cards/Blog'
import Temp from './components/Temp'
import Blogs from './components/Blogs'
import Project from './components/Project'
import Tech from './components/Tech'
import SingleProject from './components/SingleProject'
import Works from './components/Works'
import BlogList from './components/BlogList'
import Email from './components/Email'
import SkillCircle from './components/SkillCircle'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="container">
      <About />
      <Project />
      <Tech /> 
      <Blogs />
        <Email />
      </div>
    </main>
  )
}
