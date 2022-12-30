import { useMotionValue, useSpring, motion } from "framer-motion";
import { useEffect } from "react";
import { useViewPortSize } from "../../hooks/useViewPortSize";

export const AnimatedMouse = () => {
  const cursorX = useMotionValue(-200)
  const cursorY = useMotionValue(-200)
  const { isMobile } = useViewPortSize()


  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX + 8)
      cursorY.set(e.clientY + 8)
    }
    window.addEventListener('mousemove', moveCursor)
    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }
  }, [cursorX, cursorY])

  return (
    <>
      {!isMobile && (
        <motion.div
          className="cursor"
          style={{
            translateX: cursorXSpring,
            translateY: cursorYSpring,
          }}
        />
      )}
    </>

  )
}