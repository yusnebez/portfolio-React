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
      <div className='container grid grid-cols-1 grid-rows-6 gap-10 mx-auto mt-5 ml-2 lg:ml-40 lg:grid-rows-3'>
      <div className='grid row-start-1 gap-4 lg:grid-cols-2'>
          <div className='grid col-start-1 p-4 text-white bg-[#232323] rounded-lg lg:h-[300px]'>
            <p className='mt-6'>
              2.Página web para gestión de villas, se listan las villas y se actualizan las 
              mismas. Se utiliza para el Front Reactjs con Context Api y Tailwind. Para el Back 
              NodeJs con MongoDB de base de datos.
            </p>
          <div className='grid grid-rows-1 mt-10 gris-cols-4'>
              <SiReact  className='grid col-start-1 text-2xl ml-20 text-[#6A98F0]'/>
              <SiTailwindcss className='grid col-start-2 text-2xl text-[#6A98F0]'/>
              <FaNodeJs className='grid col-start-3 text-2xl text-[#6A98F0]'/>
              <SiMongodb className='grid col-start-4 text-2xl text-[#6A98F0]'/>
          </div>
          <div className='grid grid-cols-5 grid-rows-1 gap-4 pt-4 ml-40'>
           <button className='grid col-start-1 bg-[#6A98F0] text-white rounded-sm mt-8 pt-1'>Visitar</button>
           <button className='grid col-start-2 bg-[#6A98F0] text-white rounded-sm mt-8 pt-1'>Github</button>
          </div>
          </div>
          <div className='grid lg:col-start-2 bg-amber-200 lg:h-[300px] rounded-lg lg:w-[600] col-span-3'>
          </div>
        </div>
        <div className='grid row-start-2 gap-4 lg:grid-cols-2'>
          <div className='grid col-start-1 p-4 text-white bg-[#232323] rounded-lg lg:h-[300px]'>
            <p className='mt-6'>
              2.Página web para gestión de villas, se listan las villas y se actualizan las 
              mismas. Se utiliza para el Front Reactjs con Context Api y Tailwind. Para el Back 
              NodeJs con MongoDB de base de datos.
            </p>
          <div className='grid grid-rows-1 mt-10 gris-cols-4'>
              <SiReact  className='grid col-start-1 text-2xl ml-20 text-[#6A98F0]'/>
              <SiTailwindcss className='grid col-start-2 text-2xl text-[#6A98F0]'/>
              <FaNodeJs className='grid col-start-3 text-2xl text-[#6A98F0]'/>
              <SiMongodb className='grid col-start-4 text-2xl text-[#6A98F0]'/>
          </div>
          <div className='grid grid-cols-5 grid-rows-1 gap-4 pt-4 ml-40'>
           <button className='grid col-start-1 bg-[#6A98F0] text-white rounded-sm mt-8 pt-1'>Visitar</button>
           <button className='grid col-start-2 bg-[#6A98F0] text-white rounded-sm mt-8 pt-1'>Github</button>
          </div>
          </div>
          <div className='grid lg:col-start-2 bg-amber-200 lg:h-[300px] rounded-lg lg:w-[600] col-span-3'>
          </div>
        </div>
        <div className='grid row-start-3 gap-4 lg:grid-cols-2'>
          <div className='grid col-start-1 p-4 text-white bg-[#232323] rounded-lg lg:h-[300px]'>
            <p className='mt-6'>
              2.Página web para gestión de villas, se listan las villas y se actualizan las 
              mismas. Se utiliza para el Front Reactjs con Context Api y Tailwind. Para el Back 
              NodeJs con MongoDB de base de datos.
            </p>
          <div className='grid grid-rows-1 mt-10 gris-cols-4'>
              <SiReact  className='grid col-start-1 text-2xl ml-20 text-[#6A98F0]'/>
              <SiTailwindcss className='grid col-start-2 text-2xl text-[#6A98F0]'/>
              <FaNodeJs className='grid col-start-3 text-2xl text-[#6A98F0]'/>
              <SiMongodb className='grid col-start-4 text-2xl text-[#6A98F0]'/>
          </div>
          <div className='grid grid-cols-5 grid-rows-1 gap-4 pt-4 ml-40'>
           <button className='grid col-start-1 bg-[#6A98F0] text-white rounded-sm mt-8 pt-1'>Visitar</button>
           <button className='grid col-start-2 bg-[#6A98F0] text-white rounded-sm mt-8 pt-1'>Github</button>
          </div>
          </div>
          <div className='grid lg:col-start-2 bg-amber-200 lg:h-[300px] rounded-lg lg:w-[600] col-span-3'>
          </div>
        </div>

      </div>
    </motion.div>
  )
}

