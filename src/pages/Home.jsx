import React from 'react'
import Banner from '../Components/Banner'
import Box from '../Components/Box'
import About from './About'
import Appointment from './Appointment'
import Service from './Service'
import Testimonial from './../Components/Testimonial';
import Teams from './Teams';

const Home = () => {
  return (
    <>
      <Banner/>
      <Box/>
      <About/>
      <Appointment/>
      <Service/>
      <Testimonial/>
      <Teams/>

    </>
  )
}

export default Home
