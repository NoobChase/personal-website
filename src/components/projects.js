import '../styles/projects.css'
import Better from '../media/better.png'
import Capacity from '../media/production.svg'
import Person from '../media/businessman.svg'
import Autocad from '../media/dwg.svg'
import ImageLink from '../media/http.svg'
import { useEffect} from 'react'
import {motion, useAnimation} from 'framer-motion'
import {useInView} from 'react-intersection-observer'




const Projects = (props) =>{

    const Project = (props) =>{

      const {ref, inView} = useInView({threshold:.6})
        const animation = useAnimation()
        const imageAnimation = useAnimation()
        useEffect(() => {
            if(inView){
                animation.start({
                    x:0,
                    transition: {
                        type: 'spring', duration: 1.5, bounce: .3
                    }
                })
                imageAnimation.start({
                    opacity:1,
                    transition:{duration:1.5}
                })
            }
            if(!inView){
                if(props.count%2 === 0){
                    animation.start({x: '-50vw'})
                }
                else{
                    animation.start({x: '50vw'})
                }
                
                imageAnimation.start({opacity:0})
            }
            console.log('use effect hook, inview = ', inView)
            //by including inView below when it changes the useEffect will run
            //This is if we want to incorporate image links {(props.link) &&<div className='image-link'><a href={props.link} target={"blank"}><img alt = 'link icon' src={ImageLink}></img></a></div>}
        },[inView])
        if (props.count%2 === 0) {
            return(
                <div ref = {ref} className='project'>
                    <motion.div className='project-text' animate={animation}>

                        <h2>{props.header}</h2>
                        <p>{props.description}</p>
                    </motion.div>
                    <motion.div className='project-image' animate={imageAnimation}>
                        <img alt = 'project' src={props.image} width = 'auto' height={'auto'}/>
                    </motion.div>
                </div>
            )
        }
        else{
            return(
                <div ref = {ref} className='project'>
                    <motion.div className='project-image' animate={imageAnimation}>
                        <img alt = 'project' src={props.image} width = 'auto' height={'auto'}/>
                    </motion.div>
                    <motion.div className='project-text' animate={animation}>
                        <h2>{props.header}</h2>
                        <p>{props.description} {props.link && <a href={props.link} target={"blank"}>Click Here to visit site.</a>}</p>
                    </motion.div>
                </div>
            )
        }
        
    }
    var programmingProjects = [
        {
            header: 'Personal Website',
            description: 'To start the programming projects section is this website! This is where I will continue to post projects I am working on, and I can\'t wait to keep creating more. I created this site using React, Javascript, HTML, and CSS.',
            image: Person
        },
        {
            header: 'Better Than Yesterday',
            description: 'I created this website to record and plan my workouts. It targets experienced gym goers like myself who don\'t want to stick to a strict regimen. Instead, I want to see my daily exercises and change as needed, see the weight I have lifted in the past, and try and do better than yesterday. I built this project with React for the front end and used Node.js as the backend. I store the data in a SQL database and host it all on AWS.',
            image: Better,
            link: 'https://www.betterthanyesterday.ninja/'
        },
        {
            header: 'Capacity Modeling',
            description: 'In my role at Applied Materials, I model the manufacturing capacity across the business units for Austin and Singapore. This is primarily done in VBA and excel using the demand from our database. Furthermore, I have to create models for material flow based on current projects. We also inspect work centers if needed by pulling cycle time data and analyzing it in Python.',
            image: Capacity
        }
    ]

    var engineeringProjects = [
        {
            header: 'Efficiency Improvements',
            description: 'At Applied Materials, I evaluate different work centers to increase their capacity. First, I understand how and why they perform their current processes. Then I collaborate with them to make it more efficient by eliminating waste. Then I design a new work center in AutoCAD and implement it with the stakeholders.',
            image: Autocad
        }
    ]
    return(
        <div className="projects-section">
             <h1>Programming Projects</h1>
             {
                programmingProjects.map((project,i) => {
                    return(
                            <Project header = {project.header} description = {project.description} image = {project.image} count = {i} link = {project.link}/> 
                    )
                })
            }
            <h1>Engineering Projects</h1>
             {
                engineeringProjects.map((project,i) => {
                    return(
                            <Project header = {project.header} description = {project.description} image = {project.image} count = {i}/> 
                    )
                })
            }
            <div className='button-container'>
                <span><button onClick={() => {
                window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
                }}>Return to Top of Page
                </button></span>
            </div>
        </div>
    )
}
export default Projects