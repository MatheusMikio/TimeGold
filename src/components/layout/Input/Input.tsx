import type { InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    customClass?: string
}

export default function Input({ customClass, ...props }: InputProps) {
    return (
        <input className={customClass} {...props} />
    )
}