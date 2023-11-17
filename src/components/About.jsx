import React from 'react'


const About = () => {
    return (
        <section id='about'>
            <div className='container mx-auto'>
                <div className=''>
                    <div className=''>
                        <h3 className='mb-8 pt-8 text-center text-4xl font-medium text-white'>About me</h3>
                        <p className='text-lg leading-7 text-center text-white font-secondary'>I am Nolubabalo Maxazana, a self-driven software developer passionate about both frontend and full-stack development.
                            My coding journey began independently, and it was further enriched through a transformative experience at a Python BootCamp organized by GirlCode ZA.
                            The BootCamp not only added valuable skills to my repertoire but also opened up new avenues of work and possibilities in the world of programming.
                            Through various projects, I have showcased my proficiency in both frontend and backend development, demonstrating my ability to create engaging user interfaces and robust server-side functionalities.
                            I am excited to continue my learning journey, leveraging my skills to contribute meaningfully to the ever-evolving landscape of software development.
                        </p>
                    </div>
                    <h3 className='mb-8 mt-8 text-center text-4xl font-medium text-white'>Technologies</h3>
                    <div className='pb-8 pt-8 grid grid-cols-4'>
                        <img className="w-24" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                        <img className="w-24" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" />
                        <img className="w-24" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                        <img className="w-24" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                        <img className="w-24" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />
                        <img className="w-24" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" />
                        <img className="w-24" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                        <img className="w-24" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
                        <img className="w-24" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
                        <img className="w-24" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                        <img className="w-24" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
                        <img className="w-24" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
