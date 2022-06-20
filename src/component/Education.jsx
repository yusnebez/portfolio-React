import {motion} from 'framer-motion'
import {SiJavascript} from 'react-icons/si'
import {SiReact} from 'react-icons/si'
import {FaNodeJs} from 'react-icons/fa'
import {SiMongodb} from 'react-icons/si'
import {SiTypescript} from 'react-icons/si'
import {SiTailwindcss} from 'react-icons/si'
import {FaGitSquare} from 'react-icons/fa'
import {} from 'react-icons'
import {} from 'react-icons'



export const Education = () => {
  return (
    <motion.div className="grid h-screen bg-cover bg-[#191919] content-center"  id='education'
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1  }}
    >
    <div className='grid grid-cols-1 grid-rows-5 h-[500px] w-[1200px] mb-32  rounded-sm gap-4  '>
      <div className='grid row-start-1 '>
        <p className=' mb-20 ml-40 text-3xl text-[#6A98F0]'>Sobre Mi</p>
      </div>
      <div className='w-screen pt-4 h-[200px] transform -skew-y-6 rounded-sm row-start-2 bg-[#232323]'>
        <p className='mt-8 ml-20 text-2xl text-center text-white'>Hola soy Zebensui Herrera Desarollador Web Full Stack y Tecnico Superior en Redes y sistemas informáticos. Apasionado de las tecnólogias y por ello al día de 
        las posibles novedades y cambios en ellas. En este último año he realizado un Boot Cam de programación para ampliar mis conocimiento y adentrarme 
        laboralmente en el mundo del desarrollo.
        </p>
      </div>
      <div className='grid row-start-5 gap-4 mt-24 ml-96'>
        <div className='grid grid-rows-1 gris-cols-7'>
          <SiJavascript className='grid col-start-1 text-7xl text-[#6A98F0]' />
          <SiTypescript className='grid col-start-2 text-7xl text-[#6A98F0]' />
          <SiMongodb className='grid col-start-3 text-7xl text-[#6A98F0]'/>
          <SiReact  className='grid col-start-4 text-7xl text-[#6A98F0]'/>
          <FaNodeJs className='grid col-start-5 text-7xl text-[#6A98F0]'/>
          <FaGitSquare className='grid col-start-6 text-7xl text-[#6A98F0]'/>
          <SiTailwindcss className='grid col-start-7 text-7xl text-[#6A98F0]'/>
        </div>
      </div>
      
    </div>

      
        


    </motion.div>
  )
}

