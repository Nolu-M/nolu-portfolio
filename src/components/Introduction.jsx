import { motion } from "framer-motion"
import Hero from "../assets/images/hero.png"
import HeroTypeWriter from '../components/HeroTypeWriter'

const Introduction = () => {
    return (
        <section id="home" className=' flex items-center justify-center flex-col gap-12 relative'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 w-full'>
                {/*container section*/}
                <div>

                </div>

                {/*content section*/}
                <div className="w-full h-full flex flex-col items-center
                lg:items-start justify-center gap-4">
                    <h2 className="text-3xl lg:text-4xl text-neutral-400">Hello, It&apos;s me
                    <span className="block tracking-wider text-2xl lg:text-4xl mt-4 text-white">Nolubabalo Maxazana</span></h2>

                    {/*typewriter*/}
                    <h2 className="text-2xl lg:text-4xl text-neutral-400 mt-4">And I&apos;m 
                    <HeroTypeWriter/>
                    </h2>
                </div>



                {/*Hero image section*/}
                <div className="w-full h-full flex items-center justify-center 
                lg:items-center">
                    <motion.img
                    initial={{y : 0}}
                    animate ={{ y : [-10, 10, -10]}}
                    transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "linear",
                    }}
                    src={Hero} className="w-1/2 h-auto object-contain"/>

                </div>
            </div>
        </section>


    )
}

export default Introduction
