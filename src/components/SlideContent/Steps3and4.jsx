import React, { useState } from 'react'
import Slide from '../Slide'
import styled from 'styled-components'

const Split = styled.div`display:flex;gap:20px;flex-wrap:wrap;width:100%`;
const Pane = styled.div`flex:1;min-width:260px;background:white;padding:18px;border-radius:12px;box-shadow:0 8px 24px rgba(2,6,23,0.04)`
const Toggle = styled.button`margin-bottom:12px;border:0;background:transparent;cursor:pointer;color:${p=>p.theme.primary}`

export default function Steps3and4(){
  const [leftForm, setLeft] = useState(true)

  return (
    <Slide>
      <Split>
        <Pane>
          <Toggle onClick={()=>setLeft(l=>!l)}>{leftForm? 'Show example hypothesis' : 'Show guidance'}</Toggle>
          <h3>Formulating Hypotheses</h3>
          <p style={{color:'#475569'}}>{leftForm ? 'Hypothesis: a testable prediction derived from theory and literature.' : 'Good hypothesis: clear, specific, falsifiable, measurable.'}</p>
        </Pane>
        <Pane>
          <h3>Research Design</h3>
          <p style={{color:'#475569'}}>Design choices: experimental, quasi-experimental, observational, cross-sectional, longitudinal.</p>
          <div style={{marginTop:10,color:'#64748b'}}>Consider sampling, measurement instruments, data sources, and analysis plans.</div>
        </Pane>
      </Split>
    </Slide>
  )
}
