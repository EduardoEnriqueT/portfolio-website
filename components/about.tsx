"use client"

import React from 'react'
import SectionHeading from '@/components/section-heading'
import { motion} from 'framer-motion'
import { useSectionInView } from '@/lib/hooks';


export default function About() {

  const {ref} = useSectionInView("About", 0.90)
  
  return (
    <motion.section 
        ref = {ref}
        className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-5 scroll-mt-28'
        initial={{ opacity: 0, y: 100}}
        animate={{ opacity: 1, y: 0}}
        transition={{delay: 0.175}}
        id="about"
    >
        <SectionHeading>About me</SectionHeading>
        <p className="mb-3">
        Fullstack Developer with{" "}
        <span className="font-medium">hands-on experience</span>designing,
        developing, and deploying innovative{" "}
        <span className="font-medium">software solutions</span>,{" "}
        <span className="italic">Motivated Self-starter</span> focused{" "}
        <span className="italic">on leveraging the latest technologies and frameworks</span> to {" "}
        <span className="underline">create and deliver</span> new user-focused solutions while increasing reliability, stability, and performance at scale.{" "}
       </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games and watching movies.
      </p>
    </motion.section>
  )
}


   