import { motion, useReducedMotion } from 'framer-motion'
export default function Reveal({children,className='',delay=0, y=28}) {
  const reduce = useReducedMotion()
  return <motion.div className={className} initial={reduce?false:{opacity:0,y}} whileInView={{opacity:1,y:0}}
    viewport={{once:true,amount:.16}} transition={{duration:.72,delay,ease:[.22,1,.36,1]}}>{children}</motion.div>
}
