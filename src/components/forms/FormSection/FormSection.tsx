import type { ReactNode } from 'react';
import styles from './FormSection.module.css';

interface FormSectionProps {
    title: string;
    description: string;
    icon: ReactNode;
    children: ReactNode;
}

export default function FormSection({ title, description, icon, children }: FormSectionProps) {
    return (
        <section className={styles.sectionCard}>
            <div className={styles.sectionHeader}>
                <div className={styles.sectionIcon}>
                    {icon}
                </div>
                <h2 className={styles.sectionTitle}>{title}</h2>
            </div>
            <p className={styles.sectionDescription}>{description}</p>
            
            <div className={styles.fieldGroup}>
                {children}
            </div>
        </section>
    );
}