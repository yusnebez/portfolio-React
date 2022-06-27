import React from 'react';
import {motion} from 'framer-motion'
import { useForm, ValidationError } from '@formspree/react';

export const Contact = () => {
  const [state, handleSubmit] = useForm("moqrrvpa");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <motion.div className="lg:h-screen grid lg:grid-cols-2 bg-[#191919]"
    id='contact'
    whileInView={{ opacity:1 }}
    transition={{duration: 1}}
    >
        
            <div className='grid grid-cols-1 grid-rows-4'>
                <h1 className='row-start-2 ml-40 text-4xl font-bold text-[#6A98F0] mt-9'>Contacta</h1>
                <b className='row-start-3 ml-40 text-lg text-white'>No dudes en contactar conmigo </b>
            </div>
            
            <div className='grid content-center grid-cols-1'>
                <form  onSubmit={handleSubmit}>
                    <input className='grid col-span-2 mt-20 text-white placeholder-white bg-[#232323] border-b-2 outline-none lg:w-[35em] pb-3 border-black focus:border-b-2 focus:border-white font-bold text-xl'
                        id="email"
                        type="email" 
                        name="email"
                        placeholder='Your Email'
                    />
                    <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                    />
                    <textarea className='mt-16 font-bold text-white bg-[#232323] placeholder-white  border-b-2 outline-none border-black focus:border-b-2 focus:border-white lg:w-[35em] lg:h-[10em] text-xl'
                        id="message"
                        name="message"
                        placeholder=' Your Message' 
                    />
                    <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                    />
                    <button className='grid col-span-2 py-2 mt-10 text-lg bg-[#6A98F0] rounded-sm px-7 text-white hover:scale-110  ' type="submit" disabled={state.submitting}>
                        Contact Me
                    </button>
                </form>
            </div>
            <div className='grid text-white grid-col-1 grid-row-1'>
                <p>boton</p>
            </div>
    </motion.div>
  );
}
