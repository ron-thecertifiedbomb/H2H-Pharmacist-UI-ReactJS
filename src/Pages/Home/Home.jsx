import React, { useContext }  from 'react'
import './Home.css'
import Header from '../../Components/Header/Header';
import { UserContext } from "../../assets/UserContext/UserContext";


const Home = () => {

  const state = useContext(UserContext);

  return (

    <section className='section_home'  onClick={() => state.dispatch({ type: 'off'})}>
      <div>
      <Header title={'Title'} />
    </div>
      </section>
  )
}


export default Home