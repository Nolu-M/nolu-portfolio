import { AnimatePresence, motion } from "framer-motion"
import Leaf1 from '../assets/images/Leaf1.png'
import Leaf2 from '../assets/images/Leaf2.png'
import { ProjectsData } from "../utils/helper"

const Projects = () => {
    return (
        <section id='projects'>
            <div className='flex items-center justify-center flex-col gap-12 my-12'>
                
            {/* title */}
            <div className="w-full flex items-center justify-center py-24">
                <motion.div
                    initial={{ opacity: 0, width: 0}}
                    animate={{ opacity: 1, width: 200}}
                    exit={{ opacity: 0, width: 0}}
                    transition={{ delay: 0.4}}
                    className="flex itmes-center justify-around w-52"
                    >
                        <img src={Leaf1} className="w-6 h-auto object-contain" alt=""/>
                        <p className="text-transparent bg-clip-text bg-gradient-to-r from-pri">
                            Projects
                        </p>
                        <img src={Leaf2} className="w-6 h-auto object-contain" alt="" />
                </motion.div>
            </div>
            
            {/* main content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
                <AnimatePresence>
                    {ProjectsData && ProjectsData.map((project, index) => (
                        <ProjectCard key={project.id} project={project} /> 
                    ))}
                </AnimatePresence>
            </div>
            
            </div >
        </section >
    )
}

const ProjectCard = ({project}) => {
    return (
        <motion.div key={project.id} className="overflow-hidden cursor-pointer relative rounded-md">
            <motion.img 
            whileHover={{ scale: 1.1}}
            className="w-full h-full object-contain rounded-lg" src={project.imgSrc}/> 
        </motion.div>
    )
}
export default Projects
