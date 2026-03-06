import React, { useContext } from 'react'
import { Routes, Route, Navigate, useParams } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import { PresentationContext } from './context/PresentationContext'
import Navigation from './components/Navigation'
import ProgressBar from './components/ProgressBar'
import ThumbnailsSidebar from './components/ThumbnailsSidebar'
import PresenterNotes from './components/PresenterNotes'
import TitleSlide from './components/SlideContent/TitleSlide'
import WhatIsResearch from './components/SlideContent/WhatIsResearch'
import Importance from './components/SlideContent/Importance'
import MarkdownSlide from './components/MarkdownSlide'
import StepsOverview from './components/SlideContent/StepsOverview'
import Step1 from './components/SlideContent/Step1'
import Step2 from './components/SlideContent/Step2'
import Steps3and4 from './components/SlideContent/Steps3and4'
import Steps5and6 from './components/SlideContent/Steps5and6'
import Steps7and8 from './components/SlideContent/Steps7and8'
import Steps9and10 from './components/SlideContent/Steps9and10'
import TypesMethodology from './components/SlideContent/TypesMethodology'
import KeyConsiderations from './components/SlideContent/KeyConsiderations'
import Challenges from './components/SlideContent/Challenges'
import Conclusion from './components/SlideContent/Conclusion'
import { themeLight, themeDark } from './styles/theme'

const AppShell = styled.div`
  display:flex;flex-direction:column;height:100vh;width:100%;align-items:center;justify-content:flex-start;
  background: ${p => p.theme.background};
  color: ${p => p.theme.text};
`

function SlideRoute() {
  const { id } = useParams()
  const slideId = parseInt(id || '1', 10)

  const compMap = {
    1: <TitleSlide />,
    2: <WhatIsResearch />,
    3: <Importance />,
    4: <StepsOverview />,
    5: <MarkdownSlide />,
    6: <MarkdownSlide />,
    7: <Steps3and4 />,
    8: <Steps5and6 />,
    9: <Steps7and8 />,
    10: <Steps9and10 />,
    11: <TypesMethodology />,
    12: <KeyConsiderations />,
    13: <Challenges />,
    14: <Conclusion />
  }

  return compMap[slideId] || <Navigate to="/slide/1" replace />
}

export default function App(){
  const { theme } = useContext(PresentationContext)

  return (
    <ThemeProvider theme={theme === 'dark' ? themeDark : themeLight}>
      <AppShell id="app-shell">
        <Navigation />
        <ThumbnailsSidebar />
        <PresenterNotes />
        <Routes>
          <Route path="/" element={<Navigate to="/slide/1" replace />} />
          <Route path="/slide/:id" element={<SlideRoute />} />
        </Routes>
        <ProgressBar />
      </AppShell>
    </ThemeProvider>
  )
}
