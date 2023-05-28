import { type ReactNode } from "react"
import useDevice from "../../hooks/useDevice"
import { Bubble } from "../Bubble"
import { Footer } from "../footer"
import { HeadComponent } from "../head"
import { Header } from "../header"

type Props = {
  children: ReactNode
}

export const Layout = ({ children }: Props) => {
  const { isMobile } = useDevice()
  return (
    <>
      <HeadComponent />
      {!isMobile ? <Bubble /> : null}
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}
