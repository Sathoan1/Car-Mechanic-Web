import React from 'react'
import Header from '../components/Header'
import SpecialMenu from '../components/SpecialMenu'
import TopEngineers from '../components/TopEngineers'
import Services from '../components/Services'

const Home = () => {
  return (
    <div>
        <Header/>
        <SpecialMenu/>
        <TopEngineers/>
        <Services/>
    </div>
  )
}

export default Home