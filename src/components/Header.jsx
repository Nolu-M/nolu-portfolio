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
                        className='text-white'>Nolubabalo Maxazana
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
                        <a href='#about' className='mr-4'>About</a>
                        <a href='#projects' className='mr-4'>Projects</a>
                        <a href='#links'>Links</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header






