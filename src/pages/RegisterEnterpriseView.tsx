import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './RegisterEnterprise.module.css';
import RegisterSidebar from '../components/forms/RegisterSidebar/RegisterSidebar';
import type { SectionKey, Section } from '../components/forms/RegisterSidebar/RegisterSidebar';
import BasicInfoSection from '../components/forms/BasicInfoSection/BasicInfoSection';
import OwnerSection from '../components/forms/OwnerSection/OwnerSection';
import LocationSection from '../components/forms/LocationSection/LocationSection';
import ServicesSection from '../components/forms/ServicesSection/ServicesSection';
import CardPaymentSection from '../components/forms/CardPaymentSection/CardPaymentSection';
import PixPaymentSection from '../components/forms/PixPaymentSection/PixPaymentSection';
import TermsSection from '../components/forms/TermsSection/TermsSection';
import { 
    FiArrowLeft, 
    FiFileText, 
    FiMapPin,
    FiCreditCard,
    FiUser,
    FiCheckSquare,
    FiChevronLeft,
    FiChevronRight
} from 'react-icons/fi';

export default function RegisterEnterpriseView() {
    const navigate = useNavigate();
    const [services, setServices] = useState([0]);
    const [acceptTerms, setAcceptTerms] = useState(false);
    const [acceptPayment, setAcceptPayment] = useState(false);
    const [currentSection, setCurrentSection] = useState<SectionKey>('basic');

    const sections: Section[] = [
        { key: 'basic', title: 'Informações Básicas', icon: <FiFileText /> },
        { key: 'owner', title: 'Responsável Legal', icon: <FiUser /> },
        { key: 'location', title: 'Contato e Localização', icon: <FiMapPin /> },
        { key: 'services', title: 'Serviços Oferecidos', icon: <FiFileText /> },
        { key: 'cardPayment', title: 'Pagamento - Cartão', icon: <FiCreditCard /> },
        { key: 'pixPayment', title: 'Recebimento via PIX', icon: <FiCreditCard /> },
        { key: 'terms', title: 'Termos e Condições', icon: <FiCheckSquare /> }
    ];

    const currentSectionIndex = sections.findIndex(s => s.key === currentSection);
    const isFirstSection = currentSectionIndex === 0;
    const isLastSection = currentSectionIndex === sections.length - 1;

    const categories = [
        'Beleza',
        'Saúde',
        'Fitness',
        'Alimentação',
        'Educação',
        'Serviços Gerais',
        'Pet',
        'Automotivo',
        'Tecnologia',
        'Outros'
    ];

    const pixKeyTypes = [
        { value: 'cpf', label: 'CPF' },
        { value: 'cnpj', label: 'CNPJ' },
        { value: 'email', label: 'Email' },
        { value: 'phone', label: 'Telefone' },
        { value: 'random', label: 'Chave Aleatória' }
    ];

    const addService = () => {
        setServices(prev => [...prev, Math.max(...prev) + 1]);
    };

    const removeService = (index: number) => {
        if (services.length > 1) {
            setServices(prev => prev.filter((_, i) => i !== index));
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const formData = new FormData(e.currentTarget);
        
        const enterpriseData = {
            name: formData.get('name') as string,
            cnpj: formData.get('cnpj') as string,
            category: formData.get('category') as string,
            description: formData.get('description') as string,

            // Responsável Legal
            ownerName: formData.get('ownerName') as string,
            ownerCpf: formData.get('ownerCpf') as string,

            // Endereço
            street: formData.get('street') as string,
            number: formData.get('number') as string,
            complement: formData.get('complement') as string || '',
            zipCode: formData.get('zipCode') as string,
            city: formData.get('city') as string,
            state: formData.get('state') as string,
            country: formData.get('country') as string,
            phone: formData.get('phone') as string,
            email: formData.get('email') as string,
            workingHours: {
                monday: {
                    isOpen: formData.get('workingHours[monday].isOpen') === 'true',
                    openTime: formData.get('workingHours[monday].openTime') as string || '',
                    closeTime: formData.get('workingHours[monday].closeTime') as string || '',
                },
                tuesday: {
                    isOpen: formData.get('workingHours[tuesday].isOpen') === 'true',
                    openTime: formData.get('workingHours[tuesday].openTime') as string || '',
                    closeTime: formData.get('workingHours[tuesday].closeTime') as string || '',
                },
                wednesday: {
                    isOpen: formData.get('workingHours[wednesday].isOpen') === 'true',
                    openTime: formData.get('workingHours[wednesday].openTime') as string || '',
                    closeTime: formData.get('workingHours[wednesday].closeTime') as string || '',
                },
                thursday: {
                    isOpen: formData.get('workingHours[thursday].isOpen') === 'true',
                    openTime: formData.get('workingHours[thursday].openTime') as string || '',
                    closeTime: formData.get('workingHours[thursday].closeTime') as string || '',
                },
                friday: {
                    isOpen: formData.get('workingHours[friday].isOpen') === 'true',
                    openTime: formData.get('workingHours[friday].openTime') as string || '',
                    closeTime: formData.get('workingHours[friday].closeTime') as string || '',
                },
                saturday: {
                    isOpen: formData.get('workingHours[saturday].isOpen') === 'true',
                    openTime: formData.get('workingHours[saturday].openTime') as string || '',
                    closeTime: formData.get('workingHours[saturday].closeTime') as string || '',
                },
                sunday: {
                    isOpen: formData.get('workingHours[sunday].isOpen') === 'true',
                    openTime: formData.get('workingHours[sunday].openTime') as string || '',
                    closeTime: formData.get('workingHours[sunday].closeTime') as string || '',
                }
            },
            logo: formData.get('logo') as File | null,
            banner: formData.get('banner') as File | null,

            // Dados de pagamento - Cartão (obrigatório)
            cardholderName: formData.get('cardholderName') as string,
            cardNumber: formData.get('cardNumber') as string,
            cardExpiry: formData.get('cardExpiry') as string,
            cardCvv: formData.get('cardCvv') as string,

            // Dados de pagamento - PIX (opcional)
            pixKeyType: formData.get('pixKeyType') as string || '',
            pixKey: formData.get('pixKey') as string || '',

            // Aceite de termos
            acceptTerms: acceptTerms,
            acceptPayment: acceptPayment,
            services: [] as { 
                name: string;
                duration: string;
                price: string 
            }[]
        };

        services.forEach((_, i) => {
            const serviceName = formData.get(`services[${i}].name`) as string;
            const serviceDuration = formData.get(`services[${i}].duration`) as string;
            const servicePrice = formData.get(`services[${i}].price`) as string;
            
            if (serviceName?.trim()) {
                enterpriseData.services.push({
                    name: serviceName,
                    duration: serviceDuration || '',
                    price: servicePrice || ''
                });
            }
        });
        
        console.log('Dados da empresa:', enterpriseData);
        navigate('/');
    };

    const handleCancel = () => {
        navigate('/');
    };

    const goToNextSection = () => {
        if (!isLastSection) {
            setCurrentSection(sections[currentSectionIndex + 1].key);
        }
    };

    const goToPreviousSection = () => {
        if (!isFirstSection) {
            setCurrentSection(sections[currentSectionIndex - 1].key);
        }
    };

    const renderSection = () => {
        switch (currentSection) {
            case 'basic':
                return <BasicInfoSection categories={categories} />;
            case 'owner':
                return <OwnerSection />;
            case 'location':
                return <LocationSection />;
            case 'services':
                return (
                    <ServicesSection
                        services={services}
                        onAddService={addService}
                        onRemoveService={removeService}
                    />
                );
            case 'cardPayment':
                return <CardPaymentSection />;
            case 'pixPayment':
                return <PixPaymentSection pixKeyTypes={pixKeyTypes} />;
            case 'terms':
                return (
                    <TermsSection
                        acceptTerms={acceptTerms}
                        acceptPayment={acceptPayment}
                        onTermsChange={setAcceptTerms}
                        onPaymentChange={setAcceptPayment}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <div className={styles.registerContainer}>
            <header className={styles.header}>
                <button className={styles.backButton} onClick={handleCancel}>
                    <FiArrowLeft />
                </button>
                <div className={styles.headerInfo}>
                    <h1>Cadastrar Empresa</h1>
                    <p>Preencha os dados da sua empresa</p>
                </div>
            </header>

            <div className={styles.contentWrapper}>
                <RegisterSidebar
                    sections={sections}
                    currentSection={currentSection}
                    onSectionChange={setCurrentSection}
                />

                <div className={styles.formContainer}>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        {renderSection()}

                        <div className={styles.formNavigation}>
                            <button 
                                type="button" 
                                className={styles.navBtn}
                                onClick={goToPreviousSection}
                                disabled={isFirstSection}
                            >
                                <FiChevronLeft /> Anterior
                            </button>

                            {!isLastSection ? (
                                <button 
                                    type="button" 
                                    className={styles.navBtnPrimary}
                                    onClick={goToNextSection}
                                >
                                    Próximo <FiChevronRight />
                                </button>
                            ) : (
                                <button 
                                    type="submit" 
                                    className={styles.navBtnPrimary}
                                >
                                    Cadastrar Empresa
                                </button>
                            )}
                        </div>

                        <div className={styles.formActions}>
                            <button 
                                type="button" 
                                className={styles.cancelBtn}
                                onClick={handleCancel}
                            >
                                Cancelar Cadastro
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}