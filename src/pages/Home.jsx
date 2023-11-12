import React from 'react'
import Header from '../components/Header'
import Introduction from '../components/Introduction'
import Projects from '../components/Projects'
import Links from '../components/Links'
import About from '../components/About'



const Home = () => {
    return (
        <div className={`bg-background`}>
            <Header />
            <Introduction />
            <Projects />
            <About />
            <Links />
        </div>
    )
}

export default Home
