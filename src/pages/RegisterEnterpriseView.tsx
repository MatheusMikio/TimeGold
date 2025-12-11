import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './RegisterEnterprise.module.css';
import FormSection from '../components/forms/FormSection/FormSection';
import FormField from '../components/forms/FormField/FormField';
import ServiceForm from '../components/forms/ServiceForm/ServiceForm';
import WeeklyHours from '../components/forms/WeeklyHours/WeeklyHours';
import ImageUpload from '../components/layout/ImageUpload/ImageUpload';
import ButtonComponent from '../components/layout/Button/ButtonComponent';
import { 
    FiArrowLeft, 
    FiFileText, 
    FiMapPin, 
    FiPhone, 
    FiMail, 
    FiClock,
    FiCreditCard,
    FiLock,
    FiUser,
    FiCheckSquare
} from 'react-icons/fi';

export default function RegisterEnterpriseView() {
    const navigate = useNavigate();
    const [serviceCount, setServiceCount] = useState(1);
    const [acceptTerms, setAcceptTerms] = useState(false);
    const [acceptPayment, setAcceptPayment] = useState(false);

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
        setServiceCount(prev => prev + 1);
    };

    const removeService = (_index: number) => {
        if (serviceCount > 1) {
            setServiceCount(prev => prev - 1);
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

        for (let i = 0; i < serviceCount; i++) {
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
        }
        
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
                    <FormSection
                        title="Informações Básicas"
                        description="Dados principais da sua empresa"
                        icon={<FiFileText />}
                    >
                        <FormField
                            label="Nome da Empresa"
                            name="name"
                            placeholder="Ex: Studio Bella Hair"
                            required
                        />

                        <FormField
                            label="CNPJ"
                            name="cnpj"
                            placeholder="123.456.789-10"
                            required
                        />

                        <FormField
                            label="Categoria"
                            name="category"
                            variant="select"
                            options={categories}
                            placeholder="Selecione uma categoria"
                            required
                        />

                        <FormField
                            label="Descrição"
                            name="description"
                            variant="textarea"
                            placeholder="Descreva sua empresa e os serviços oferecidos..."
                            maxLength={500}
                            hint="Máximo de 500 caracteres"
                        />

                        <div className={styles.field}>
                            <label className={styles.label}>Logo da Empresa</label>
                            <ImageUpload
                                id="logo-upload"
                                name="logo"
                                label="Escolher Logo"
                                variant="logo"
                            />
                        </div>

                        <div className={styles.field}>
                            <label className={styles.label}>Banner da Empresa</label>
                            <ImageUpload
                                id="banner-upload"
                                name="banner"
                                label="Escolher Banner"
                                variant="banner"
                            />
                        </div>
                    </FormSection>

                    <FormSection
                        title="Responsável Legal"
                        description="Dados do proprietário ou responsável legal da empresa"
                        icon={<FiUser />}
                    >
                        <FormField
                            label="Nome Completo do Responsável"
                            name="ownerName"
                            placeholder="Nome completo do proprietário"
                            icon={<FiUser />}
                            required
                        />

                        <FormField
                            label="CPF do Responsável"
                            name="ownerCpf"
                            placeholder="000.000.000-00"
                            required
                        />
                    </FormSection>

                    <FormSection
                        title="Contato e Localização"
                        description="Como os clientes podem te encontrar"
                        icon={<FiMapPin />}
                    >
                        <FormField
                            label="CEP"
                            name="zipCode"
                            placeholder="00000-000"
                            required
                        />

                        <div className={styles.fieldRow}>
                            <FormField
                                label="Rua"
                                name="street"
                                placeholder="Nome da rua"
                                required
                            />

                            <FormField
                                label="Número"
                                name="number"
                                placeholder="123"
                                required
                            />
                        </div>

                        <FormField
                            label="Complemento"
                            name="complement"
                            placeholder="Apto, Sala, Bloco (opcional)"
                        />

                        <div className={styles.fieldRow}>
                            <FormField
                                label="Cidade"
                                name="city"
                                placeholder="Nome da cidade"
                                required
                            />

                            <FormField
                                label="Estado"
                                name="state"
                                placeholder="UF"
                                required
                            />
                        </div>

                        <FormField
                            label="País"
                            name="country"
                            placeholder="Brasil"
                            required
                        />

                        <FormField
                            label="Telefone"
                            name="phone"
                            type="tel"
                            placeholder="(00) 00000-0000"
                            icon={<FiPhone />}
                            required
                        />

                        <FormField
                            label="Email"
                            name="email"
                            type="email"
                            placeholder="contato@empresa.com"
                            icon={<FiMail />}
                            required
                        />

                        <div className={styles.field}>
                            <label className={styles.label}>
                                <FiClock style={{ marginRight: '8px' }} />
                                Horário de Funcionamento
                            </label>
                            <WeeklyHours />
                        </div>
                    </FormSection>

                    <FormSection
                        title="Serviços Oferecidos"
                        description="Adicione os serviços que sua empresa oferece"
                        icon={<FiFileText />}
                    >
                        <ServiceForm
                            serviceCount={serviceCount}
                            onAddService={addService}
                            onRemoveService={removeService}
                        />
                    </FormSection>

                    <FormSection
                        title="Pagamento da Mensalidade - Cartão de Crédito"
                        description="Cadastre um cartão de crédito para cobrança automática da assinatura mensal"
                        icon={<FiCreditCard />}
                    >
                        <div className={styles.requiredBadge}>
                            <span>Obrigatório - Apenas Cartão de Crédito</span>
                        </div>

                        <div className={styles.paymentNotice}>
                            <FiLock />
                            <span>Seus dados são criptografados e processados com segurança. A cobrança é automática todo mês.</span>
                        </div>

                        <FormField
                            label="Nome no Cartão de Crédito"
                            name="cardholderName"
                            placeholder="Nome como está no cartão"
                            required
                        />

                        <FormField
                            label="Número do Cartão"
                            name="cardNumber"
                            placeholder="0000 0000 0000 0000"
                            icon={<FiCreditCard />}
                            required
                        />

                        <div className={styles.cardRow}>
                            <FormField
                                label="Validade"
                                name="cardExpiry"
                                placeholder="MM/AA"
                                required
                            />

                            <FormField
                                label="CVV"
                                name="cardCvv"
                                type="password"
                                placeholder="123"
                                hint="Código de 3 dígitos no verso"
                                required
                            />
                        </div>
                    </FormSection>

                    <FormSection
                        title="Recebimento via PIX"
                        description="Informe sua chave PIX para receber pagamentos dos clientes"
                        icon={<FiCreditCard />}
                    >
                        <div className={styles.optionalBadge}>
                            <span>Opcional</span>
                        </div>

                        <FormField
                            label="Tipo de Chave PIX"
                            name="pixKeyType"
                            variant="select"
                            options={pixKeyTypes.map(t => t.label)}
                            placeholder="Selecione o tipo de chave"
                        />

                        <FormField
                            label="Chave PIX"
                            name="pixKey"
                            placeholder="Digite sua chave PIX"
                            hint="Esta chave será usada para receber os pagamentos dos agendamentos"
                        />
                    </FormSection>

                    <FormSection
                        title="Termos e Condições"
                        description="Leia e aceite os termos para continuar"
                        icon={<FiCheckSquare />}
                    >
                        <div className={styles.termsSection}>
                            <label className={styles.checkboxLabel}>
                                <input
                                    type="checkbox"
                                    name="acceptTerms"
                                    checked={acceptTerms}
                                    onChange={(e) => setAcceptTerms(e.target.checked)}
                                    required
                                />
                                <span>
                                    Li e aceito os{' '}
                                    <a href="/terms" target="_blank" rel="noopener noreferrer">Termos de Uso</a>
                                    {' '}e a{' '}
                                    <a href="/privacy" target="_blank" rel="noopener noreferrer">Política de Privacidade</a>
                                </span>
                            </label>

                            <label className={styles.checkboxLabel}>
                                <input
                                    type="checkbox"
                                    name="acceptPayment"
                                    checked={acceptPayment}
                                    onChange={(e) => setAcceptPayment(e.target.checked)}
                                    required
                                />
                                <span>
                                    Autorizo a cobrança mensal automática no cartão de crédito cadastrado.
                                </span>
                            </label>
                        </div>
                    </FormSection>

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
