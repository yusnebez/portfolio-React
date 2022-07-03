import {motion} from 'framer-motion'
import {AiOutlineDown} from 'react-icons/ai'
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Presentation = () => {
    
    AOS.init()

    
  return (
    
    <motion.div className="grid lg:h-screen lg:grid-cols-2 bg-cover lg:grid-rows-2 bg-[#191919]"  id='presentation'
  
    >
        <div  className='col-start-1 row-start-1 lg:row-start-2'>
            <div className='mt-24 ml-4 text-2xl font-bold text-white lg:mt-30 md:mt-24 lg:text-4xl md:ml-32 lg:ml-40'
                >
                <div data-aos-duration="2000" data-aos="fade-right">
                    <p>Desarrollador Full Stack & Técnico de Sistemas</p>
                </div>
                <div data-aos-duration='2000' data-aos="fade-up">
                    <p className='pt-5 mb-2 mr-8 text-xl font-light text-white'>
                        Autodidacta, curioso por naturaleza y apasionado de las tecnologías.
                        Especializado en el stack MERN
                    </p>
                    
                    <form action='mailto:yusnebez@gmail.com'>
                    <button type='submit' className='px-3 py-1 mt-5 mb-4 text-xl bg-[#6A98F0] hover:scale-110  rounded-sm
                    '>Hiring me</button>
                    </form>
                </div>
            </div>
        </div>
        <div className='col-start-1 row-start-1'>
            <div data-aos-duration='2000' data-aos="fade-down" className='lg:mt-80 mt-18 md:mt-8 lg:text-4xl  font-bold text-[#6A98F0] lg:ml-40 md:ml-32 pb-2 text-2xl ml-4'
                >
                Zebensui Herrera
            </div>
        </div>
        <div className='hidden text-center lg:grid lg:row-start-5 md:col-span-2'>
            <div className='mt-24 mb-4 ml-8 text-lg text-[#191919] md:text-white'
                >
                Scroll
            </div>
        </div>
        
        <div data-aos="zoom-out" data-aos-duration='2000' className='hidden col-start-2 row-start-6 lg:grid'>
            <AiOutlineDown  className='mb-16 mr-2 text-3xl text-white' />
        </div>
        
    </motion.div>
  )
}

