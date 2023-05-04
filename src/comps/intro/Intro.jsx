import './intro.css'
import me from '../../assets/ify.jpg'

const intro = () => {
  return (
    <main className='i'>
      <section className='i-left'>
        <div className='i-left-wrapper'>
            <h2 className='i-intro'>Hello, my name is</h2>
            <h1 className='i-name'>Emmanuel Omejua</h1>

            <div className='i-title'>
                <div className='i-title-wrapper'>
                     <div className='i-title-item'>Web Development</div>
                     <div className='i-title-item'>DevOps Engineering</div>
                     <div className='i-title-item'>IT Consultant</div>
                     <div className='i-title-item'>Automation Testing</div>
                     <div className='i-title-item'>Mobile Engineering</div>
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
           A Creative, diligent and Innovative Software Engineer, solves complex problems through coding. And capable of managing of kinds of development process
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

