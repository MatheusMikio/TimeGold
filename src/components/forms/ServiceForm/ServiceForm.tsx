import { FiPlus, FiX } from 'react-icons/fi';
import FormField from '../FormField/FormField';
import ButtonComponent from '../../layout/Button/ButtonComponent';
import styles from './ServiceForm.module.css';

interface ServiceFormProps {
    serviceCount: number;
    onAddService: () => void;
    onRemoveService: (index: number) => void;
}

export default function ServiceForm({
    serviceCount,
    onAddService,
    onRemoveService
}: ServiceFormProps) {
    return (
        <div className={styles.servicesList}>
            {Array.from({ length: serviceCount }, (_, index) => (
                <div key={index} className={styles.serviceItem}>
                    {serviceCount > 1 && (
                        <button 
                            type="button"
                            className={styles.removeServiceBtn}
                            onClick={() => onRemoveService(index)}
                        >
                            <FiX />
                        </button>
                    )}
                    <div className={styles.serviceFields}>
                        <FormField
                            label="Nome do Serviço"
                            name={`services[${index}].name`}
                            placeholder="Ex: Corte de Cabelo"
                        />
                        
                        <div className={styles.serviceRow}>
                            <FormField
                                label="Duração"
                                name={`services[${index}].duration`}
                                placeholder="Ex: 30min"
                            />
                            
                            <FormField
                                label="Preço (R$)"
                                name={`services[${index}].price`}
                                placeholder="50.00"
                            />
                        </div>
                    </div>
                </div>
            ))}

            <ButtonComponent 
                type="button" 
                customClass={styles.addServiceBtn}
                onClick={onAddService}
            >
                <FiPlus /> Adicionar Serviço
            </ButtonComponent>
        </div>
    );
}