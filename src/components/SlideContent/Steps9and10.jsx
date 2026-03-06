import React from 'react'
import Slide from '../Slide'
import styled from 'styled-components'

const Wrap = styled.div`display:flex;gap:18px;flex-wrap:wrap;align-items:flex-start;width:100%`;
const Card = styled.div`flex:1;min-width:260px;background:white;padding:18px;border-radius:12px;box-shadow:0 8px 24px rgba(2,6,23,0.04)`

export default function Steps9and10(){
  return (
    <Slide>
      <Wrap>
        <Card>
          <h3>Interpretation</h3>
          <p style={{color:'#64748b'}}>Link results to research questions and theory. Discuss limitations and robustness.</p>
        </Card>
        <Card>
          <h3>Reporting</h3>
          <p style={{color:'#64748b'}}>Structure: Abstract, Intro, Methods, Results, Discussion, Conclusion, References.</p>
        </Card>
      </Wrap>
    </Slide>
  )
}
