import { Education } from '../component/Education'
import { Jobs } from '../component/Jobs'
import {Nav} from '../component/Nav'
import { Proyect } from '../component/Proyect'
import { Buttontop } from '../component/Buttontop'
import { Contact } from '../component/Contact'
import { Presentation } from '../component/Presentation'
import {Scrollpuntos} from '../component/Scrollpuntos'


export const Home = () => {
  return (
    < >
      <div className='grid w-screen h-screen'>
        <Nav/>
        <Presentation /> 
        <Education />
        <Proyect />
        <Contact />
       </div>
    </>
  )
}