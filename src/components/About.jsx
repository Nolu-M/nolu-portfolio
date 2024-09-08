import { motion } from "framer-motion"
import useTheme from './useTheme';
import about from '../assets/images/hero.png'



const About = () => {
    var { theme } = useTheme(); // Accessing the theme from context
    return (
        <section id='about'>
            <div className='container mx-auto'>
            <section id="about" 
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
                        <p className={`bg-clip ${theme === 'theme2' ? 'text-primary-green' : 'text-primary-pink'}`}>About</p>
                    </motion.div>
                </div>
            
                {/* main content */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 w-full '>
                    {/* image */}
                    <div className="w-full flex items-center justify-center px-8">
                        <div className={`w-full lg:w-96 p-[2px] rounded-md ${theme === 'theme2' ? 'text-primary-green' : 'text-primary-pink'} relative`}>
                            <img 
                                src={about}
                                className="w-full rounded-md h-auto object-contain" 
                            />

                            <div className={`absolute w-full h-full -top-3 -left-2 ${theme === 'theme2' ? 'text-primary-green' : 'text-primary-pink'} rounded-md
                            blur-[5px] -z-10`}>
                            </div>
                        </div>
                    </div>

                     {/* content */}
                     <div className="w-full px-8 flex flex-col gap-4 items-start justify-start">
                                <p className="text-texlight text-base tracking-wide text-justify">
                                Passionate software engineer with expertise in both front-end and back-end technologies, including JavaScript, PHP, Python, Flask, and React. 
                                Proficient in cloud computing (Microsoft Azure), with a keen focus on building user-centered, scalable software solutions. 
                                My background in microbiology has sharpened my analytical skills, and my recent upskilling in cybersecurity and data analytics enhances my problem-solving approach. 
                                Eager to contribute to collaborative and innovative projects.
                                </p>
                            </div>
                </div>
            </section>
            </div>
        </section>
    )
}

export default About
