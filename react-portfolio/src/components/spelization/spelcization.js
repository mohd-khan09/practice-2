import React from 'react'
import './spelcization.css'
import techstack from '../../images/technologyscontainer.svg'
import arrow from '../../images/arrow.svg'
import ring from '../../images/ring-text.svg'
import { Typography } from '@mui/material'
const spelcization = () => {
  return (
    <div className="container-spl">
    <div className="sixe-box">
    <Typography className='Specializations'>Specializations</Typography>
      <p>Technologies I'm familiar with </p>
      <img src={techstack} alt='technologies'/>
    </div>
    <div className="circle">
  <img src={arrow} alt="arrow" />
  <p>these are the technologies i currently use, but learning new things is a hobbin for me.</p>
  <img src={ring} alt="" />
    </div>
    </div>
  )
}

export default spelcization
