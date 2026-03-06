import React from 'react'
import Slide from '../Slide'
import styled from 'styled-components'
import { FiShield, FiTarget, FiSearch, FiAlertTriangle } from 'react-icons/fi'

const Grid = styled.div`display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:14px;width:100%`;
const Card = styled.div`background:white;padding:14px;border-radius:12px;box-shadow:0 8px 24px rgba(2,6,23,0.04)`

export default function KeyConsiderations(){
  const items = [
    {icon:<FiShield/>, title:'Ethics'},
    {icon:<FiTarget/>, title:'Validity'},
    {icon:<FiSearch/>, title:'Reliability'},
    {icon:<FiAlertTriangle/>, title:'Bias'}
  ]

  return (
    <Slide>
      <div style={{width:'100%'}}>
        <h2>Key Considerations & Best Practices</h2>
        <Grid>
          {items.map(i=> (
            <Card key={i.title}>
              <div style={{fontSize:20,color:'#06b6d4'}}>{i.icon}</div>
              <h4 style={{margin:'8px 0'}}>{i.title}</h4>
              <div style={{color:'#64748b'}}>Short explanation about {i.title.toLowerCase()} in research.</div>
            </Card>
          ))}
        </Grid>
      </div>
    </Slide>
  )
}
