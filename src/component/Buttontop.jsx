import {animateScroll as scroll} from 'react-scroll'

export const Buttontop = () => {
  
return (
    <div className=''>
        <button className='bg-[#D72323]' onClick={() => scroll.scrollToTop()}>Volver a Inicio</button>
    </div>
  )
}

