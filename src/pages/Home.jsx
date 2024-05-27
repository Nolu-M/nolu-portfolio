/*import Header from '../components/Header'*/
import Introduction from '../components/Introduction'
import Projects from '../components/Projects'
import Links from '../components/Links'
import About from '../components/About'
import { useTheme } from '../components/UseThemeContext';
import ThemeSwitcher from '../components/ThemeSwitcher'



const Home = () => {
    const { theme } = useTheme();

    const themeClasses = {
        theme1: 'bg-blue-100 min-h-screen',
        theme2: 'bg-green-100 min-h-screen',
        theme3: 'bg-purple-100 min-h-screen',
      };

    return (
        <div className={themeClasses[theme]} >
            <div className='conainer mx-auto'>
                <div className={`bg-background pl-6 pr-6 h-lvh`} >
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
