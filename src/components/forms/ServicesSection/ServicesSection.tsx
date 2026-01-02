import FormSection from '../FormSection/FormSection';
import ServiceForm from '../ServiceForm/ServiceForm';
import { FiFileText } from 'react-icons/fi';

interface ServicesSectionProps {
    services: number[];
    onAddService: () => void;
    onRemoveService: (index: number) => void;
}

export default function ServicesSection({ services, onAddService, onRemoveService }: ServicesSectionProps) {
    return (
        <FormSection
            title="Serviços Oferecidos"
            description="Adicione os serviços que sua empresa oferece"
            icon={<FiFileText />}
        >
            <ServiceForm
                services={services}
                onAddService={onAddService}
                onRemoveService={onRemoveService}
            />
        </FormSection>
    );
}
