import ButtonComponent from "../components/layout/ButtonComponent";
import CategoryFilter from "../components/layout/CategoryFilter";
import NearbyEnterprises from "../components/layout/NearbyEnterprises";
import styles from "./Home.module.css"
import { LuSearch, LuMapPin } from "react-icons/lu";

export default function HomeView(){
    return(
        <>
            <div className={styles.background}>
                <div className={styles.alert}>
                    <span className={styles.icon}></span>
                    Agende serviços com os melhores profissionais
                </div>
                <div className={styles.title}>
                    Seu tempo vale <span className={styles.gold}>ouro</span>
                </div>
                <div className={styles.subtitle}>
                    Encontre e agende serviços de beleza, saúde, fitness e muito mais. Tudo em um só lugar, na palma da sua mão.
                </div>
                <div className={styles.searchBar}>
                    <div className={styles.inputWrapper}>
                        <LuSearch className={styles.inputIcon}/>
                        <input type="text" placeholder="Buscar serviços ou empresas..."/>
                    </div>
                    <div className={styles.inputWrapper}>
                        <LuMapPin className={styles.inputIcon}/>
                        <input type="text" placeholder="Localização"/>
                    </div>
                    <ButtonComponent text="Buscar"/>
                </div>
            </div>
            <CategoryFilter />
            <NearbyEnterprises />
        </>
    )
}