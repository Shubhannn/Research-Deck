import React, { useContext } from 'react'
import styled from 'styled-components'
import { FiSun, FiMoon } from 'react-icons/fi'
import { PresentationContext } from '../context/PresentationContext'
import { motion } from 'framer-motion'

const Btn = styled.button`
  display:flex;align-items:center;justify-content:center;width:44px;height:40px;border-radius:10px;border:0;background:transparent;cursor:pointer;color:inherit;padding:4px;
`
const IconWrap = styled(motion.div)`
  display:flex;align-items:center;justify-content:center;font-size:18px;line-height:1;transition:transform 300ms ease, color 300ms ease;
`

export default function ThemeToggle(){
  const { theme, toggleTheme } = useContext(PresentationContext)

  return (
    <Btn onClick={toggleTheme} aria-label="Toggle theme" title="Toggle theme">
      <IconWrap animate={{ rotate: theme === 'dark' ? 40 : 0, scale: theme === 'dark' ? 1.05 : 1 }}>
        {theme === 'dark' ? <FiSun color="#f59e0b"/> : <FiMoon color="#06b6d4"/>}
      </IconWrap>
    </Btn>
  )
}
