import { useEffect, useContext } from 'react'
import { PresentationContext } from '../context/PresentationContext'

export default function useKeyboardNavigation(){
  const { next, prev, goTo } = useContext(PresentationContext)

  useEffect(()=>{
    function handler(e){
      if(e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') { e.preventDefault(); next() }
      if(e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); prev() }
      if(e.key === 'Home') { e.preventDefault(); goTo(1) }
      if(e.key === 'End') { e.preventDefault(); goTo(14) }
    }
    window.addEventListener('keydown', handler)
    return ()=> window.removeEventListener('keydown', handler)
  }, [next, prev, goTo])
}
