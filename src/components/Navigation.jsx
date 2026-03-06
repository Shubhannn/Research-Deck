import React, { useContext } from 'react'
import styled from 'styled-components'
import { FiChevronLeft, FiChevronRight, FiMenu, FiMaximize, FiDownload, FiPlay, FiPause, FiFileText } from 'react-icons/fi'
import { PresentationContext } from '../context/PresentationContext'
import ThemeToggle from './ThemeToggle'
import useKeyboardNavigation from '../hooks/useKeyboardNavigation'

const Nav = styled.nav`
  width:100%;display:flex;align-items:center;justify-content:space-between;padding:12px 24px;box-sizing:border-box;
`
const Controls = styled.div`display:flex;gap:12px;align-items:center;`
const Button = styled.button`
  background:transparent;border:0;padding:8px;border-radius:8px;cursor:pointer;color:inherit;font-size:18px;
  &:hover{background:rgba(0,0,0,0.04)}
`

export default function Navigation(){
  const { current, next, prev, goTo, total, toggleThumbnails, thumbnailsVisible, autoAdvance, toggleAutoAdvance, togglePresenter, presenterMode } = useContext(PresentationContext)
  useKeyboardNavigation()

  const handlePrint = ()=> window.print()
  const handleFullscreen = ()=>{
    if(!document.fullscreenElement) document.documentElement.requestFullscreen()
    else document.exitFullscreen()
  }

  return (
    <Nav>
      <Controls>
        <Button aria-label="previous" onClick={prev}><FiChevronLeft /></Button>
        <Button aria-label="next" onClick={next}><FiChevronRight /></Button>
        <span style={{fontWeight:700}}>{current}/{total}</span>
        <Button onClick={toggleThumbnails} title="Toggle thumbnails"><FiMenu style={{opacity: thumbnailsVisible?1:0.8}}/></Button>
        <Button onClick={toggleAutoAdvance} title="Auto advance">
          {autoAdvance ? <FiPause /> : <FiPlay />}
        </Button>
        <Button onClick={togglePresenter} title="Presenter notes">
          <FiFileText style={{opacity: presenterMode?1:0.8}} />
        </Button>
      </Controls>

      <div style={{display:'flex',alignItems:'center',gap:12}}>
        <ThemeToggle />
        <Button onClick={handleFullscreen} title="Toggle fullscreen"><FiMaximize /></Button>
        <Button onClick={handlePrint} title="Print / Export PDF"><FiDownload /></Button>
      </div>
    </Nav>
  )
}
