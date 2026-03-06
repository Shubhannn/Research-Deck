import React from 'react'
import Slide from '../Slide'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Cols = styled.div`display:flex;gap:24px;flex-wrap:wrap;align-items:flex-start;justify-content:center;width:100%`
const Box = styled.div`background:white;padding:18px;border-radius:12px;max-width:540px;box-shadow:0 8px 30px rgba(2,6,23,0.04)`

export default function Step1(){
  return (
    <Slide>
      <Cols>
        <Box>
          <h3>Identifying the Research Problem</h3>
          <motion.ul initial={{opacity:0}} animate={{opacity:1}} transition={{staggerChildren:0.08}}>
            <li>Clarity of scope</li>
            <li>Feasibility</li>
            <li>Relevance & significance</li>
            <li>Ethical considerations</li>
          </motion.ul>
        </Box>
        <Box>
          <h4>Example</h4>
          <p style={{color:'#64748b'}}>Investigating the impact of remote learning on undergraduate student engagement in STEM courses.</p>
        </Box>
      </Cols>
    </Slide>
  )
}
