import React from 'react'
import Banner from '../../components/Banner/Banner'
import EventListing from '../../components/EventListing/EventListing'
import Organizer from '../../components/Organizer/Organizer'
import NewsLetter from '../../components/NewsLetter/NewsLetter'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Organizer/>
      <EventListing/>
      <NewsLetter/>
    </div>
  )
}

export default Home
