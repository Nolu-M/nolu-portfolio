import React from 'react'

const Projects = () => {
    return (
        <div>
            <div className='container mx-auto'>
                <h2 className='m-16 text-xl'>PROJECTS</h2>
                <div className='flex'>
                    <div className='grid grid-cols-2 mt-8'>
                        <a className='p-4' href="https://nolu-m-expense-tracker.netlify.app/">
                            <img src="/images/expense.png" alt="expense app" className='rounded-2xl' />
                        </a>
                        <a className='p-4' href="https://nolum-password-generator.netlify.app/">
                            <img src="/images/password-generator.png" alt="password generator website" className='rounded-2xl' />
                        </a>
                        <a className='p-4' href="https://girlcode-careers.onrender.com/">
                            <img src="/images/job-listing.png" alt="job listing website" className='rounded-2xl' />
                        </a>
                        <a className='p-4' href="https://nolum-blackjack-game.netlify.app/">
                            <img src="/images/blackjack.jpg" alt="blackjack app" className='rounded-2xl' />
                        </a>
                        <a className='p-4' href="https://nolum-chrome-extension.netlify.app/">
                            <img src="/images/chrome-extension.png" alt="chrome extension" className='rounded-2xl' />
                        </a>
                        <a className='p-4' href="https://nolum-airbnb-experiences.netlify.app/">
                            <img src="/images/experiences-page.png" alt="Airbnb experiences website" className='rounded-2xl' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
