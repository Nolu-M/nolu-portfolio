import { AnimatePresence, motion } from "framer-motion"
import { SocialIcon } from 'react-social-icons'
import useTheme from './useTheme';

const Links = (theme) => {
    var { theme } = useTheme(); // Accessing the theme from context
    return (
        <section id='links' className='flex items-center justify-center '>
            <div className="w-full flex items-center justify-center py-24">
            <motion.div 
                initial={{ opacity: 0, width: 0}}
                animate={{ opacity: 1, width: 200}}
                exit={{ opacity: 0, width: 0}}
                transition={{ delay: 0.4}}
                className="flex-col items-center justify-around w-52"
            >
                <p className={`text-transparent bg-clip-text text-3xl ${theme === 'theme2' ? 'text-primary-green' : 'text-primary-pink'}`}>Contact Me</p>
                <div className="mt-4">
                <div className="flex">
                    <SocialIcon network="github" url="https://github.com/Nolu-M" className='mr-6' />
                    <SocialIcon network="linkedin" url="https://www.linkedin.com/in/nolubabalo-maxazana-4327b168/" className='mr-6' />
                    <SocialIcon network="twitter" url="https://twitter.com/nolumaxazana?t=OXBy18qR-BpgD-KidLaIJw&s=09" className='mr-6' />
                    <SocialIcon network="instagram" url="https://www.instagram.com/nolumxzn/?igshid=MzMyNGUyNmU2YQ%3D%3D" className='mr-6' />
                    <SocialIcon network="email" url="mailto:nolubabalomaxazana@gmail.com" className='mr-6' />
                </div>
                </div>
            </motion.div>
            </div>
        </section>
    )
}

export default Links