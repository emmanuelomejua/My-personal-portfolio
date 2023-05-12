import './intro.css'
import me from '../../assets/ify.jpg'

const intro = () => {
  return (
    <main className='i'>
      <section className='i-left'>
        <div className='i-left-wrapper'>
            <h2 className='i-intro'>Hi, my name is</h2>
            <h1 className='i-name'>Ifeanyi Omejua</h1>
            <h4>I am Software Developer</h4>
            <p>This  are the amazing Tools and Technologies that I've used to provide solution to my clients </p>
            <div className='i-title'>
                <div className='i-title-wrapper'>
                     <div className='i-title-item'>ReactJs</div>
                     <div className='i-title-item'>NextJs</div>
                     <div className='i-title-item'>NodeJs</div>
                     <div className='i-title-item'>JavaScript</div>
                     <div className='i-title-item'>TypeScript</div>
                </div>
            </div>

            <svg
              width='75'
              height='75'
              viewBox='0 0 75 75'
              fill='none'
              stroke='black'
              className='i-scroll'
              xmlns='http://www.w3.org/svg'
            >
              <g id='scoll'>
                <path>

                </path>
              </g>
            </svg>

           <p className='i-desc'> 
           {/* A Creative, diligent and Innovative Software Engineer, solves complex problems through coding. And capable of managing of kinds of development process */}
           </p> 

        </div>
      
      </section>

      <section className='i-right'>
        <div className='i-bg'></div>
        <img src={me} alt='' className='i-img'/>
      </section>
    </main>
  )
}

export default intro

