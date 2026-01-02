import FormSection from '../FormSection/FormSection';
import FormField from '../FormField/FormField';
import { FiCreditCard } from 'react-icons/fi';
import styles from './PixPaymentSection.module.css';

interface PixPaymentSectionProps {
    pixKeyTypes: { value: string; label: string }[];
}

export default function PixPaymentSection({ pixKeyTypes }: PixPaymentSectionProps) {
    return (
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
    );
}