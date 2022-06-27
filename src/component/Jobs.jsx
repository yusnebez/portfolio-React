import {motion} from 'framer-motion'

export const Jobs = () => {


  return (
    <motion.div className='md:grid h-screen bg-[#3A4750]' id='jobs'
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1  }}
    >
        
        <h1 className='ml-40 text-4xl text-white'>ESTAS EN JOBS</h1>


    </motion.div>
  )
}

