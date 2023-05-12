import './about.css';
import me from '../../assets/award.jpg'
import award from '../../assets/award.jpg'

const About = () => {
  return (
    <div className='a'>
      <div className='a-left'>
        <div className='a-card bg'></div>
        <div className='a-card'>
            <img src={me} alt='' className='a-img'/>
        </div>
      </div>
      <div className='a-right'>
        <h1 className='a-title'>About Me</h1>
        <p className='a-sub'>
            {/* Summary of me */}
        </p>
        <p className='a-desc'>
          I'm a skilled software developer with experience in JavaScript, specializes in NodeJs, and libraries such as ReactJs and its framework NextJs. I am a quick learner and collaborate closely with clients to create effiecient, scalable, and user-friendly solutions that solves real-world problems. Lets work together to bring your ideas to life
        </p>
        <div className='a-award'>
            <img src={award} alt='Award' className='a-award-img'/>
            <div className='a-award-texts'>
                <h4 className='a-award-title'>I've received a special recognition from a organisation I served</h4>
                <p className='a-award-desc'>
                GWC Tech Hub, Enugu <i>most reliable developer</i>
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
