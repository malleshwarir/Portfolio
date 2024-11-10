import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
          
          const Hero = () => {
            return (
              <section className={`relative w-full h-screen mx-auto`}>
                <div
                  className={`absolute inset-0 top-[70px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
                >
                  <div className='flex flex-col justify-center items-center mt-5'>
                    <div className='w-5 h-5 rounded-full bg-[#AD33FF]' />
                    <div className='w-1 sm:h-100 h-40 violet-gradient' />
                  </div>
          
                  <div>
                   <div className={`${styles.heroHeadText} text-white`}>
                     <h5
                     > Hi, I'm <span className='text-[#AD33FF]'>Malleshwari R</span></h5>
                    </div>
                    <p className={`${styles.heroSubText} mt-1 text-white-100`}>
                    A web developer passionate about creating user-friendly websites <br className='sm:block hidden' />
                    and always eager to learn.
                    </p>
                  </div>
                </div>
          
                <ComputersCanvas />
          
                <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
                  <a href='#about'>
                    <div className='w-[35px] h-[60px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                      <motion.div
                        animate={{
                          y: [0, 25, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          repeatType: "loop",
                        }}
                        className='w-3 h-3 rounded-full bg-secondary mb-1'
                      />
                    </div>
                  </a>
                </div>
              </section>
            );
          };
          
          export default Hero;
          