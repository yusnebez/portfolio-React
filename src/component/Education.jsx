import {motion} from 'framer-motion'
import {SiJavascript} from 'react-icons/si'
import {SiReact} from 'react-icons/si'
import {FaNodeJs} from 'react-icons/fa'
import {SiMongodb} from 'react-icons/si'
import {SiTypescript} from 'react-icons/si'
import {SiTailwindcss} from 'react-icons/si'
import {FaGitSquare} from 'react-icons/fa'


export const Education = () => {
  return (
    <motion.div className="grid lg:h-screen bg-cover bg-[#191919] content-center"  id='education'
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1  }}
    >
    <div className='grid grid-cols-2 grid-rows-2 lg:grid-rows-5 lg:h-[500px] lg:w-[1200px] mb-32 rounded-sm gap-4  '>
      <div className='grid col-start-2 row-start-1'>
        <p className='lg:mb-10  lg:text-3xl  ml-20 text-2xl text-[#6A98F0]'>Sobre Mi</p>
      </div>
      <div className='mt-20 pt-4 h-[200px] w-screen rounded-sm bg-[#232323] row-start-2 col-span-2'>
        <p className='container grid mx-auto mt-10 mr-20 text-2xl text-center text-white '>Hola soy Zebensui Herrera Desarollador Web Full Stack y Tecnico Superior en Redes y sistemas informáticos. Apasionado de las tecnólogias y por ello al día de 
        las posibles novedades y cambios en ellas. En este último año he realizado un Boot Cam de programación para ampliar mis conocimiento y adentrarme 
        laboralmente en el mundo del desarrollo.
        </p>
      </div>
      <div className='grid col-span-2 row-start-3 gap-4 mt-44 lg:ml-96 lg:mt-64'>
        <div className='grid ml-8 lg:grid-rows-1 lg:grid-cols-7 sm:grid-cols-3 sm:grid-rows-4'>
          <SiJavascript className='grid col-start-1 sm:grid-rows-1 text-7xl text-[#6A98F0]' />
          <SiTypescript className='grid lg:col-start-2 col-start-2 grid-row-1 text-7xl text-[#6A98F0]' />
          <SiMongodb className='grid lg:col-start-3 col-start-3 grid-row-1 text-7xl text-[#6A98F0]'/>
          <SiReact  className='grid lg:col-start-4 text-7xl text-[#6A98F0]'/>
          <FaNodeJs className='grid lg:col-start-5 text-7xl text-[#6A98F0]'/>
          <FaGitSquare className='grid lg:col-start-6 text-7xl text-[#6A98F0]'/>
          <SiTailwindcss className='grid lg:col-start-7 text-7xl text-[#6A98F0]'/>
        </div>
      </div>
      
    </div>
  </motion.div>
  )
}

