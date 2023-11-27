import { useState } from 'react';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleLinks = () => {
        setShowMenu(!showMenu);
    };

    return (
        <section id='home'>
            <div className='container mx-auto pl-8 pr-8'>
                <div className='flex justify-between pt-4 align-center'>
                    <a href="#home"
                        className='text-white font-tertiary text-3xl hover:text-[#6d4d6e]'>Nolubabalo Maxazana
                    </a>
                    <button
                        type='button'
                        aria-controls="navbarNav"
                        onClick={toggleLinks}
                        className='menu-button bg-[#6d4d6e] align-middle p-2  rounded'
                    >
                        <span className="material-symbols-outlined">
                            menu
                        </span>
                    </button>
                    <div className={`links flex flex-row text-[#6d4d6e] ${showMenu ? 'show-menu' : ''}`}>
                        <a href='#about' className='mt-4 mr-4 shadow-lg hover:shadow-[#6d4d6e] p-2 font-bold'>ABOUT</a>
                        <a href='#projects' className='mt-4 mr-4 shadow-lg hover:shadow-[#6d4d6e] p-2 font-bold'>PROJECTS</a>
                        <a href='#links' className='mt-4 shadow-lg hover:shadow-[#6d4d6e] p-2 font-bold'>LINKS</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header






