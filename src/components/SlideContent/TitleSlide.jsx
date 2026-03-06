import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Slide from '../Slide'

const Card = styled.div`
  width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg, rgba(6,182,212,0.08), rgba(14,165,233,0.06));border-radius:20px;padding:40px;box-sizing:border-box;flex-direction:column;text-align:center;
`
const Title = styled.h1`
  font-size:48px;margin:0;color:${p=>p.theme.primaryDark}
`
const Subtitle = styled.p`margin:12px 0 24px;color:${p=>p.theme.muted};font-size:18px`
const Meta = styled.div`color:${p=>p.theme.muted};font-size:14px`

export default function TitleSlide(){
  return (
    <Slide>
      <Card as={motion.div} initial={{opacity:0, scale:0.98}} animate={{opacity:1, scale:1}} transition={{duration:0.6}}>
        <Title>Research Process</Title>
        <Subtitle>A Systematic Approach to Research Methodology</Subtitle>
        <Meta>Author: Shubhan Cholin • 25SSDS170015@msruas.ac.in • March 6, 2026</Meta>
      </Card>
    </Slide>
  )
}
