import styles from "./NearbyEnterprises.module.css";
import EnterpriseCard from "./EnterpriseCard";

const enterprises = [
    {
        id: 1,
        name: "Studio Bella Hair",
        category: "Salão de Beleza",
        image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=300&fit=crop",
        rating: 4.9,
        reviewCount: 324,
        distance: "1.2 km",
        duration: "30-60 min",
        price: "R$ 45",
        isOpen: true,
        isFeatured: true
    },
    {
        id: 2,
        name: "Academia FitPro",
        category: "Academia & Fitness",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop",
        rating: 4.7,
        reviewCount: 512,
        distance: "800 m",
        duration: "60 min",
        price: "R$ 89/mês",
        isOpen: true,
        isFeatured: false
    },
    {
        id: 3,
        name: "Clínica Saúde Total",
        category: "Clínica Médica",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop",
        rating: 4.8,
        reviewCount: 189,
        distance: "2.5 km",
        duration: "20-40 min",
        price: "R$ 150",
        isOpen: true,
        isFeatured: false
    },
    {
        id: 4,
        name: "Barbearia Classic",
        category: "Barbearia",
        image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=400&h=300&fit=crop",
        rating: 4.9,
        reviewCount: 456,
        distance: "500 m",
        duration: "30 min",
        price: "R$ 35",
        isOpen: false,
        isFeatured: true
    },
    {
        id: 5,
        name: "Spa Relaxar",
        category: "Spa & Bem-estar",
        image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=300&fit=crop",
        rating: 4.6,
        reviewCount: 98,
        distance: "3.1 km",
        duration: "90 min",
        price: "R$ 180",
        isOpen: true,
        isFeatured: false
    },
    {
        id: 6,
        name: "Auto Center Express",
        category: "Serviços Automotivos",
        image: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=400&h=300&fit=crop",
        rating: 4.5,
        reviewCount: 234,
        distance: "4.2 km",
        duration: "60-120 min",
        price: "R$ 80",
        isOpen: true,
        isFeatured: false
    }
];

export default function NearbyEnterprises() {
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <div className={styles.titleWrapper}>
                    <h2 className={styles.title}>Empresas próximas</h2>
                    <p className={styles.subtitle}>Encontre os melhores serviços perto de você</p>
                </div>
                <a className={styles.viewAllLink}>Ver todos</a>
            </div>
            <div className={styles.grid}>
                {enterprises.map((enterprise) => (
                    <EnterpriseCard
                        key={enterprise.id}
                        id={enterprise.id}
                        name={enterprise.name}
                        category={enterprise.category}
                        image={enterprise.image}
                        rating={enterprise.rating}
                        reviewCount={enterprise.reviewCount}
                        distance={enterprise.distance}
                        duration={enterprise.duration}
                        price={enterprise.price}
                        isOpen={enterprise.isOpen}
                        isFeatured={enterprise.isFeatured}
                    />
                ))}
            </div>
        </section>
    );
}
