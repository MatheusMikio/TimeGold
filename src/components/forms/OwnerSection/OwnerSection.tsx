import FormSection from '../FormSection/FormSection';
import FormField from '../FormField/FormField';
import { FiUser } from 'react-icons/fi';

export default function OwnerSection() {
    return (
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
    );
}