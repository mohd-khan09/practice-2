import { Typography } from '@mui/material'
import React from 'react'
import Carosel from './carosel'
import container from '../../images/container.svg'
import './project.css'

const projects = () => {
  return (
    <div className='box'>
      <div className="containerMain">
      <img src={container} alt="bc-img" />
        <Typography className='projects'>Projects</Typography>
        <p>here are the projects I developed, prototyped or participated in</p>
        <Carosel/>
      </div>
    </div>
  )
}

export default projects
