import React, { useContext } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import useSlideAnimation from '../hooks/useSlideAnimation'
import { PresentationContext } from '../context/PresentationContext'

const Frame = styled(motion.div)`
  width: 100%; max-width:1280px; height: calc(100vh - 120px); display:flex;align-items:center;justify-content:center;padding:48px;box-sizing:border-box;
  @media(max-width:900px){
    padding:20px;height:auto;align-items:flex-start;padding-bottom:120px;
  }
  @media(max-width:520px){
    padding:12px;
  }
`

export default function Slide({ children }){
  const variants = useSlideAnimation()
  const { current } = useContext(PresentationContext)

  return (
    <AnimatePresence mode="wait">
      <Frame key={current} variants={variants} initial="enter" animate="center" exit="exit">
        {children}
      </Frame>
    </AnimatePresence>
  )
}
