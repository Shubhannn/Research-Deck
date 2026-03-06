import React, { useContext } from 'react'
import styled from 'styled-components'
import { PresentationContext } from '../context/PresentationContext'

const Panel = styled.div`
  position:fixed;right:12px;top:72px;bottom:72px;width:320px;background:rgba(255,255,255,0.96);border-radius:12px;padding:14px;box-shadow:0 12px 40px rgba(2,6,23,0.06);overflow:auto;z-index:60;
  @media(max-width:1000px){display:none}
`
const Header = styled.div`display:flex;justify-content:space-between;align-items:center;margin-bottom:12px`

export default function PresenterNotes(){
  const { current, notes, autoAdvance, toggleAutoAdvance, autoInterval, setAutoInterval, presenterMode } = useContext(PresentationContext)

  if(!presenterMode) return null

  return (
    <Panel>
      <Header>
        <div style={{fontWeight:700}}>Presenter Notes</div>
        <div style={{fontSize:12,color:'#6b7280'}}>Slide {current}</div>
      </Header>
      <div style={{color:'#475569',whiteSpace:'pre-wrap'}}>{notes[current]}</div>

      <div style={{marginTop:14}}>
        <label style={{display:'flex',gap:8,alignItems:'center'}}>
          <input type="checkbox" checked={autoAdvance} onChange={toggleAutoAdvance} /> Auto-advance
        </label>
        <div style={{marginTop:8,fontSize:13,color:'#6b7280'}}>Interval (ms)</div>
        <input type="range" min={2000} max={15000} value={autoInterval} onChange={(e)=>setAutoInterval(Number(e.target.value))} style={{width:'100%'}} />
      </div>
    </Panel>
  )
}
