import React from 'react'
import styled from 'styled-components'
import Slide from '../Slide'
import { FiCheckCircle, FiLayers, FiTarget, FiShield } from 'react-icons/fi'

const Grid = styled.div`display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:18px;width:100%`;
const Card = styled.div`background:rgba(255,255,255,0.9);padding:18px;border-radius:12px;box-shadow:0 6px 20px rgba(8,15,20,0.06);display:flex;gap:12px;align-items:center;cursor:pointer;transition:transform 220ms ease,box-shadow 220ms ease; &:hover{transform:translateY(-6px);box-shadow:0 12px 32px rgba(8,15,20,0.09)}`
const Icon = styled.div`font-size:22px;color:${p=>p.theme.primary}`
const Title = styled.div`font-weight:700;color:${p=>p.theme.text}`

export default function Importance(){
  const items = [
    {icon:<FiCheckCircle/>, title:'Rigor & Validity'},
    {icon:<FiLayers/>, title:'Structured Knowledge'},
    {icon:<FiTarget/>, title:'Informed Decisions'},
    {icon:<FiShield/>, title:'Ethical Standards'}
  ]

  return (
    <Slide>
      <div style={{width:'100%'}}>
        <h2>Importance of Research Process</h2>
        <Grid>
          {items.map(i=> (
            <Card key={i.title} role="button">
              <Icon>{i.icon}</Icon>
              <div>
                <Title>{i.title}</Title>
                <div style={{color:'#64748b',fontSize:13}}>Brief explanation about {i.title.toLowerCase()}.</div>
              </div>
            </Card>
          ))}
        </Grid>
      </div>
    </Slide>
  )
}
