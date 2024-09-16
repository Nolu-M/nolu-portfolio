import React from 'react'
import useTheme from './useTheme';
import { motion } from 'framer-motion';
import SkillCard from './SkillCard';
import { skillsData } from '../utils/helper'



const Skills = () => {
    var { theme } = useTheme(); // Accessing the theme from context
    return (
        <section id='skills'>
            <div className='container mx-auto'>
            <section id="skills" 
                className=' flex items-center justify-center flex-col gap-12 my-12'
            >

                {/* title */}  
                <div className="w-full flex items-center justify-center py-24">
                    <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 200 }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ delay: 0.4 }}
                    className='flex items-center justify-around w-52'
                    >
                        <p className={`bg-clip-text text-3xl ${theme === 'theme2' ? 'text-primary-green' : 'text-primary-pink'}`}>Skills</p>
                    </motion.div>
                </div>
            
                {/* main content */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 w-full'>

                     {/* content */}
                        <div className="w-full px-8 flex flex-col gap-2 items-start justify-start">
                        <p className={`bg-clip-text ${theme === 'theme2' ? 'text-primary-green' : 'text-primary-pink'}`}>My skills and experience</p>
                                <p className="text-texlight text-base tracking-wide text-justify">
                                I’m a passionate software engineer with a strong background in both front-end and back-end development. 
                                I specialize in languages like JavaScript, Python, and PHP, and I’m proficient in frameworks such as React and Flask. My expertise extends to cloud computing, particularly with Microsoft Azure, where I’ve worked on deploying, scaling, and managing web apps. 
                                I also have experience with SQL and PostgreSQL databases, UX/UI design, API integration, and tools like Docker and Git.
                                </p>
                                
                               
                        </div>

                    {/* image 
                    <div className="w-full flex flex-col gap-4 items-center justify-center px-8">
                       <SkillCard skill={"HTML 5"} percentage={"95%"} color={"#FF3F3F"} move={true}/>
                       <SkillCard skill={"Tailwind CSS"} percentage={"90%"} color={"#33ff74"} />
                       <SkillCard skill={"JavaScript"} percentage={"80%"} color={"#FFB900"} move={true}/>
                       <SkillCard skill={"Python"} percentage={"70%"} color={"#14DB00"} />
                       <SkillCard skill={"PostgreSQL"} percentage={"70%"} color={"#008FFF"} move={true}/>
                       <SkillCard skill={"React"} percentage={"80%"} color={"#af7ac5"} />
                    </div>*/}




                    {/* image */}
                    <div className='w-full flex items-center justify-center px-8'>
                        <div className={`w-4/5 mx-auto font-sans ${theme === 'theme2' ? 'text-primary-green' : 'text-primary-pink'}`}>
                            {skillsData.map((skill, index) => (
                                <div key={index} className="flex items-center my-4">
                                <span className="w-36 text-lg">{skill.name}</span>
                                <div className={`flex-grow ${theme === 'theme2' ? 'text-primary-green' : 'text-primary-pink'} rounded-full relative h-6 overflow-hidden`}>
                                    <div
                                    className={`h-full rounded-l-full ${theme === 'theme2' ? 'bg-primary-green' : 'bg-primary-pink'} transition-all duration-1000 ease-in-out relative`}
                                    style={{ width: `${skill.level}%` }}
                                    >
                                    <div className="absolute top-0 left-0 w-[200%] h-full bg-[radial-gradient(circle,rgba(255,255,255,0.3)_0%,rgba(0,0,0,0)_70%)] animate-larva"></div>
                                    </div>
                                </div>
                                </div>
                            ))}
                            </div>
                        </div> 
                    </div>
            </section>
            </div>
        </section>
  )
}

export default Skills