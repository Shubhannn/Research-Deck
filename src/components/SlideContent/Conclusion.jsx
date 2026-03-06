import React from 'react'
import Slide from '../Slide'
import styled from 'styled-components'

const Col = styled.div`display:flex;flex-direction:column;gap:12px;align-items:center;justify-content:center;width:100%`;

export default function Conclusion(){
  return (
    <Slide>
      <Col>
        <h2>Conclusion & Thank You</h2>
        <ul style={{color:'#475569',maxWidth:720}}>
          <li>Follow a systematic process to ensure rigor.</li>
          <li>Choose methods aligned to research questions.</li>
          <li>Document, share, and replicate where possible.</li>
        </ul>
        <div style={{marginTop:12,color:'#64748b'}}>Contact: 25SSDS170015@msruas.ac.in • Q&A welcome</div>
      </Col>
    </Slide>
  )
}
