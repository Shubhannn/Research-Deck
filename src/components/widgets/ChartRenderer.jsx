import React from 'react'
import { Bar, Pie } from 'react-chartjs-2'
import { Chart, ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js'

Chart.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend)

export default function ChartRenderer({ data }){
  // choose pie if labels length <=3 else bar
  const isPie = data.labels && data.labels.length <= 3
  if(isPie) return <Pie data={data} />
  return <Bar data={data} />
}
