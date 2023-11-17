import React from 'react'

const Header = () => {
    return (
        <section id='home'>
            <div className='container mx-auto'>
                <div className='flex justify-between pt-4'>
                    <a href="#home">
                        <h1 className='text-[#6d4d6e]'>Nolubabalo Maxazana</h1>
                    </a>
                    <div className='text-[#6d4d6e]'>
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






