import React from 'react';
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

//projects described in -> constants -> index.js -> const project
const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 300
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">

        <div className='relative w-full h-[230px]'>
          <img
            className='w-full h-full object-cover rounded-xl'
            src={image}
            alt={name} />

          {/* for github link */}
          <div className='absolute inset-0 flex justify-end m-3 card-img-hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>

              <img
                src={github}
                alt="github"
                className='w-1/2 h-1/2 object-contain' />

            </div>
          </div>
        </div>

        {/* for name and desciprtionn of project */}
        <div>
          <h3 className='mt-2 text-white font-bold text-[24px] '>
            {name}
          </h3>
          <p className='mt-2 text-secondary text-[14px]'>
            {description}
          </p>
        </div>

        {/* for rendering the technologies */}
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color} `}>
              #{tag.name}
            </p>
          ))}

        </div>
      </Tilt>
    </motion.div>
  )
}


const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={` ${styles.sectionSubText}  `}>
          My Works
        </p>
        <h2 className={`${styles.sectionHeadText} `}>
          Projects.
        </h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.4, 1)}
          className='mt-3 text-secondary text-[17px] max-w-10xl leading-[30px]  justify-normal'>
          My portfolio features a collection of projects that vividly demonstrate my skills and expertise through real-world applications. Each project is accompanied by a concise description, along with accessible links to the code repositories or live demos. This compilation effectively showcases my proficiency in tackling intricate challenges, adeptness with diverse technologies, and efficient project management capabilities.
        </motion.p>

      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project} />
        ))}
      </div>

    </>
  )
}

export default SectionWrapper(Works, "");