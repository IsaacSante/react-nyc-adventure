import React from 'react'
import HeroSection from '../../HeroSection'
import {homeObjOne,homeObjTwo } from './data'
function Brooklyn() {
    return (
        <>
        <HeroSection {...homeObjOne}/>
        <HeroSection {...homeObjTwo}/>
        </>
    )
}
export default Brooklyn
