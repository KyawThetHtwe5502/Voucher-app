import { ReactNode } from "react"

type props = {
    children : ReactNode,
    className?: string
}
const Container = ({children,className}:props) => {
  return (
    <div className={`w-full  mx-auto ${className}`}>
        {children}
    </div>
  )
}

export default Container