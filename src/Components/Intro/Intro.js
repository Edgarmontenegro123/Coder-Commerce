import React from 'react'
import IntroVideo from '../../Media/Intro.mp4'
import Grid from '@material-ui/core/Grid'
import './Intro.css'

export default function Intro(){
    return(
      <Grid container spacing = {2}>
        <div id = 'divContainer'>
          <video id = 'video' loop autoPlay muted>
            <source src={IntroVideo} type="video/mp4" />
          </video>
          <div id = 'divH'>
            <h3 id = 'h'>Pensando en que vas a estudiar? </h3>
            <h3 id = 'h'>En Coder-Commerce te ayudamos a elegir!</h3>
          </div>
        </div>
      </Grid>
    )
}
