import React from 'react'
import Slide from '../Slide'
import styled from 'styled-components'

const Wrap = styled.div`display:flex;gap:20px;align-items:flex-start;justify-content:center;flex-wrap:wrap;width:100%`
const Bubble = styled.div`background:linear-gradient(90deg, rgba(6,182,212,0.06), rgba(14,165,233,0.04));padding:18px;border-radius:14px;max-width:560px;box-shadow:0 8px 20px rgba(2,6,23,0.04)`

export default function Step2(){
  return (
    <Slide>
      <Wrap>
        <Bubble>
          <h3>Literature Review</h3>
          <p style={{color:'#475569'}}>Purpose: build on existing knowledge, identify gaps, refine research questions, and establish conceptual framework.</p>
          <div style={{display:'flex',gap:12,marginTop:12}}>
            <div style={{flex:1}}>
              <strong>Process</strong>
              <ul style={{color:'#64748b'}}>
                <li>Search & select</li>
                <li>Critically appraise</li>
                <li>Synthesize findings</li>
              </ul>
            </div>
            <div style={{flex:1}}>
              <strong>Outputs</strong>
              <ul style={{color:'#64748b'}}>
                <li>Annotated bibliography</li>
                <li>Research gap map</li>
              </ul>
            </div>
          </div>
        </Bubble>
      </Wrap>
    </Slide>
  )
}
