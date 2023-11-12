import React from 'react'

const Projects = () => {
    return (
        <div>
            <div className='container mx-auto'>
                <h2 className='mb-16 mt-16 text-xl'>PROJECTS</h2>
                <div className='flex'>
                    <div className='grid grid-cols-2 mt-8'>
                        <a className='p-4 inline-block perspective-lg transition-transform transform hover:translate-x-4 hover:shadow-lg' href="https://nolu-m-expense-tracker.netlify.app/">
                            <img src="./src/assets/images/expense.png" alt="expense app" className='rounded-2xl' />
                        </a>
                        <a className='p-4 inline-block  perspective-lg transition-transform transform hover:translate-x-4 hover:shadow-lg' href="https://nolum-password-generator.netlify.app/">
                            <img src="./src/assets/images/password-generator.png" alt="password generator website" className='rounded-2xl' />
                        </a>
                        <a className='p-4 inline-block  perspective-lg transition-transform transform hover:translate-x-2 hover:shadow-lg' href="https://girlcode-careers.onrender.com/">
                            <img src="./src/assets/images/job-listing.png" alt="job listing website" className='rounded-2xl' />
                        </a>
                        <a className='p-4 inline-block  perspective-lg transition-transform transform hover:translate-x-2 hover:shadow-lg' href="https://nolum-blackjack-game.netlify.app/">
                            <img src="./src/assets/images/blackjack.jpg" alt="blackjack app" className='rounded-2xl' />
                        </a>
                        <a className='p-4 inline-block  perspective-lg transition-transform transform hover:translate-x-2 hover:shadow-lg' href="https://nolum-chrome-extension.netlify.app/">
                            <img src="./src/assets/images/chrome-extension.png" alt="chrome extension" className='rounded-2xl' />
                        </a>
                        <a className='p-4 inline-block  perspective-lg transition-transform transform hover:translate-x-2 hover:shadow-lg' href="https://nolum-airbnb-experiences.netlify.app/">
                            <img src="./src/assets/images/experiences-page.png" alt="Airbnb experiences website" className='rounded-2xl' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
