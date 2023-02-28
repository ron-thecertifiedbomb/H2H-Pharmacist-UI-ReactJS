import React, { useContext }  from 'react'
import './Faqs.css'
import Header from '../../Components/Header/Header';
import { UserContext } from "../../assets/UserContext/UserContext";

const Faqs = () => {

  const state = useContext(UserContext);

  return (

    <section className='section_home'  onClick={() => state.dispatch({ type: 'off'})}>
      <div>
      <Header title={'FAQs'} />
    </div>
      </section>
  )
}


export default Faqs