import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";

import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { profiles } from "../constants";


const Contact = () => {
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10  w-full h-full overflow-hidden justify-center">
      <motion.div
        variants={slideIn("right", "tween", 0.4, 1)}
        className=" bg-black-100 p-8 rounded-2xl w-full "  >

        <p className={styles.sectionSubText}>
          Get in touch.......
        </p>
        <h3 className={styles.sectionHeadText}>
          Community & Coding Profiles.
        </h3>

        <div className='bg-black-200 p-10 mt-3 rounded-3xl xs:flex flex-row gap-5 w-full '>
          {profiles.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              target="_blank"
            >
              <img src={contact.image} alt={contact.name}
                className='bg-black-200 p-20 xs:p-5 rounded-full xs:w-[180px] ' />
              {/* <span>{contact.name}</span> */}
            </a>
          ))}
        </div>


      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contaxt");