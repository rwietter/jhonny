import { type ReactNode } from "react"
import useDevice from "@hooks/useDevice"

import { Bubble } from "@components/Bubble"
import { HeadComponent } from "@components/Head"
import { Header } from "@components/Header"

type Props = {
  children: ReactNode
}

export const Layout = ({ children }: Props) => {
  const { isMobile } = useDevice()
  const BubbleMouse = !isMobile ? <Bubble /> : <span />
  return (
    <>
      <HeadComponent />
      {BubbleMouse}
      <Header />
      <main>{children}</main>
    </>
  );
}
