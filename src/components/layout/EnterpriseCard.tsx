import styles from "./EnterpriseCard.module.css";
import { LuHeart, LuStar, LuMapPin, LuClock } from "react-icons/lu";

type EnterpriseCardProps = {
    name: string;
    category: string;
    image: string;
    rating: number;
    reviewCount: number;
    distance: string;
    duration: string;
    price: string;
    isOpen: boolean;
    isFeatured?: boolean;
};

export default function EnterpriseCard({
    name,
    category,
    image,
    rating,
    reviewCount,
    distance,
    duration,
    price,
    isOpen,
    isFeatured = false
}: EnterpriseCardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                <img src={image} alt={name} />
                {isFeatured && <span className={styles.badge}>Destaque</span>}
                <button className={styles.favoriteBtn}>
                    <LuHeart />
                </button>
            </div>
            <div className={styles.content}>
                <div className={styles.header}>
                    <h3 className={styles.name}>{name}</h3>
                    <div className={styles.rating}>
                        <LuStar />
                        {rating.toFixed(1)}
                        <span>({reviewCount})</span>
                    </div>
                </div>
                <p className={styles.category}>{category}</p>
                <div className={styles.info}>
                    <div className={styles.infoItem}>
                        <LuMapPin />
                        {distance}
                    </div>
                    <div className={styles.infoItem}>
                        <LuClock />
                        {duration}
                    </div>
                </div>
                <div className={styles.footer}>
                    <div className={styles.price}>
                        <span className={styles.label}>A partir de</span>
                        <span className={styles.value}>{price}</span>
                    </div>
                    <div className={styles.actions}>
                        <span className={`${styles.statusBadge} ${isOpen ? styles.open : styles.closed}`}>
                            {isOpen ? "Aberto" : "Fechado"}
                        </span>
                        <button className={styles.scheduleBtn}>Agendar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
