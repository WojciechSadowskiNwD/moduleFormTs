import type { ReactNode } from "react"

type ButtonProps = {
    children: ReactNode;
}

export default function CustomButton({children}: ButtonProps){
    return <button>{children}</button>
}