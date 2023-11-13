import React from 'react'
import { SocialIcon } from 'react-social-icons'

const Links = () => {
    return (
        <section>
            <div className='container mx-auto'>
                <h2 className='text-3xl mt-8 mb-8 text-center'>SOCIAL MEDIA</h2>
                <div className='flex justify-center pb-8'>
                    <SocialIcon network="github" url="https://github.com/Nolu-M" className='mr-6' />
                    <SocialIcon network="linkedin" url="https://github.com/Nolu-M" className='mr-6' />
                    <SocialIcon network="twitter" url="https://twitter.com/nolumaxazana?t=OXBy18qR-BpgD-KidLaIJw&s=09" className='mr-6' />
                    <SocialIcon network="instagram" url="https://www.instagram.com/nolumxzn/?igshid=MzMyNGUyNmU2YQ%3D%3D" className='mr-6' />
                    <SocialIcon network="email" url="mailto:nolubabalomaxazana@gmail.com" className='mr-6' />
                </div>
            </div>
        </section>
    )
}

export default Links
