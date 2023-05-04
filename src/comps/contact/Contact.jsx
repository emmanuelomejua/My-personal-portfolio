import './contact.css';
import { useContext, useRef, useState } from 'react'
import emailjs from 'emailjs-com'
import { ThemeContext } from '../../context/context';
import { PhoneAndroidOutlined, EmailOutlined, LocationOn }  from '@mui/icons-material'

const Contact = () => {
    const {darkMode} = useContext(ThemeContext); 


    const formRef = useRef()
    const [done, setDone] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('a', 'b', formRef.current, 'c')
        .then((result)=>{
            console.log(result.text);
            setDone(true)
        }) 
        .catch((error)=> {
            throw(error)
        })
    }
  return (
    <div className='c' style={{ color: darkMode && '#999'}}>
      <div className='c-bg'></div>
      <section className='c-wrapper'>
        <div className='c-left'>
         <h1 className='c-title'>Contact Info</h1>
            <div className='c-info'>
           
                <div className='c-info-item'>       
                    <PhoneAndroidOutlined className='c-icon'/>
                    <span>+234 816 236 581</span>
                </div>

                <div className='c-info-item'>
                    <EmailOutlined className='c-icon'/>
                    <span>ifyomejua9722@gmail.com</span>
                </div>

                <div className='c-info-item'>
                   <LocationOn className='c-icon'/>
                    <span> 2 Millenium Rd, Akure. Ondo State</span>
                    <br></br>
                </div>

            </div>
        </div>

        <section className='c-right'>
            <p className='c-desc'>
                <b>What is your story?</b> Get in touch! Always available to provide solutions to our clients
            </p>
            <form ref={formRef} onSubmit={handleSubmit}>
                 <input 
                 type='text' 
                 required
                 placeholder='Name' 
                 name='user_name'  style={{backgroundColor: darkMode && '#333', color: '#999'}}
                 />

                 <input 
                 type='text' 
                 placeholder='Subject' name='user_subject'  style={{backgroundColor: darkMode && '#333', color: '#999'}}
                 />

                 <input 
                 type='email' 
                 placeholder='Email' 
                 required
                 name='user_name' 
                 style={{backgroundColor: darkMode && '#333', color: '#999'}}
                 />

                 <textarea rows={5} placeholder='Message' name='meassage'  style={{backgroundColor: darkMode && '#333', color: '#999'}}/>
               < br/>
                 <button>Submit</button>
                 {done && 'Sent'}
            </form>
        </section>
      </section>
    </div>
  )
}

export default Contact
