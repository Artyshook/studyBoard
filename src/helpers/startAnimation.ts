import { AnimationControls } from 'framer-motion'
import { useEffect } from 'react'

const animationOptions = {
  y: 0,
  transition: {
    duration: 1,
    type: 'spring',
    bounce: 0.2,
  },
}

export const useStartAnimation = (condition: boolean, animation: AnimationControls) => {
  useEffect(() => {
    if (condition) {
      animation.start(animationOptions)
    } else {
      animation.start({ y: '100vw' })
    }
  }, [condition])
}
