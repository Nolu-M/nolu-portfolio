import MyCV from '../assets/NMaxazanaCV.pdf';
import MyImage from '../assets/images/nolum.png'

const Introduction = () => {
    return (
        <section className='mt-20'>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row'>
                    {/* Text Container */}
                    <div className='container lg:w-1/2'>
                        <div className='mt-10 inline-block'>
                            <h1 className='text-6xl text-white font-extrabold'>
                                Hi, my name <br />is Nolubabalo Maxazana
                            </h1>
                            <h2 className='text-4xl text-white font-medium mt-4'>and I am a software developer.</h2>
                        </div>
                        <div className='flex mb-10 mt-10'>
                            <a className='p-4 bg-[#5F57FF] text-[#fff] rounded-md' href={MyCV} target="_blank" rel="noopener noreferrer">
                                <span className="material-symbols-outlined">clinical_notes</span>Download Resume
                            </a>
                        </div>
                    </div>
                    {/* Image Container */}
                    <div className='container lg:w-1/2'>
                        <img className='h-full w-full rounded-lg' src={MyImage} alt="picture of me" />
                    </div>
                </div>
            </div>
        </section>


    )
}

export default Introduction
