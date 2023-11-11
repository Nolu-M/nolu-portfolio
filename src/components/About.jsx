import React from 'react'

const About = () => {
    return (
        <div>
            <div className='container mx-auto'>
                <div>
                    <h3 className='mb-8'>History</h3>
                    <p></p>
                    <h3 className='mb-8'>Technologies</h3>
                    <div className='flex'>
                        <img className="w-24" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                        <img className="w-24 ml-8" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" />
                        <img className="w-24 ml-8" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />

                    </div>
                    <h3 className='mt-8'>CV</h3>
                </div>
            </div>
        </div>
    )
}

export default About
