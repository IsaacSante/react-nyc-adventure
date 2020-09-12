import React from 'react'
import HeroSection from '../../HeroSection'
import {homeObjOne,homeObjTwo } from './data'
import Pricing from '../../Pricing'
function Home() {
    return (
        <>
        <HeroSection {...homeObjOne}/>
        <HeroSection {...homeObjTwo}/>
        {/* <Pricing></Pricing> */}

        </>
    )
}
export default Home
