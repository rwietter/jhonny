import { type ReactNode } from "react"
import useDevice from "../../hooks/useDevice"

import { Bubble } from "../Bubble"
import { HeadComponent } from "../Head"
import { Header } from "../Header"

type Props = {
  children: ReactNode
}

export const Layout = ({ children }: Props) => {
  const { isMobile } = useDevice()
  const BubleMouse = !isMobile ? <Bubble /> : <span />
  return (
    <>
      <HeadComponent />
      {BubleMouse}
      <Header />
      <main>
        {children}
      </main>
    </>
  )
}
