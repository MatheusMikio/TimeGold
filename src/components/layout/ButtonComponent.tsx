import styles from "./Button.module.css"

type ButtonComponentProps = {
    text: string;
    type?: "button" | "submit" | "reset";
    customClass?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function ButtonComponent(
    {text, type = "button", customClass = "", onClick}: ButtonComponentProps
){
    return(
        <button type={type} onClick={onClick} className={`${styles.btn} ${customClass}`}>
            {text}
        </button>
    )
}