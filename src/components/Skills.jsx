import React from 'react'
import useTheme from './useTheme';
import { motion } from 'framer-motion';


const Skills = () => {
    var { theme } = useTheme(); // Accessing the theme from context
    return (
        <section id='skills'>
                <div className='flex items-center justify-center flex-col gap-12 my-12'>

                    {/* title */}
                    <div className="w-full flex items-center justify-center py-24">
                        <motion.div
                            initial={{ opacity: 0, width: 0}}
                            animate={{ opacity: 1, width: 200}}
                            exit={{ opacity: 0, width: 0}}
                            transition={{ delay: 0.4}}
                            className="flex items-center justify-around w-52"
                            >
                                <p className={`bg-clip-text text-3xl ${theme === 'theme2' ? 'text-primary-green' : 'text-primary-pink'}`}>
                                    Skills
                                </p>
                        </motion.div>
                    </div>
                </div>  
        </section>
  )
}

export default Skills