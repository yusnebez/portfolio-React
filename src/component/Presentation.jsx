import {motion} from 'framer-motion'
import MovingText from 'react-moving-text'
import {AiOutlineDown} from 'react-icons/ai'

export const Presentation = () => {
    
  return (
    
    <motion.div className="grid lg:h-screen lg:grid-cols-2 bg-cover lg:grid-rows-2 bg-[#191919]"  id='presentation'
  
    >
        <div  className='col-start-1 row-start-1 lg:row-start-2'>
            <MovingText className='mt-48 ml-4 text-2xl font-bold text-white lg:mt-24 lg:text-4xl lg:ml-40'
                type="fadeInFromBottom"
                duration="3000ms"
                delay="0s"
                direction="normal"
                timing="ease"
                iteration="1"
                fillMode="none">
                Desarrollador Full Stack 
                <p className='pt-5 text-xl font-light text-white'>
                    Autodidacta, apasionado por la 
                    informática y la programación. Especializado en el 
                    stack MERN
                </p>
                <form action='mailto:yusnebez@gmail.com'>
                <button type='submit' className='px-3 py-1 mt-5 text-xl bg-[#6A98F0] hover:scale-110  rounded-sm
                '>Hiring me</button>
                </form>
            </MovingText>
        </div>
        <div className='col-start-1 row-start-1'>
            <MovingText className='lg:mt-80  mt-36 lg:text-5xl font-bold text-[#6A98F0] lg:ml-40 pb-2 text-2xl ml-4'
                type="fadeInFromBottom"
                duration="3000ms"
                delay="0s"
                direction="normal"
                timing="ease"
                iteration="1"
                fillMode="none">
                Zebensui Herrera
            </MovingText>
        </div>
        <div className='row-start-5 text-center md:col-span-2'>
            <MovingText className='mt-24 ml-4 text-lg text-[#191919] md:text-white'
                type="squeezeVertical"
                duration="4000ms"
                delay="0s"
                direction="normal"
                timing="ease"
                iteration="4"
                fillMode="none">
                Scroll
            </MovingText>
        </div>
        
        <div className='hidden col-start-2 row-start-6 md:grid'>
            <button className='py-12 mb-1 ml-[0.4rem] border-l-2 border-white'></button>
            <AiOutlineDown className='mb-2 mr-2 text-white' />
        </div>
        
        
    </motion.div>
  )
}

