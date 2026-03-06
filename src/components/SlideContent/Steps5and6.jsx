import React from 'react'
import Slide from '../Slide'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Grid = styled.div`display:grid;grid-template-columns:1fr 1fr;gap:18px;width:100%`;
const Card = styled(motion.div)`background:white;padding:18px;border-radius:12px;box-shadow:0 8px 24px rgba(2,6,23,0.04)`

export default function Steps5and6(){
  const sampling = ['Random','Stratified','Cluster','Convenience']
  const methods = ['Surveys','Interviews','Observations','Archival']

  return (
    <Slide>
      <div style={{width:'100%'}}>
        <h2>Sampling & Data Collection</h2>
        <Grid>
          <Card whileHover={{scale:1.02}}>
            <h3>Sampling Methods</h3>
            <ul style={{color:'#64748b'}}>{sampling.map(s=> <li key={s}>{s}</li>)}</ul>
          </Card>
          <Card whileHover={{scale:1.02}}>
            <h3>Data Collection Techniques</h3>
            <ul style={{color:'#64748b'}}>{methods.map(m=> <li key={m}>{m}</li>)}</ul>
          </Card>
        </Grid>
      </div>
    </Slide>
  )
}
