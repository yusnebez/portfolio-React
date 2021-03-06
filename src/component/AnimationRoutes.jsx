import React from 'react'
import {AnimatePresence} from 'framer-motion'
import { useLocation, Route, Routes } from 'react-router-dom'
import {Home} from '../Pages/Home'
import {Jobs} from '../component/Jobs'
import {Contact} from './Contact'
import {Proyect } from './Proyect'
import {Education } from './Education'
import {Presentation} from './Presentation'

export const AnimationRoutes = () => {

    const location = useLocation()

  return (
    <AnimatePresence>
        <Routes location={location} keys={location.pathname}>    
            <Route path='/' element={<Home/>}/>
            <Route path='/presentation' element={<Presentation/>}/>
            <Route path='/jobs' element={<Jobs/>}/>
            <Route path='/proyect' element={<Proyect/>}/>
            <Route path='/education' element={<Education/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
    </AnimatePresence>
  )
}