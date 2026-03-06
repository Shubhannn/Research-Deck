import React from 'react'
import Slide from '../Slide'
import styled from 'styled-components'
import { FiAperture, FiList, FiShuffle } from 'react-icons/fi'

const Grid = styled.div`display:grid;grid-template-columns:repeat(3,1fr);gap:18px;width:100%`;
const Card = styled.div`background:white;padding:18px;border-radius:12px;box-shadow:0 8px 24px rgba(2,6,23,0.04);text-align:center;`;

export default function TypesMethodology(){
  return (
    <Slide>
      <div style={{width:'100%'}}>
        <h2>Types of Research Methodology</h2>
        <Grid>
          <Card>
            <FiAperture size={28} color="#06b6d4" />
            <h4>Qualitative</h4>
            <p style={{color:'#64748b'}}>Focus on depth, context, and meaning (interviews, observations).</p>
          </Card>
          <Card>
            <FiList size={28} color="#06b6d4" />
            <h4>Quantitative</h4>
            <p style={{color:'#64748b'}}>Structured measurement, statistical inference (surveys, experiments).</p>
          </Card>
          <Card>
            <FiShuffle size={28} color="#06b6d4" />
            <h4>Mixed Methods</h4>
            <p style={{color:'#64748b'}}>Combines strengths of both approaches for richer insight.</p>
          </Card>
        </Grid>
      </div>
    </Slide>
  )
}
