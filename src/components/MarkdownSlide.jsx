import React, { useContext } from 'react'
import styled from 'styled-components'
import { PresentationContext } from '../context/PresentationContext'

const Wrap = styled.div`width:100%;max-width:900px;`;

export default function MarkdownSlide(){
	const { slides, current } = useContext(PresentationContext)
	const slide = (slides || []).find(s=>s.id === current) || {}

	return (
		<Wrap>
			<h2 style={{marginBottom:8}}>{slide.title}</h2>
			<div style={{whiteSpace:'pre-wrap',color:'#475569'}}>{slide.content}</div>
		</Wrap>
	)
}
