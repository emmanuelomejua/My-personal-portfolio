import './Toggle.css'
import sun from '../../assets/sun.png'
import moon from '../../assets/moon2.png'
import { useContext } from 'react'
import { ThemeContext } from '../../context/context'

const Toggle = () => {
  const {dispatch} = useContext(ThemeContext);

  // const handleClick = () => {
  //   dispatch({type: 'TOGGLE'})
  // }

  return (
    <div className='t'>
      <img src={sun} alt='Light' className='t-icon'  onClick={()=>dispatch({type: 'LIGHT'})}/>
      <img src={moon} alt='Dark' className='t-icon' onClick={()=>dispatch({type: 'DARK'})}/>
      {/* <button className='t-btn' onClick={handleClick} ></button> */}
    </div>

  )
}

export default Toggle
