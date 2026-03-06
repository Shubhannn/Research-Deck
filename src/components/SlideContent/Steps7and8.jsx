import React from 'react'
import Slide from '../Slide'
import styled from 'styled-components'
import { FiBarChart2, FiActivity } from 'react-icons/fi'

const Wrap = styled.div`display:flex;gap:18px;align-items:flex-start;width:100%`;
const Left = styled.div`flex:1;background:white;padding:18px;border-radius:12px;box-shadow:0 8px 24px rgba(2,6,23,0.04)`
const Right = styled(Left)``

export default function Steps7and8(){
  return (
    <Slide>
      <Wrap>
        <Left>
          <h3><FiActivity/> Analysis</h3>
          <p style={{color:'#64748b'}}>Transforming raw data into meaningful findings using statistical and qualitative techniques.</p>
        </Left>
        <Right>
          <h3><FiBarChart2/> Hypothesis Testing</h3>
          <p style={{color:'#64748b'}}>Selecting tests, controlling error rates, reporting effect sizes and confidence intervals.</p>
        </Right>
      </Wrap>
    </Slide>
  )
}
