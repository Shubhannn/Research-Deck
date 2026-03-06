import React, { useContext } from 'react'
import styled from 'styled-components'
import { PresentationContext } from '../context/PresentationContext'

const BarWrap = styled.div`
  position:fixed;left:0;right:0;bottom:14px;height:12px;padding:6px 24px;box-sizing:border-box;pointer-events:none;
`
const Bar = styled.div`
  height:6px;background:rgba(0,0,0,0.08);border-radius:6px;overflow:hidden;pointer-events:auto;
`
const Fill = styled.div`
  height:100%;background:linear-gradient(90deg, ${p => p.theme.primary} 0%, ${p => p.theme.accent} 100%);
  transition:width 300ms ease;
`
export default function ProgressBar(){
  const { current, total } = useContext(PresentationContext)
  const pct = Math.round((current/total)*100)

  return (
    <BarWrap>
      <Bar>
        <Fill style={{width:`${pct}%`}} />
      </Bar>
    </BarWrap>
  )
}
