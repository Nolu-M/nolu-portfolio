import MyTracker from '../assets/images/expense.png'
import MyGenerator from '..//assets/images/password-generator.png'
import JobListing from '../assets/images/job-listing.png'
import BlackJack from '../assets/images/blackjack.jpg'
import ChromeExtension from '../assets/images//chrome-extension.png'
import ExperiencesPage from '../assets/images/experiences-page.png'




const Projects = () => {
    return (
        <section id='projects'>
            <div className='container mx-auto'>
                <h2 className='pt-16 pb-8 heading'>PROJECTS</h2>
                <div className=''>
                    <div className='grid grid-cols-2 mt-8 pb-8'>
                        <a className='project' href="https://nolu-m-expense-tracker.netlify.app/">
                            <img src={MyTracker} alt="expense app" className='rounded-2xl border-2 border-purple' />
                            <div className="info">
                                <p>An expense app that users can use to track their expenses effortlessly, analyze spending patterns with dynamic visualizations, and experience the seamless interface. </p>
                            </div>
                        </a>
                        <a className='project' href="https://nolum-password-generator.netlify.app/">
                            <img src={MyGenerator} alt="password generator website" className='rounded-2xl border-2 border-purple' />
                            <div className="info">
                                <p>A user-friendly application that creates strong and randomized passwords, ensuring user accounts stay protected from unauthorized access. .</p>
                            </div>
                        </a>
                        <a className='project' href="https://girlcode-careers.onrender.com/">
                            <img src={JobListing} alt="job listing website" className='rounded-2xl border-2 border-purple' />
                            <div className="info">
                                <p>A job listing website that was inspired by Careers24.com. This would be used as a way of finding your desired job. You can create a profile, add your CV, search for jobs, and recruiters can use it to recruit people.</p>
                            </div>
                        </a>
                        <a className='project' href="https://nolum-blackjack-game.netlify.app/">
                            <img src={BlackJack} alt="blackjack app" className='rounded-2xl border-2 border-purple' />
                            <div className="info">
                                <p>A blackjack game that was created using JavaScript for users that just want to have a little fun.</p>
                            </div>
                        </a>
                        <a className='project' href="https://nolum-chrome-extension.netlify.app/">
                            <img src={ChromeExtension} alt="chrome extension" className='rounded-2xl border-2 border-purple' />
                            <div className="info">
                                <p>A chrome extension that can be seamlessly integrated into your browser, this tool transforms your browsing experience into a lead-tracking powerhouse. Users can capture potential leads with a single click, and access detailed insights directly from your browser toolbar.</p>
                            </div>
                        </a>
                        <a className='project' href="https://nolum-airbnb-experiences.netlify.app/">
                            <img src={ExperiencesPage} alt="Airbnb experiences website" className='rounded-2xl border-2 border-purple' />
                            <div className="info">
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
