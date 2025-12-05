type InputProps = {
    type: string
    placeholder?: string
    customClass?: string
}


export default function Input({type, placeholder, customClass}:InputProps){
    return(
        <input type={type} placeholder={placeholder} className={customClass}/>
    )
}