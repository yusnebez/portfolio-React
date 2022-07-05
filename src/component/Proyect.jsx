import {motion} from 'framer-motion'
import {SiReact} from 'react-icons/si'
import {FaNodeJs} from 'react-icons/fa'
import {SiMongodb} from 'react-icons/si'
import {SiTailwindcss} from 'react-icons/si'


export const Proyect = () => {
  return (
    
    <motion.div className="lg:grid lg:h-full bg-[#191919]" id='proyect'
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    >
      
      <div className='grid grid-cols-1 grid-rows-3 gap-5 mt-5 ml-6 mr-6 lg:gap-10 xl:ml-40 lg:grid-rows-3 lg:ml-20'>
      <div className='grid gap-4 lg: lg:grid-cols-1 xl:grid-cols-2'>
          <div className='grid col-start-1 lg:ml-4 p-4 text-white bg-[#232323] rounded-lg lg:h-[300px] md:w-[680px] xl:landscape:w-[625px] lg:w-[970px] md:ml-20 lg:landscape:w-[1070px]'>
            <p className='mt-6'>
              2.Página web para gestión de villas, se listan las villas y se actualizan las 
              mismas. Se utiliza para el Front Reactjs con Context Api y Tailwind. Para el Back 
              NodeJs con MongoDB de base de datos.
            </p>
          <div className='grid grid-rows-1 mt-10 gris-cols-4'>
              <SiReact  className='grid col-start-1 text-2xl md:ml-20 ml-10 text-[#6A98F0]'/>
              <SiTailwindcss className='grid col-start-2 text-2xl text-[#6A98F0]'/>
              <FaNodeJs className='grid col-start-3 text-2xl text-[#6A98F0]'/>
              <SiMongodb className='grid col-start-4 text-2xl text-[#6A98F0]'/>
          </div>
          <div className='grid grid-cols-5 grid-rows-1 gap-4 pt-4 ml-20 md:ml-40'>
           <button className='grid col-start-1 bg-[#6A98F0] text-white w-[60px] md:w-24 rounded-sm mt-8 px-2 lg:pt-2'>Visitar</button>
           <button className='grid col-start-2 bg-[#6A98F0] text-white w-[60px] md:w-24 rounded-sm mt-8 px-2 ml-6 lg:pt-2'>Github</button>
          </div>
          </div>
          <div className='xl:grid lg:col-start-2 bg-amber-200 hidden xl:h-[300px] rounded-lg xl:w-[625px] col-span-3'>
          </div>
        </div>
        <div className='grid row-start-2 gap-4 lg:grid-cols-2'>
          <div className='grid col-start-1 lg:ml-4 p-4 text-white bg-[#232323] rounded-lg lg:h-[300px] lg:w-[970px] xl:landscape:w-[625px] md:w-[680px] md:ml-20 lg:landscape:w-[1070px]'>
            <p className='mt-6'>
              2.Página web para gestión de villas, se listan las villas y se actualizan las 
              mismas. Se utiliza para el Front Reactjs con Context Api y Tailwind. Para el Back 
              NodeJs con MongoDB de base de datos.
            </p>
          <div className='grid grid-rows-1 mt-10 gris-cols-4'>
              <SiReact  className='grid col-start-1 text-2xl md:ml-20 ml-10 text-[#6A98F0]'/>
              <SiTailwindcss className='grid col-start-2 text-2xl text-[#6A98F0]'/>
              <FaNodeJs className='grid col-start-3 text-2xl text-[#6A98F0]'/>
              <SiMongodb className='grid col-start-4 text-2xl text-[#6A98F0]'/>
          </div>
          <div className='grid grid-cols-5 grid-rows-1 gap-4 pt-4 ml-20 md:ml-40'>
           <button className='grid col-start-1 bg-[#6A98F0] text-white w-[60px] md:w-24 rounded-sm mt-8 px-2 lg:pt-2'>Visitar</button>
           <button className='grid col-start-2 bg-[#6A98F0] text-white w-[60px] md:w-24 rounded-sm mt-8 px-2 ml-6 lg:pt-2'>Github</button>
          </div>
          </div>
          <div className='xl:grid lg:col-start-2 bg-amber-200 xl:h-[300px] hidden rounded-lg xl:w-[625px] col-span-3'>
          </div>
        </div>
        <div className='grid row-start-3 gap-4 lg:grid-cols-1 xl:grid-cols-2'>
          <div className='grid col-start-1 lg:ml-4 p-4 text-white bg-[#232323] rounded-lg lg:h-[300px] lg:w-[970px] xl:landscape:w-[625px] md:w-[680px] md:ml-20  lg:landscape:w-[1070px]'>
            <p className='mt-6'>
              El juego está hecho con Javascript y CSS, listo para usar en un navegador compatible con html5.
              Basado en Final Frontier.
            </p>
          <div className='grid grid-rows-1 mt-10 gris-cols-4'>
              <SiReact  className='grid col-start-1 text-2xl md:ml-10 ml-10 text-[#6A98F0]'/>
              <SiTailwindcss className='grid col-start-2 text-2xl text-[#6A98F0]'/>
              <FaNodeJs className='grid col-start-3 text-2xl text-[#6A98F0]'/>
              <SiMongodb className='grid col-start-4 text-2xl text-[#6A98F0]'/>
          </div>
          <div className='grid grid-cols-5 grid-rows-1 gap-4 pt-4 ml-20 md:ml-40'>
           <a href="https://yusnebez.github.io/ScrollVerticalGame/" className='grid col-start-1 bg-[#6A98F0] text-white w-[50px] md:w-24 rounded-sm mt-8 pl-6 lg:pt-2'>Visitar</a>
           <a href="https://github.com/yusnebez/ScrollVerticalGame" className='grid col-start-2 bg-[#6A98F0] text-white w-[50px] md:w-24 rounded-sm mt-8 pl-6 ml-6 lg:pt-2'>Github</a>
          </div>
          </div>
          <div className='xl:grid lg:col-start-2 bg-amber-200 hidden xl:h-[300px] rounded-lg xl:w-[625px] col-span-3'>
          </div>
        </div>

      </div>
    </motion.div>
  )
}

