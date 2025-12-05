import { useState } from "react";
import styles from "./CategoryFilter.module.css";
import { 
    LuSparkles, 
    LuScissors, 
    LuHeart, 
    LuDumbbell, 
    LuStethoscope, 
    LuCar, 
    LuWrench, 
    LuGraduationCap 
} from "react-icons/lu";

const categories = [
    { id: "all", name: "Todos", icon: LuSparkles },
    { id: "beauty", name: "Beleza", icon: LuScissors },
    { id: "health", name: "Saúde", icon: LuHeart },
    { id: "fitness", name: "Fitness", icon: LuDumbbell },
    { id: "medical", name: "Médico", icon: LuStethoscope },
    { id: "automotive", name: "Automotivo", icon: LuCar },
    { id: "services", name: "Serviços", icon: LuWrench },
    { id: "education", name: "Educação", icon: LuGraduationCap },
];

export default function CategoryFilter() {
    const [activeCategory, setActiveCategory] = useState("all");

    return (
        <div className={styles.categoryFilter}>
            {categories.map((category) => {
                const Icon = category.icon;
                return (
                    <button
                        key={category.id}
                        className={`${styles.categoryBtn} ${activeCategory === category.id ? styles.active : ""}`}
                        onClick={() => setActiveCategory(category.id)}
                    >
                        <Icon />
                        {category.name}
                    </button>
                );
            })}
        </div>
    );
}
