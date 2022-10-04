import '../styles/education.css'
import { useEffect, useState } from 'react'
import {motion, useAnimation} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
const Education = (props) =>{
    const {ref, inView} = useInView({threshold:.6})
        const animation = useAnimation()
        useEffect(() => {
            if(inView){
                animation.start({
                    opacity:1,
                    transition:{duration:1.5}
                })
            }
            if(!inView){
                animation.start({opacity:0})
            }
            console.log('education use effect hook, inview = ', inView)
            //by including inView below when it changes the useEffect will run
        },[inView])
    return(
        <div ref={ref} className='education'>
        <h1>Education</h1>
            <motion.div className="education-section" animate={animation}>
                <div className="skill">
                    <h2>Programming</h2>
                    <p>I first learned programming in my high school's computer science classes. Then I continued to progress during my time at TAMU. Since graduating, I have used it in my Industrial Engineer position to run capacity models and perform data analytics for our team. Over the past year, I have focused on website development and acquired the Fullstack Open certificate from the University of Helsinki.</p>
                </div>
                <div className="skill">
                <h2>Engineering</h2>
                    <p>While growing up, I have always had the desire to build and solve problems. Then after high school, I obtained my Industrial Engineering degree from TAMU and now use my 3d printer frequently for projects I am working on. I modeled so many 3d prints that I ended up with my Solidworks Associate certification. Over the past two years, I have worked as an Industrial Engineer at Applied Materials. Primarily I work on capacity models and project manage work center moves and business unit upgrades.</p>
                </div>
            </motion.div>
        </div>
    )
}
export default Education