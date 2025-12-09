import logo from "../../../../public/logo.png"
import { LuUser } from "react-icons/lu";
import styles from "./NavbarComponent.module.css"
import LinkButton from "../LinkButton/LinkButton";
import ButtonComponent from "../Button/ButtonComponent";
import { useLocation, useNavigate } from "react-router-dom";

export default function NavbarComponent(){
    const location = useLocation();
    const navigate = useNavigate();
    const isAdmin = location.pathname === "/admin";

    const handleCadastrarEmpresa = () => {
        navigate('/cadastrar-empresa');
    };

    return(
        <nav className={styles.navBar}>
            <div className={styles.enterpriseName}>
                <img src={logo} alt="Logo TimeGold"/>
                <h1>Time<span>Gold</span></h1> 
            </div>
            <div className={styles.links}>
                <LinkButton to="/" text="Cliente" customClass={!isAdmin ? styles.linkselected : undefined}/>
                <LinkButton to="/admin" text="Admin" customClass={isAdmin ? styles.linkselected : undefined}/>
            </div>
            <div className={styles.user}>
                <button className={styles.cadastrarBtn} onClick={handleCadastrarEmpresa}>
                    Cadastrar Empresa
                </button>
                <LuUser/>
                <ButtonComponent text="Entrar" type="button"/>
            </div>
        </nav>
    )
}