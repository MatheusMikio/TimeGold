import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './RegisterEnterprise.module.css';
import Input from '../components/layout/Input/Input';
import ButtonComponent from '../components/layout/Button/ButtonComponent';
import ImageUpload from '../components/layout/ImageUpload/ImageUpload';
import { 
    FiArrowLeft, 
    FiFileText, 
    FiMapPin, 
    FiPhone, 
    FiMail, 
    FiClock,
    FiPlus,
    FiX
} from 'react-icons/fi';

interface Service {
    id: number;
    name: string;
    duration: string;
    price: string;
}

export default function RegisterEnterpriseView() {
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        description: '',
        logo: null as File | null,
        banner: null as File | null,
        address: '',
        phone: '',
        email: '',
        workingHours: ''
    });

    const [services, setServices] = useState<Service[]>([
        { id: 1, name: '', duration: '', price: '' }
    ]);

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

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileChange = (field: 'logo' | 'banner', file: File | null) => {
        setFormData(prev => ({
            ...prev,
            [field]: file
        }));
    };

    const handleServiceChange = (id: number, field: string, value: string) => {
        setServices(prev => prev.map(service => 
            service.id === id ? { ...service, [field]: value } : service
        ));
    };

    const addService = () => {
        const newId = Math.max(...services.map(s => s.id), 0) + 1;
        setServices(prev => [...prev, { id: newId, name: '', duration: '', price: '' }]);
    };

    const removeService = (id: number) => {
        if (services.length > 1) {
            setServices(prev => prev.filter(service => service.id !== id));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        const enterpriseData = {
            ...formData,
            services: services.filter(s => s.name.trim() !== '')
        };
        
        console.log('Dados da empresa:', enterpriseData);
        navigate('/');
    };

    const handleCancel = () => {
        navigate('/');
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

            <div className={styles.formContainer}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <section className={styles.sectionCard}>
                        <div className={styles.sectionHeader}>
                            <div className={styles.sectionIcon}>
                                <FiFileText />
                            </div>
                            <h2 className={styles.sectionTitle}>Informações Básicas</h2>
                        </div>
                        <p className={styles.sectionDescription}>Dados principais da sua empresa</p>
                        
                        <div className={styles.fieldGroup}>
                            <div className={styles.field}>
                                <label className={styles.label}>
                                    Nome da Empresa <span className={styles.required}>*</span>
                                </label>
                                <Input 
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    customClass={styles.input}
                                    placeholder="Ex: Studio Bella Hair"
                                    required
                                />
                            </div>

                            <div className={styles.field}>
                                <label className={styles.label}>
                                    Categoria <span className={styles.required}>*</span>
                                </label>
                                <select 
                                    name="category"
                                    value={formData.category}
                                    onChange={handleInputChange}
                                    className={styles.select}
                                    required
                                >
                                    <option value="">Selecione uma categoria</option>
                                    {categories.map(cat => (
                                        <option key={cat} value={cat}>{cat}</option>
                                    ))}
                                </select>
                            </div>

                            <div className={styles.field}>
                                <label className={styles.label}>Descrição</label>
                                <textarea 
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    className={`${styles.input} ${styles.textarea}`}
                                    placeholder="Descreva sua empresa e os serviços oferecidos..."
                                    maxLength={500}
                                />
                                <span className={styles.hint}>Máximo de 500 caracteres</span>
                            </div>

                            <div className={styles.field}>
                                <label className={styles.label}>Logo da Empresa</label>
                                <ImageUpload
                                    id="logo-upload"
                                    label="Escolher Logo"
                                    variant="logo"
                                    onFileChange={(file) => handleFileChange('logo', file)}
                                />
                            </div>

                            <div className={styles.field}>
                                <label className={styles.label}>Banner da Empresa</label>
                                <ImageUpload
                                    id="banner-upload"
                                    label="Escolher Banner"
                                    variant="banner"
                                    onFileChange={(file) => handleFileChange('banner', file)}
                                />
                            </div>
                        </div>
                    </section>

                    <section className={styles.sectionCard}>
                        <div className={styles.sectionHeader}>
                            <div className={styles.sectionIcon}>
                                <FiMapPin />
                            </div>
                            <h2 className={styles.sectionTitle}>Contato e Localização</h2>
                        </div>
                        <p className={styles.sectionDescription}>Como os clientes podem te encontrar</p>
                        
                        <div className={styles.fieldGroup}>
                            <div className={styles.field}>
                                <label className={styles.label}>
                                    Endereço Completo <span className={styles.required}>*</span>
                                </label>
                                <Input 
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    customClass={styles.input}
                                    placeholder="Rua, número, bairro - Cidade/UF"
                                    required
                                />
                            </div>

                            <div className={styles.field}>
                                <label className={styles.labelWithIcon}>
                                    <FiPhone />
                                    Telefone <span className={styles.required}>*</span>
                                </label>
                                <Input 
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    customClass={styles.input}
                                    placeholder="(00) 00000-0000"
                                    required
                                />
                            </div>

                            <div className={styles.field}>
                                <label className={styles.labelWithIcon}>
                                    <FiMail />
                                    Email <span className={styles.required}>*</span>
                                </label>
                                <Input 
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    customClass={styles.input}
                                    placeholder="contato@empresa.com"
                                    required
                                />
                            </div>

                            <div className={styles.field}>
                                <label className={styles.labelWithIcon}>
                                    <FiClock />
                                    Horário de Funcionamento
                                </label>
                                <Input 
                                    type="text"
                                    name="workingHours"
                                    value={formData.workingHours}
                                    onChange={handleInputChange}
                                    customClass={styles.input}
                                    placeholder="Seg-Sex: 09:00-18:00, Sáb: 09:00-13:00"
                                />
                            </div>
                        </div>
                    </section>

                    <section className={styles.sectionCard}>
                        <div className={styles.sectionHeader}>
                            <div className={styles.sectionIcon}>
                                <FiFileText />
                            </div>
                            <h2 className={styles.sectionTitle}>Serviços Oferecidos</h2>
                        </div>
                        <p className={styles.sectionDescription}>Adicione os serviços que sua empresa oferece</p>
                        
                        <div className={styles.servicesList}>
                            {services.map((service) => (
                                <div key={service.id} className={styles.serviceItem}>
                                    {services.length > 1 && (
                                        <button 
                                            type="button"
                                            className={styles.removeServiceBtn}
                                            onClick={() => removeService(service.id)}
                                        >
                                            <FiX />
                                        </button>
                                    )}
                                    <div className={styles.serviceFields}>
                                        <div className={styles.field}>
                                            <label className={styles.label}>Nome do Serviço</label>
                                            <Input 
                                                type="text"
                                                value={service.name}
                                                onChange={(e) => handleServiceChange(service.id, 'name', e.target.value)}
                                                customClass={styles.input}
                                                placeholder="Ex: Corte de Cabelo"
                                            />
                                        </div>
                                        <div className={styles.serviceRow}>
                                            <div className={styles.field}>
                                                <label className={styles.label}>Duração</label>
                                                <Input 
                                                    type="text"
                                                    value={service.duration}
                                                    onChange={(e) => handleServiceChange(service.id, 'duration', e.target.value)}
                                                    customClass={styles.input}
                                                    placeholder="Ex: 30min"
                                                />
                                            </div>
                                            <div className={styles.field}>
                                                <label className={styles.label}>Preço (R$)</label>
                                                <Input 
                                                    type="text"
                                                    value={service.price}
                                                    onChange={(e) => handleServiceChange(service.id, 'price', e.target.value)}
                                                    customClass={styles.input}
                                                    placeholder="50.00"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <ButtonComponent 
                                type="button" 
                                customClass={styles.addServiceBtn}
                                onClick={addService}
                            >
                                <FiPlus /> Adicionar Serviço
                            </ButtonComponent>
                        </div>
                    </section>

                    <div className={styles.formActions}>
                        <ButtonComponent 
                            type="button" 
                            customClass={styles.cancelBtn}
                            onClick={handleCancel}
                            text="Cancelar"
                        />
                        <ButtonComponent 
                            type="submit" 
                            customClass={styles.submitBtn}
                            text="Cadastrar Empresa"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}
