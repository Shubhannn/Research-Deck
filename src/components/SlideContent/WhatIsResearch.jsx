import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Slide from '../Slide'
import { FiBookOpen } from 'react-icons/fi'

const Layout = styled.div`display:flex;gap:36px;align-items:center;justify-content:center;width:100%`
const IconWrap = styled.div`font-size:64px;color:${p=>p.theme.primary}`
const Content = styled.div`max-width:760px`
const Title = styled.h2`margin:0 0 12px`;
const P = styled(motion.p)`color:${p=>p.theme.muted};line-height:1.6`;

export default function WhatIsResearch(){
  return (
    <Slide>
      <Layout>
        <IconWrap><FiBookOpen /></IconWrap>
        <Content>
          <Title>What is Research Process?</Title>
          <P initial={{opacity:0, y:10}} animate={{opacity:1,y:0}} transition={{delay:0.1}}>The research process is a structured sequence of steps used to investigate questions, build knowledge, and produce reliable, reproducible results.</P>
          <motion.ul initial="hidden" animate="visible" variants={{visible:{transition:{staggerChildren:0.12}}}}>
            {['Systematic','Empirical','Replicable','Objective'].map((k,i)=> (
              <motion.li key={k} initial={{opacity:0, x:-10}} animate={{opacity:1, x:0}} style={{color:'#475569',marginTop:10}}>{k}</motion.li>
            ))}
          </motion.ul>
        </Content>
      </Layout>
    </Slide>
  )
}
