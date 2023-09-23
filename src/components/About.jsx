import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full justify-center">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1.5px] rounded-[20px] shadow-card'  >

        {/* providing tilt options */}
        <div options={{
          max: 45,
          scale: 1,
          speed: 450           //units of these
        }}
          className="bg-tertiary rounded-[20px] py-5 px-20 min-h-[270px] flex flex-col justify-center items-center">

          <img src={icon} alt={title} className='w-16 h-16 object-contain' />

          <h3 className='text-white text-[20px] font-vold text-center'>
            {title}
          </h3>

        </div>

      </motion.div>

    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className=' px-42'>
        <p className={` ${styles.sectionSubText} px-40 `}>
          Introducion
        </p>
        <h2 className={`${styles.sectionHeadText} px-40`}>
          Overview.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-2 text-secondary text-[17px] max-w-68xl  justify-center px-40'
      >
        I'm a skilled software developer with experience in Full-stack web development and programming language like C++ & Python, proficient in frameworks like React, Node.js, and having knowledge on APIs and Databases. I'm a quick and keen learner with good analytical skills useful to create efficient, scalable, and user-friendly solutions that solve
        real-world problems.

      </motion.p >

      {/* for cards */}
      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title}
            index={index}
            {...service} />
        ))}

      </div>
    </>
  )
}

export default SectionWrapper(About, "about");