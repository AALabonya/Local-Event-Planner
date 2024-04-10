import React from 'react'
import Banner from '../../components/Banner/Banner'
import EventListing from '../../components/EventListing/EventListing'
import Organizer from '../../components/Organizer/Organizer'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Organizer/>
      <EventListing/>
    </div>
  )
}

export default Home
