import React from 'react'
import Banner from '../Components/Banner'
import Box from '../Components/Box'
import About from './About'
import Appointment from './Appointment'
import Service from './Service'
import Testimonial from './../Components/Testimonial';
import Teams from './Teams';
import { Helmet } from 'react-helmet'
import Blogs from '../Components/Blogs'

const Home = () => {
  return (
    <>
      <Helmet titleTemplate="SNDB" />
      <Banner/>
      <Box/>
      <About/>
      <Appointment/>
      <Service/>
      <Blogs/>
      <Testimonial/>
     
      <Teams/>

    </>
  )
}

export default Home
