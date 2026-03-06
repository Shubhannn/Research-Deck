import { useMemo } from 'react'

export default function useSlideAnimation(){
  const variants = useMemo(()=>({
    enter: { opacity: 0, y: 20, scale: 0.98 },
    center: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: -20, scale: 0.98, transition: { duration: 0.3 } }
  }), [])

  return variants
}
