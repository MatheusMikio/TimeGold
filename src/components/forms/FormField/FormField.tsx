import type { ReactNode } from 'react';
import Input from '../../layout/Input/Input';
import styles from './FormField.module.css';

interface FormFieldProps {
    label: string;
    name: string;
    type?: string;
    defaultValue?: string;
    placeholder?: string;
    required?: boolean;
    icon?: ReactNode;
    error?: string;
    hint?: string;
    variant?: 'input' | 'textarea' | 'select';
    options?: string[];
    maxLength?: number;
    className?: string;
}

export default function FormField({
    label,
    name,
    type = 'text',
    defaultValue = '',
    placeholder,
    required = false,
    icon,
    error,
    hint,
    variant = 'input',
    options = [],
    maxLength,
    className
}: FormFieldProps) {
    const labelClass = icon ? styles.labelWithIcon : styles.label;
    const inputClass = `${styles.input} ${error ? styles.error : ''} ${className || ''}`;

    const renderInput = () => {
        switch (variant) {
            case 'textarea':
                return (
                    <textarea
                        name={name}
                        defaultValue={defaultValue}
                        className={`${inputClass} ${styles.textarea}`}
                        placeholder={placeholder}
                        required={required}
                        maxLength={maxLength}
                    />
                );
            
            case 'select':
                return (
                    <select
                        name={name}
                        defaultValue={defaultValue}
                        className={`${styles.select} ${error ? styles.error : ''}`}
                        required={required}
                    >
                        <option value="">{placeholder || 'Selecione uma opção'}</option>
                        {options.map(option => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                );
            
            default:
                return (
                    <Input
                        type={type}
                        name={name}
                        defaultValue={defaultValue}
                        customClass={inputClass}
                        placeholder={placeholder}
                        required={required}
                    />
                );
        }
    };

    return (
        <div className={styles.field}>
            <label className={labelClass}>
                {icon}
                {label} {required && <span className={styles.required}>*</span>}
            </label>
            {renderInput()}
            {error && <span className={styles.errorMessage}>{error}</span>}
            {hint && <span className={styles.hint}>{hint}</span>}
        </div>
    );
}