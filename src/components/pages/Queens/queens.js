import React from 'react'
import HeroSection from '../../HeroSection'
import {homeObjOne, homeObjTwo } from './data'
function Queens() {
    return (
        <>
        <HeroSection {...homeObjOne}/>
        <HeroSection {...homeObjTwo}/>
        </>
    )
}
export default Queens
