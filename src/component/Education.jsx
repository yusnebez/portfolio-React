import {motion} from 'framer-motion'
import {SiJavascript} from 'react-icons/si'
import {SiReact} from 'react-icons/si'
import {FaNodeJs} from 'react-icons/fa'
import {SiMongodb} from 'react-icons/si'
import {SiTypescript} from 'react-icons/si'
import {SiTailwindcss} from 'react-icons/si'
import {FaGitSquare} from 'react-icons/fa'
import {Link as Links} from 'react-scroll'
import {AiOutlineDown} from 'react-icons/ai'

export const Education = () => {
  return (
    <motion.div className="grid lg:h-screen bg-cover bg-[#191919] content-center"  id='education'
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1  }}
    >
    <div className='grid grid-cols-2 grid-rows-2 lg:grid-rows-5 lg:h-[500px] xl:w-[1200px] lg:mb-32 rounded-sm gap-4  '>
      <div className='grid col-span-2 md:row-start-1 md:col-start-2'>
        <p className='lg:mb-10 lg:text-3xl text-center md:text-left xl:ml-20 md:-ml-14 text-2xl text-[#6A98F0] mt-20 md:mt-30 lg:landscape:mt-10'>Sobre Mi</p>
      </div>
      <div className='lg:mt-20 md:ml-20 pt-8 lg:h-[200px] md:w-[730px] h-[400px] xl:landscape:w-[1420px] lg:w-screen -mt-28 w-screen 
       rounded-sm row-start-2 bg-[#232323] lg:row-start-2 col-span-2 landscape:h-[250px] landscape:-mt-8 md:portrait:h-[250px] md:portrait:-mt-8 lg:landscape:mt-8 lg:landscape:w-[970px]'>
        <p className='container grid pl-4 pr-4 text-lg text-left text-white lg:mt-4 lg:mx-auto lg:text-2xl lg:mr-20 lg:text-center'>
          Hola soy Zebensui Herrera. De mi trayectoria profesional destaco mi trabajo como formador y técnico de Apple;
          mi pasión por la enseñanza me llevó a escribir y a publicar dos libros digitales en el iBookStore.
          Soy Técnico Superior de Sistemas y Redes, debido a mi curiosidad, las ganas de aprender 
          y de seguir avanzado en mi carrera, realicé un Bootcamp lo que me permitió seguir aumentado mis capacidades profesionales como 
          desarrollador Full Stack.
        </p>
      </div>
      <div className='grid col-span-2 row-start-3 gap-2 p-4 md:ml-16 mt-28 lg:ml-16 xl:ml-96 lg:mt-64'>
        <div className='grid grid-cols-3 grid-rows-4 gap-2 ml-12 md:ml-24 lg:grid-rows-1 lg:grid-cols-8'>
          <SiJavascript className='grid mb-4 col-start-1 sm:grid-rows-1 text-7xl text-[#6A98F0]' />
          <SiTypescript className='grid mb-4 lg:col-start-2 col-start-2 grid-row-1 text-7xl text-[#6A98F0]' />
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

