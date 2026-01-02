import FormSection from '../FormSection/FormSection';
import FormField from '../FormField/FormField';
import WeeklyHours from '../WeeklyHours/WeeklyHours';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';
import styles from './LocationSection.module.css';

export default function LocationSection() {
    return (
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
    );
}
