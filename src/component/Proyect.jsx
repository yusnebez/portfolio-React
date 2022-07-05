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
            <img className='xl:hidden lg:landscape:h-[500px] grid col-start-1 lg:ml-4 p-4 text-white bg-[#232323] rounded-lg lg:h-[300px] lg:w-[970px] xl:landscape:w-[625px] md:w-[680px] md:ml-20  lg:landscape:w-full'
              src='https://res.cloudinary.com/zeben/image/upload/c_scale,h_600,w_1000,x_897,y_0/v1656988127/portfolio/Screenshot_135_xfoc4f.png'>
            </img>
            <img className='xl:hidden lg:landscape:hidden grid col-start-1 lg:ml-4 p-4 text-white bg-[#232323] rounded-lg lg:h-[300px] lg:w-[970px] xl:landscape:w-[625px] md:w-[680px] md:ml-20  lg:landscape:w-full'
              src='https://res.cloudinary.com/zeben/image/upload/c_scale,h_300,w_625,x_897,y_0/v1656988127/portfolio/Screenshot_135_xfoc4f.png'>
            </img>
            <div className='grid col-start-1 lg:ml-4 p-4 text-white bg-[#232323] rounded-lg lg:h-[300px] md:w-[680px] xl:landscape:w-[625px] lg:w-[970px] md:ml-20 lg:landscape:w-full'>
              <p className='mt-6'>
                Página web para gestión y reserva de villas. Se listán las villas solicitadas pudiendo reservarlas
                y haciendo el pago de la misma. Se puede gestionar las reservas, anularlas y gestionar todo sobre ellas.
                Pueden ver el código del Back-End y el Front-End desde el repositorio de Github que dejo a continuación
              </p>
            <div className='grid grid-rows-1 mt-10 gris-cols-4'>
                <SiReact  className='grid col-start-1 text-2xl md:ml-20 ml-10 text-[#6A98F0]'/>
                <SiTailwindcss className='grid col-start-2 text-2xl text-[#6A98F0]'/>
                <FaNodeJs className='grid col-start-3 text-2xl text-[#6A98F0]'/>
                <SiMongodb className='grid col-start-4 text-2xl text-[#6A98F0]'/>
            </div>
            <div className='grid grid-cols-4 grid-rows-1 gap-4 pt-4 mr-2'>
              <a href="https://github.com/yusnebez/grancanariahouse-front" className='grid col-start-1 bg-[#6A98F0] text-white h-10 text-center pt-1 rounded-sm col-span-2'>Front-End</a>
              <a href="https://github.com/yusnebez/grancanariahouse-back" className='grid col-start-3 bg-[#6A98F0] text-white h-10 text-center pt-1 rounded-sm col-span-2'>Back-End</a>
            </div>
            </div>
            <div className='xl:grid lg:col-start-2 bg-amber-200 hidden xl:h-[300px] rounded-lg xl:w-[625px] col-span-3'>
              <img className='rounded-lg' src='https://res.cloudinary.com/zeben/image/upload/c_scale,h_300,w_625,x_897,y_0/v1656988127/portfolio/Screenshot_135_xfoc4f.png'/>
            </div>
          </div>
          <div className='grid row-start-2 gap-4 lg:grid-cols-1 xl:grid-cols-2'>
            <img className='xl:hidden lg:landscape:h-[500px] grid col-start-1 lg:ml-4 p-4 text-white bg-[#232323] rounded-lg lg:h-[300px] lg:w-[970px] xl:landscape:w-[625px] md:w-[680px] md:ml-20  lg:landscape:w-full'
              src='https://res.cloudinary.com/zeben/image/upload/c_scale,h_600,w_1000/v1656988127/portfolio/Screenshot_123_ks2gwu.png'>
            </img>
            <img className='xl:hidden lg:landscape:hidden grid col-start-1 lg:ml-4 p-4 text-white bg-[#232323] rounded-lg lg:h-[300px] lg:w-[970px] xl:landscape:w-[625px] md:w-[680px] md:ml-20  lg:landscape:w-full'
              src='https://res.cloudinary.com/zeben/image/upload/c_fill,h_300,w_625/v1656988127/portfolio/Screenshot_123_ks2gwu.png'>
            </img>
            <div className='grid -mt-16 xl:mt-0 col-start-1 lg:ml-4 p-4 text-white bg-[#232323] rounded-lg lg:h-[300px] lg:w-[970px] xl:landscape:w-[625px] md:w-[680px] md:ml-20  lg:landscape:w-full'>
              <p className='mt-6'>
                Aplicación que nos devuelve recetas al solicitarlas con los ingredientes que tenemos disponibles. Se utiliza API de spoonacular
                para las recetas alimenticias.
              </p>
            <div className='grid grid-rows-1 mt-10 gris-cols-4'>
                <SiReact  className='grid col-start-1 text-2xl md:ml-10 ml-10 text-[#6A98F0]'/>
                <SiTailwindcss className='grid col-start-2 text-2xl text-[#6A98F0]'/>
                <FaNodeJs className='grid col-start-3 text-2xl text-[#6A98F0]'/>
                <SiMongodb className='grid col-start-4 text-2xl text-[#6A98F0]'/>
            </div>
            <div className='grid grid-cols-4 grid-rows-1 gap-4 pt-4 mr-2'> {/*w-[75px] md:w-24 rounded-sm mt-8 pl-6 ml-2 lg:pt-2 mr-2*/}
              <a href="https://github.com/yusnebez/Genie-Cook-Front-End" className='grid col-start-1 bg-[#6A98F0] text-white h-10 portrait:col-span-2 text-center pt-1 rounded-sm col-span-2'>Front-End</a> 
              <a href="https://github.com/yusnebez/Genie-Cook-Back-End" className='grid col-start-3 bg-[#6A98F0] text-white rounded-sm h-10 portrait:col-span-2 text-center pt-1 col-span-2'>Back-End</a>
            </div>
            </div>
            <div className='xl:grid lg:col-start-2 bg-amber-200 hidden xl:h-[300px] rounded-lg xl:w-[625px] col-span-3'>
              <img  className='rounded-lg' src='https://res.cloudinary.com/zeben/image/upload/c_fill,h_300,w_625/v1656988127/portfolio/Screenshot_123_ks2gwu.png' />
            </div>
          </div>
          
          <div className='grid row-start-3 gap-4 lg:grid-cols-1 xl:grid-cols-2'>
            <img className='xl:hidden lg:landscape:h-[500px] grid col-start-1 lg:ml-4 p-4 text-white bg-[#232323] rounded-lg lg:h-[300px] lg:w-[970px] xl:landscape:w-[625px] md:w-[680px] md:ml-20  lg:landscape:w-full'
              src='https://res.cloudinary.com/zeben/image/upload/c_scale,h_600,w_1000/v1656986906/portfolio/Screenshot_134_vxsg9e.png'>
            </img>
            <img className='xl:hidden lg:landscape:hidden grid col-start-1 lg:ml-4 p-4 text-white bg-[#232323] rounded-lg lg:h-[300px] lg:w-[970px] xl:landscape:w-[625px] md:w-[680px] md:ml-20  lg:landscape:w-full'
              src='https://res.cloudinary.com/zeben/image/upload/c_scale,h_300,w_625/v1656986906/portfolio/Screenshot_134_vxsg9e.png'>
            </img>
            <div className='grid col-start-1 -mt-16 xl:mt-0 lg:ml-4 p-4 text-white bg-[#232323] rounded-lg lg:h-[300px] lg:w-[970px] xl:landscape:w-[625px] md:w-[680px] md:ml-20  lg:landscape:w-full'>
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
            <div className='grid grid-cols-4 grid-rows-1 gap-4 pt-4 mr-2'>
              <a href="https://yusnebez.github.io/ScrollVerticalGame/" className='grid col-start-1 bg-[#6A98F0] text-white h-10 text-center pt-1 rounded-sm col-span-2'>Visitar</a>
              <a href="https://github.com/yusnebez/ScrollVerticalGame" className='grid col-start-3 bg-[#6A98F0] text-white h-10 text-center pt-1 rounded-sm col-span-2'>Github</a>
            </div>
            </div>
            <div className='xl:grid lg:col-start-2 bg-amber-200 hidden xl:h-[300px] rounded-lg xl:w-[625px] col-span-3'>
              <img  className='rounded-lg' src='https://res.cloudinary.com/zeben/image/upload/c_scale,h_300,w_625/v1656986906/portfolio/Screenshot_134_vxsg9e.png'/>
            </div>
          </div>
        </div>
    </motion.div>
  )
}

