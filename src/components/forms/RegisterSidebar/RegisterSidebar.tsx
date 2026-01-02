import type { ReactNode } from 'react';
import styles from './RegisterSidebar.module.css';

export type SectionKey = 'basic' | 'owner' | 'location' | 'services' | 'cardPayment' | 'pixPayment' | 'terms';

export interface Section {
    key: SectionKey;
    title: string;
    icon: ReactNode;
}

interface RegisterSidebarProps {
    sections: Section[];
    currentSection: SectionKey;
    onSectionChange: (key: SectionKey) => void;
}

export default function RegisterSidebar({ sections, currentSection, onSectionChange }: RegisterSidebarProps) {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.sidebarContent}>
                <h2 className={styles.sidebarTitle}>Seções do Cadastro</h2>
                <nav className={styles.sectionNav}>
                    {sections.map((section, index) => (
                        <button
                            key={section.key}
                            className={`${styles.sectionNavItem} ${currentSection === section.key ? styles.active : ''}`}
                            onClick={() => onSectionChange(section.key)}
                            type="button"
                        >
                            <div className={styles.sectionNavIcon}>
                                {section.icon}
                            </div>
                            <div className={styles.sectionNavText}>
                                <span className={styles.sectionNavNumber}>{index + 1}</span>
                                <span className={styles.sectionNavTitle}>{section.title}</span>
                            </div>
                        </button>
                    ))}
                </nav>
            </div>
        </aside>
    );
}
