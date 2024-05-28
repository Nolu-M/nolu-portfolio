/*import Header from '../components/Header'*/
import Introduction from '../components/Introduction'
import Projects from '../components/Projects'
import Links from '../components/Links'
import About from '../components/About'
import  useTheme  from '../components/useTheme'
import ThemeSwitcher from '../components/ThemeSwitcher'




const Home = () => {
    const { theme } = useTheme();

    return (
        <div className={`${theme} min-h-screen`} >
            <div className='conainer mx-auto'>
                <div>
                    {/*<Header />*/}
                    <ThemeSwitcher />
                    <Introduction />
                    <About />
                    <Projects />
                    <Links />
                </div>
            </div>
        </div>
    )
}

export default Home
