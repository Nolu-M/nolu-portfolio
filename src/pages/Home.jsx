import Header from '../components/Header'
import Introduction from '../components/Introduction'
import Projects from '../components/Projects'
import Links from '../components/Links'
import About from '../components/About'



const Home = () => {
    return (
        <div className='conainer mx-auto'>
            <div className={`bg-background`} >
                <Header />
                <Introduction />
                <About />
                <Projects />
                <Links />
            </div>
        </div>
    )
}

export default Home
