import { type ReactNode } from "react"
import { AnimatedMouse } from "../animated-mouse"
import { Footer } from "../footer"
import { HeadComponent } from "../head"
import { Header } from "../header"

type Props = {
  children: ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <HeadComponent />
      <AnimatedMouse />
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}