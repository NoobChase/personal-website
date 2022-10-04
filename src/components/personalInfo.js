import Headshot from '../media/Headshot.JPG'
import '../styles/personalInfo.css'
const PersonalInfo = (props) => {

    return(
        <div>
            <div className="personal-info-section">
                <span className='headshot'>
                    <img alt='headshot' src={Headshot} />
                </span>
                <div className='personal-info'>
                    <h2>Personal Info</h2>
                    <p>My name is Chase Reynolds am a successful Industrial Engineer with a passion for coding. I have worked at Applied Materials since I graduated from Texas A&M University in 2019. In my free time, I enjoy working on projects that range from woodworking to creating useful websites for myself. Additionally, I enjoy being active by going on hikes, lifting weights, and practicing Brazillian Jiu Jitsu.</p>
                </div>           
            </div>
        </div>
    )
}

export default PersonalInfo