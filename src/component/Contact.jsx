import React from 'react';
import {motion} from 'framer-motion'
import {BsArrowUpCircle} from 'react-icons/bs'
import { useForm, ValidationError } from '@formspree/react';
import {Link as Links} from 'react-scroll'

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
        
            <div className='grid grid-cols-2 grid-rows-3'>
                {/*<h1 className='row-start-2 md:ml-32 lg:ml-28 ml-28 text-4xl font-bold text-[#6A98F0] mt-9 col-span-2'>Si todo lo que has leido te ha gustado</h1>*/}
                <b className='col-span-2 row-start-3 mt-2 ml-16 text-lg text-white md:ml-32 lg:ml-28 lg:-mt-24 md:col-span-1'>No dudes en contactar conmigo. Soy la persona que estás buscando.</b>
            </div>
            
            <div className='grid content-center grid-cols-1 ml-16 md:ml-28 lg:ml-2'>
                <form  onSubmit={handleSubmit}>
                    <input className='grid lg:mt-20 mt-8 text-white placeholder-white bg-[#232323] border-b-2 outline-none md:w-[22em] xl:w-[35em] pb-3 border-black focus:border-b-2 focus:border-white font-bold text-xl'
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
                    <textarea className='mt-8 font-bold text-white bg-[#232323] placeholder-white md:w-[22em] border-b-2 outline-none border-black focus:border-b-2 focus:border-white xl:w-[35em] lg:h-[10em] text-xl'
                        id="message"
                        name="message"
                        placeholder=' Your Message' 
                    />
                    <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                    />
                    <button className='grid col-span-2 py-2 mt-8 mb-16 text-lg bg-[#6A98F0] rounded-sm px-7 text-white hover:scale-110  ' type="submit" disabled={state.submitting}>
                        Contact Me
                    </button>
                </form>
            </div>
            <div className='grid text-white grid-col-2 grid-row-1'>
        <Links activeClass="active"
          to="presentation"
          spy={true}
          smooth={true}
          offset={-200}
          duration={500}
          ><BsArrowUpCircle className='col-start-2 mb-10 text-4xl lg:col-start-1 lg:ml-30 lg:text-5xl ml-60'/></Links>
            </div>
    </motion.div>
  );
}
