import FormSection from '../FormSection/FormSection';
import FormField from '../FormField/FormField';
import ImageUpload from '../../layout/ImageUpload/ImageUpload';
import { FiFileText } from 'react-icons/fi';
import styles from './BasicInfoSection.module.css';

interface BasicInfoSectionProps {
    categories: string[];
}

export default function BasicInfoSection({ categories }: BasicInfoSectionProps) {
    return (
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
    );
}