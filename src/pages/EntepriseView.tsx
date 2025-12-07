import { useParams, useNavigate } from "react-router-dom";
import styles from "./Enteprise.module.css";
import { LuArrowLeft, LuHeart, LuShare2, LuStar, LuMapPin, LuPhone, LuClock } from "react-icons/lu";

type Service = {
    id: number;
    name: string;
    description: string;
    duration: string;
    price: number;
};

const mockEnterprise = {
    id: 1,
    name: "Studio Bella Hair",
    category: "Salão de Beleza",
    description: "O melhor salão de beleza da região, especializado em cortes modernos, coloração e tratamentos capilares.",
    bannerImage: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200",
    profileImage: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=200",
    rating: 4.9,
    reviewCount: 324,
    address: "Rua das Flores, 123 - Centro",
    phone: "(11) 99999-1234",
    duration: "30-60 min",
    isOpen: true,
    isFeatured: true,
    services: [
        {
            id: 1,
            name: "Corte Feminino",
            description: "Corte personalizado com lavagem e finalização",
            duration: "45 min",
            price: 65
        },
        {
            id: 2,
            name: "Corte + Escova",
            description: "Corte com escova modeladora inclusa",
            duration: "1h",
            price: 95
        },
        {
            id: 3,
            name: "Coloração Completa",
            description: "Coloração de raiz a pontas com produtos premium",
            duration: "2h",
            price: 180
        },
        {
            id: 4,
            name: "Mechas/Luzes",
            description: "Mechas ou luzes com técnica balayage",
            duration: "3h",
            price: 250
        },
        {
            id: 5,
            name: "Hidratação Profunda",
            description: "Tratamento intensivo para cabelos danificados",
            duration: "1h",
            price: 80
        },
        {
            id: 6,
            name: "Escova Progressiva",
            description: "Alisamento progressivo com duração de 3 meses",
            duration: "3h",
            price: 300
        }
    ]
};

export default function EntepriseView() {
    const { entepriseId } = useParams();
    const navigate = useNavigate();

    const enterprise = mockEnterprise;

    const minPrice = Math.min(...enterprise.services.map(s => s.price));

    const handleBack = () => {
        navigate(-1);
    };

    const handleSchedule = (service: Service) => {
        console.log("Agendar serviço:", service);
    };

    return (
        <div className={styles.container}>
            <div className={styles.bannerSection}>
                <img 
                    src={enterprise.bannerImage} 
                    alt={enterprise.name} 
                    className={styles.bannerImage}
                />
                <button className={styles.backButton} onClick={handleBack}>
                    <LuArrowLeft />
                </button>
                <div className={styles.bannerActions}>
                    <button className={styles.actionButton}>
                        <LuHeart />
                    </button>
                    <button className={styles.actionButton}>
                        <LuShare2 />
                    </button>
                </div>
            </div>

            <div className={styles.infoSection}>
                <div className={styles.profileInfo}>
                    <img 
                        src={enterprise.profileImage} 
                        alt={enterprise.name}
                        className={styles.profileImage}
                    />
                    <div className={styles.mainInfo}>
                        <div className={styles.badges}>
                            {enterprise.isFeatured && (
                                <span className={styles.featuredBadge}>Destaque</span>
                            )}
                            <span className={`${styles.statusBadge} ${enterprise.isOpen ? styles.open : styles.closed}`}>
                                {enterprise.isOpen ? "Aberto" : "Fechado"}
                            </span>
                        </div>
                        <h1 className={styles.enterpriseName}>{enterprise.name}</h1>
                        <p className={styles.category}>{enterprise.category}</p>
                        <p className={styles.description}>{enterprise.description}</p>
                        <div className={styles.contactInfo}>
                            <div className={styles.contactItem}>
                                <LuMapPin />
                                <span>{enterprise.address}</span>
                            </div>
                            <div className={styles.contactItem}>
                                <LuPhone />
                                <span>{enterprise.phone}</span>
                            </div>
                            <div className={styles.contactItem}>
                                <LuClock />
                                <span>{enterprise.duration}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.ratingBox}>
                    <LuStar className={styles.starIcon} />
                    <span className={styles.ratingValue}>{enterprise.rating.toFixed(1)}</span>
                    <span className={styles.reviewCount}>({enterprise.reviewCount})</span>
                </div>
            </div>

            <div className={styles.servicesSection}>
                <div className={styles.servicesHeader}>
                    <div className={styles.servicesTitle}>
                        <h2>Serviços disponíveis</h2>
                        <p>A partir de <span className={styles.priceHighlight}>R$ {minPrice}</span></p>
                    </div>
                    <span className={styles.servicesCount}>{enterprise.services.length} serviços</span>
                </div>

                <div className={styles.servicesList}>
                    {enterprise.services.map((service) => (
                        <div key={service.id} className={styles.serviceCard}>
                            <div className={styles.serviceInfo}>
                                <h3 className={styles.serviceName}>{service.name}</h3>
                                <p className={styles.serviceDescription}>{service.description}</p>
                                <div className={styles.serviceDuration}>
                                    <LuClock />
                                    <span>{service.duration}</span>
                                </div>
                            </div>
                            <div className={styles.serviceAction}>
                                <span className={styles.servicePrice}>R$ {service.price}</span>
                                <button 
                                    className={styles.scheduleButton}
                                    onClick={() => handleSchedule(service)}
                                >
                                    Agendar
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}