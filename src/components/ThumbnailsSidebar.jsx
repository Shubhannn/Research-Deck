import React, { useContext } from 'react'
import styled from 'styled-components'
import slidesStatic from '../data/slidesData'
import { PresentationContext } from '../context/PresentationContext'

const Sidebar = styled.aside`
  position:fixed;left:12px;top:72px;bottom:72px;width:220px;background:rgba(255,255,255,0.96);border-radius:12px;padding:12px;box-shadow:0 12px 40px rgba(2,6,23,0.06);overflow:auto;z-index:60;
  @media(max-width:900px){display:none}
`
const Thumb = styled.div`padding:8px;border-radius:8px;margin-bottom:8px;cursor:pointer;display:flex;gap:8px;align-items:center;transition:background 160ms; &:hover{background:rgba(6,182,212,0.04)}`
const Dot = styled.div`width:10px;height:10px;border-radius:50%;background:${p=>p.active? p.theme.primary : '#e2e8f0'}`

export default function ThumbnailsSidebar(){
  const { goTo, current, thumbnailsVisible, slides } = useContext(PresentationContext)

  if(!thumbnailsVisible) return null

  const source = slides || slidesStatic

  return (
    <Sidebar aria-hidden={false}>
      {source.map(s=> (
        <Thumb key={s.id} onClick={()=>goTo(s.id)}>
          <Dot active={s.id === current} />
          <div>
            <div style={{fontWeight:700}}>{s.id}. {s.title}</div>
            <div style={{fontSize:12,color:'#6b7280'}}>{s.subtitle || s.note || ''}</div>
          </div>
        </Thumb>
      ))}
    </Sidebar>
  )
}
