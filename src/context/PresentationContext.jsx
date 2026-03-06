import React, { createContext, useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import slidesStatic from '../data/slidesData'

export const PresentationContext = createContext({})

export function PresentationProvider({ children }){
  const navigate = useNavigate()
  const location = useLocation()

  const [slides] = useState(slidesStatic)
  const total = slides.length
  const getIdFromPath = (path)=>{
    const m = path.match(/\/slide\/(\d+)/)
    return m ? parseInt(m[1],10) : 1
  }

  const [current, setCurrent] = useState(getIdFromPath(location.pathname))
  const [thumbnailsVisible, setThumbnailsVisible] = useState(false)
  const [presenterMode, setPresenterMode] = useState(false)
  const [autoAdvance, setAutoAdvance] = useState(false)
  const [autoInterval, setAutoInterval] = useState(3000)
  const [theme, setTheme] = useState('light')

  useEffect(()=>{
    const id = getIdFromPath(location.pathname)
    setCurrent(id)
  }, [location.pathname])

  const goTo = (id)=>{
    const to = Math.max(1, Math.min(total, Number(id) || 1))
    navigate(`/slide/${to}`)
    setCurrent(to)
  }

  const next = ()=> goTo(current + 1)
  const prev = ()=> goTo(current - 1)

  const toggleThumbnails = ()=> setThumbnailsVisible(v=>!v)
  const togglePresenter = ()=> setPresenterMode(v=>!v)
  const toggleAutoAdvance = ()=> setAutoAdvance(v=>!v)
  const setAutoIntervalSafe = (v)=> setAutoInterval(v)
  const toggleTheme = ()=> setTheme(t=> t === 'dark' ? 'light' : 'dark')

  useEffect(()=>{
    if(!autoAdvance) return
    const id = setInterval(()=>{
      setCurrent(c=>{
        const nextId = c >= total ? 1 : c + 1
        navigate(`/slide/${nextId}`)
        return nextId
      })
    }, autoInterval)
    return ()=> clearInterval(id)
  }, [autoAdvance, autoInterval, navigate, total])

  const notes = slides.reduce((acc,s)=>{ acc[s.id]=s.note||''; return acc }, {})

  return (
    <PresentationContext.Provider value={{
      slides, current, total, next, prev, goTo,
      thumbnailsVisible, toggleThumbnails,
      presenterMode, togglePresenter,
      autoAdvance, toggleAutoAdvance, autoInterval, setAutoInterval: setAutoIntervalSafe,
      notes, theme, toggleTheme
    }}>
      {children}
    </PresentationContext.Provider>
  )
}

export default PresentationContext
