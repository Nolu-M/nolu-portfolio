import React from 'react'

const Projects = () => {
    return (
        <section id='projects'>
            <div className='container mx-auto'>
                <h2 className='pt-16 pb-8 text-5xl text-center text-purple font-primary'>PROJECTS</h2>
                <div className=''>
                    <div className='grid grid-cols-2 mt-8 pb-8'>
                        <a className='p-4 inline-block perspective-lg transition-transform transform hover:translate-x-4 hover:shadow-lg relative group' href="https://nolu-m-expense-tracker.netlify.app/">
                            <img src="./src/assets/images/expense.png" alt="expense app" className='rounded-2xl border-2 border-purple' />
                            <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 hidden bg-black bg-opacity-75 text-white p-4 rounded-md transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                                <p>An expense app that users can use to track their expenses effortlessly, analyze spending patterns with dynamic visualizations, and experience the seamless interface. </p>
                            </div>
                        </a>
                        <a className='p-4 inline-block  perspective-lg transition-transform transform hover:translate-x-4 hover:shadow-lg relative group' href="https://nolum-password-generator.netlify.app/">
                            <img src="./src/assets/images/password-generator.png" alt="password generator website" className='rounded-2xl border-2 border-purple' />
                            <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 hidden bg-black bg-opacity-75 text-white p-4 rounded-md transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                                <p>A user-friendly application that creates strong and randomized passwords, ensuring user accounts stay protected from unauthorized access. .</p>
                            </div>
                        </a>
                        <a className='p-4 inline-block  perspective-lg transition-transform transform hover:translate-x-2 hover:shadow-lg relative group' href="https://girlcode-careers.onrender.com/">
                            <img src="./src/assets/images/job-listing.png" alt="job listing website" className='rounded-2xl border-2 border-purple' />
                            <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 hidden bg-black bg-opacity-75 text-white p-4 rounded-md transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                                <p>A job listing website that was inspired by Careers24.com. This would be used as a way of finding your desired job. You can create a profile, add your CV, search for jobs, and recruiters can use it to recruit people.</p>
                            </div>
                        </a>
                        <a className='p-4 inline-block  perspective-lg transition-transform transform hover:translate-x-2 hover:shadow-lg relative group' href="https://nolum-blackjack-game.netlify.app/">
                            <img src="./src/assets/images/blackjack.jpg" alt="blackjack app" className='rounded-2xl border-2 border-purple' />
                            <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 hidden bg-black bg-opacity-75 text-white p-4 rounded-md transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                                <p>A blackjack game that was created using JavaScript for users that just want to have a little fun.</p>
                            </div>
                        </a>
                        <a className='p-4 inline-block  perspective-lg transition-transform transform hover:translate-x-2 hover:shadow-lg relative group' href="https://nolum-chrome-extension.netlify.app/">
                            <img src="./src/assets/images/chrome-extension.png" alt="chrome extension" className='rounded-2xl border-2 border-purple' />
                            <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 hidden bg-black bg-opacity-75 text-white p-4 rounded-md transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                                <p>A chrome extension that can be seamlessly integrated into your browser, this tool transforms your browsing experience into a lead-tracking powerhouse. Users can capture potential leads with a single click, and access detailed insights directly from your browser toolbar.</p>
                            </div>
                        </a>
                        <a className='p-4 inline-block  perspective-lg transition-transform transform hover:translate-x-2 hover:shadow-lg relative group' href="https://nolum-airbnb-experiences.netlify.app/">
                            <img src="./src/assets/images/experiences-page.png" alt="Airbnb experiences website" className='rounded-2xl border-2 border-purple' />
                            <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 hidden bg-black bg-opacity-75 text-white p-4 rounded-md transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                                <p>An Airbnb experiences page where users explore, engage, and make every journey a personalized story worth sharing.</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div >
        </section >
    )
}

export default Projects
