import { type ReactNode } from "react"
import { Bubble } from "../Bubble"
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
      <Bubble />
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}
