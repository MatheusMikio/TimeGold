import FormSection from '../FormSection/FormSection';
import FormField from '../FormField/FormField';
import { FiCreditCard, FiLock } from 'react-icons/fi';
import styles from './CardPaymentSection.module.css';

export default function CardPaymentSection() {
    return (
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
    );
}
