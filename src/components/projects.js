import '../styles/projects.css'
import Better from '../media/better.png'
import Capacity from '../media/production.svg'
import Person from '../media/businessman.svg'
import Autocad from '../media/dwg.svg'

const Projects = (props) =>{
    const Project = (props) =>{
        if (props.count%2 === 0) {
            return(
                <div className='project'>
                    <div className='project-text'>
                        <h2>{props.header}</h2>
                        <p>{props.description}</p>
                    </div>
                    <div className='project-image'>
                        <img alt = 'project' src={props.image} width = 'auto' height={'auto'}/>
                    </div>
                </div>
            )
        }
        else{
            return(
                <div className='project'>
                    <div className='project-image'>
                        <img alt = 'project' src={props.image} width = 'auto' height={'auto'}/>
                    </div>
                    <div className='project-text'>
                        <h2>{props.header}</h2>
                        <p>{props.description}</p>
                    </div>
                </div>
            )
        }
        
    }
    var programmingProjects = [
        {
            header: 'Personal Website',
            description: 'To start the programming projects is this website! This is where I will continue to post projects I am working on, and I can\'t wait to keep creating more. I used React, Javascript, HTML, and CSS to create this site.',
            image: Person
        },
        {
            header: 'Better Than Yesterday',
            description: 'I created this website to record and plan my workouts. It targets experienced gym goers like myself who don\'t want to stick to a strict regimen. Instead, I want to see my general plan for the day, see the weight I have lifted in the past, and try and do better than yesterday. I built this project with React for the front end and used Node.js as the backend. I store the data in a SQL database and host it all on AWS.',
            image: Better
        },
        {
            header: 'Capacity Modeling',
            description: 'In my role at Applied Materials, I model the manufacturing capacity across the business units for Austin and Singapore. This is primarily done in VBA and excel using the demand from our database. Furthermore, I have to create models for material flow based on current projects. We also further inspect work centers if needed by pulling cycle time data and analyzing it in Python.',
            image: Capacity
        }
    ]

    var engineeringProjects = [
        {
            header: 'Efficiency Improvements',
            description: 'At Applied Materials, I evaluate different work centers to increase their capacity. First, I understand how and why they perform their current processes. Then I collaborate with them to make a more efficient process by eliminating waste. Then I design a new work center in AutoCAD and implement it with the stakeholders.',
            image: Autocad
        }
    ]
    return(
        <div className="projects-section">
             <h1>Programming Projects</h1>
             {
                programmingProjects.map((project,i) => {
                    return(
                            <Project header = {project.header} description = {project.description} image = {project.image} count = {i}/> 
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
        </div>
    )
}
export default Projects