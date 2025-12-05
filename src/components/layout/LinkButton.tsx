import { Link } from "react-router-dom"
import styles from "./LinkButton.module.css"

type LinkButtonProps = {
    to: string,
    text: string
    customClass?: string
}

export default function LinkButton({to, text, customClass}: LinkButtonProps){ 
    return(
        <Link to={to} className={`${styles.link} ${customClass || ''}`}>{text}</Link>
    )
}
