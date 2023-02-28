import React, { useContext }  from 'react'
import './AboutUs.css'
import Header from '../../Components/Header/Header';
import { UserContext } from "../../assets/UserContext/UserContext";

const AboutUs = () => {

  const state = useContext(UserContext);

  return (

    <section className='section_home'  onClick={() => state.dispatch({ type: 'off'})}>
      <div>
      <Header title={'About Us'} />
    </div>
      </section>
  )
}


export default AboutUs