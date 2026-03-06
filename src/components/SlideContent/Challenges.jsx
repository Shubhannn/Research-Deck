import React from 'react'
import Slide from '../Slide'
import styled from 'styled-components'

const List = styled.div`display:flex;flex-direction:column;gap:12px;max-width:900px;width:100%`
const Pair = styled.div`display:flex;justify-content:space-between;gap:12px;background:white;padding:12px;border-radius:10px;box-shadow:0 8px 24px rgba(2,6,23,0.04)`

export default function Challenges(){
  const items = [
    {p:'Limited resources', s:'Prioritize & pre-register study'},
    {p:'Access to data', s:'Use open-data and partnerships'},
    {p:'Bias in methods', s:'Triangulate and validate'},
    {p:'Ethical concerns', s:'IRB & transparent consent'}
  ]

  return (
    <Slide>
      <div style={{width:'100%'}}>
        <h2>Challenges in Research Process</h2>
        <List>
          {items.map(i=> (
            <Pair key={i.p}>
              <div style={{fontWeight:700}}>{i.p}</div>
              <div style={{color:'#64748b'}}>{i.s}</div>
            </Pair>
          ))}
        </List>
      </div>
    </Slide>
  )
}
