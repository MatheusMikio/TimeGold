import FormSection from '../FormSection/FormSection';
import { FiCheckSquare } from 'react-icons/fi';
import styles from './TermsSection.module.css';

interface TermsSectionProps {
    acceptTerms: boolean;
    acceptPayment: boolean;
    onTermsChange: (value: boolean) => void;
    onPaymentChange: (value: boolean) => void;
}

export default function TermsSection({ 
    acceptTerms, 
    acceptPayment, 
    onTermsChange, 
    onPaymentChange 
}: TermsSectionProps) {
    return (
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
                        onChange={(e) => onTermsChange(e.target.checked)}
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
                        onChange={(e) => onPaymentChange(e.target.checked)}
                        required
                    />
                    <span>
                        Autorizo a cobrança mensal automática no cartão de crédito cadastrado.
                    </span>
                </label>
            </div>
        </FormSection>
    );
}