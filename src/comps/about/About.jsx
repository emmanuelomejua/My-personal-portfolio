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
            It is a long established fact that we are reliable
        </p>
        <p className='a-desc'>
            We have proven experience in delivering your service, our clients all over the world are happy. Have received several international recognitions from nations of the world. Received the DataPluc Times award of the <i>Most Reliable Developers </i> in 2021
            We have proven experience in delivering your service, our clients all over the world are happy. Have received several international recognitions from nations of the world
        </p>
        <div className='a-award'>
            <img src={award} alt='Award' className='a-award-img'/>
            <div className='a-award-texts'>
                <h4 className='a-award-title'>Most Reliable Developer</h4>
                <p className='a-award-desc'>
                Febuary 2022 GWC Tech Hub <i>most reliable developer</i>
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
