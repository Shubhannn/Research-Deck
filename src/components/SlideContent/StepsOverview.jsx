import React, { useState } from 'react'
import styled from 'styled-components'
import Slide from '../Slide'
import { motion } from 'framer-motion'

const Flow = styled.div`display:flex;gap:12px;flex-wrap:wrap;align-items:center;justify-content:center;max-width:980px`;
const Node = styled(motion.div)`width:140px;height:90px;border-radius:12px;display:flex;align-items:center;justify-content:center;background:rgba(6,182,212,0.06);cursor:pointer;box-shadow:0 6px 18px rgba(2,6,23,0.04)`
const Details = styled.div`margin-top:18px;text-align:center;color:#475569`

const steps = [
  'Identify Problem','Literature Review','Hypothesis','Design','Sampling','Data Collection','Analysis','Testing','Interpretation','Reporting'
]

export default function StepsOverview(){
  const [selected,setSelected] = useState(null)

  return (
    <Slide>
      <div style={{width:'100%'}}>
        <h2>Overview - Steps in Research Process</h2>
        <Flow>
          {steps.map((s,i)=> (
            <Node key={s} onClick={()=>setSelected(i)} whileHover={{scale:1.05}} whileTap={{scale:0.98}}>
              <div style={{textAlign:'center'}}>
                <div style={{fontWeight:700}}>{i+1}</div>
                <div style={{fontSize:12,color:'#475569'}}>{s}</div>
              </div>
            </Node>
          ))}
        </Flow>
        <Details>
          {selected === null ? 'Click any step to see details' : `Step ${selected+1}: ${steps[selected]}`}
        </Details>
      </div>
    </Slide>
  )
}
