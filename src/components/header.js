import '../index.css'
import LinkedIn from '../media/LI-In-Bug.png'
import Github from '../media/GitHub-Mark-120px-plus.png'
import Gmail from '../media/icons8-gmail.svg'
const Header = (props) => {
    return(
        <div className='intro-header'>
        <div className="name">
            <h1 className = "firstName">Chase</h1>
            <h1 className = "lastName">Reynolds</h1>
        </div>
        <div className='contacts'>
            <a className='contact-item' href='https://www.linkedin.com/in/chase-reynolds-266371115/' target={"blank"}><img alt = 'Linkedin' src={LinkedIn}  height= {"50vh"}/></a>
            <a className='contact-item' href='https://github.com/NoobChase' target={"blank"}><img alt='github' src={Github}  height= {"50vh"}/></a>
            <a className='contact-item' href='mailto:chasereynolds2019@gmail.com' target={"blank"}><img alt='gmail' src={Gmail}  height= {"50vh"}/></a>
        </div>
        </div>
    )
}
export default Header