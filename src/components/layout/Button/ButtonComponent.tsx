import type { ReactNode } from 'react'
import styles from "./Button.module.css"

type ButtonComponentProps = {
    text?: string;
    children?: ReactNode;
    type?: "button" | "submit" | "reset";
    customClass?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function ButtonComponent(
    { text, children, type = "button", customClass = "", onClick }: ButtonComponentProps
) {
    return (
        <button type={type} onClick={onClick} className={`${styles.btn} ${customClass}`}>
            {children || text}
        </button>
    )
}