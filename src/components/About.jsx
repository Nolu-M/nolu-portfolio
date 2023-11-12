import React from 'react'
import MyCV from '../assets/MaxazanaNolubabalo CV.pdf';

const About = () => {
    return (
        <div>
            <div className='container mx-auto'>
                <div>
                    <h3 className='mb-8'>Technologies</h3>
                    <div className='flex grid grid-cols-4'>
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
                    <h3 className='mt-8 mb-8 text-lg'>Curriculum Vitae</h3>
                    <a className='inline-block p-4 bg-[#7E22CE] text-[#fff] rounded-md' href={MyCV} target="_blank" rel="noopener noreferrer">Download CV</a>
                </div>
            </div>
        </div>
    )
}

export default About
