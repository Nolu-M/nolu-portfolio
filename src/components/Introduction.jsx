import React from 'react'

const Introduction = () => {
    return (
        <section className='mt-10'>
            <div className='container mx-auto'>
                <div className='flex row col-lg-12 '>
                    <div className='container col-lg-6'>
                        <img className='h-auto w-1/4 rounded-full border-2 border-black' src="/src/assets/images/Nolu.png" alt="cartoon of me" />
                    </div>
                    <div className=' container col-lg-6'>
                        <p className='text-lg leading-7 text-center'>I am Nolubabalo Maxazana, a self-driven software developer passionate about both frontend and full-stack development.
                            My coding journey began independently, and it was further enriched through a transformative experience at a Python BootCamp organized by GirlCode ZA.
                            The BootCamp not only added valuable skills to my repertoire but also opened up new avenues of work and possibilities in the world of programming.
                            Through various projects, I have showcased my proficiency in both frontend and backend development, demonstrating my ability to create engaging user interfaces and robust server-side functionalities.
                            I am excited to continue my learning journey, leveraging my skills to contribute meaningfully to the ever-evolving landscape of software development.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Introduction
