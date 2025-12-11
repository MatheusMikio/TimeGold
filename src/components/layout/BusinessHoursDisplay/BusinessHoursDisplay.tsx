import styles from './BusinessHoursDisplay.module.css';
import { FiClock } from 'react-icons/fi';

interface DaySchedule {
    isOpen: boolean;
    openTime: string;
    closeTime: string;
}

interface WorkingHours {
    monday: DaySchedule;
    tuesday: DaySchedule;
    wednesday: DaySchedule;
    thursday: DaySchedule;
    friday: DaySchedule;
    saturday: DaySchedule;
    sunday: DaySchedule;
}

interface BusinessHoursDisplayProps {
    workingHours: WorkingHours;
}

export default function BusinessHoursDisplay({ workingHours }: BusinessHoursDisplayProps) {
    const days = [
        { key: 'monday', label: 'Segunda' },
        { key: 'tuesday', label: 'Terça' },
        { key: 'wednesday', label: 'Quarta' },
        { key: 'thursday', label: 'Quinta' },
        { key: 'friday', label: 'Sexta' },
        { key: 'saturday', label: 'Sábado' },
        { key: 'sunday', label: 'Domingo' },
    ];

    const formatTime = (time: string) => {
        if (!time) return '';
        return time;
    };

    const isOpenNow = () => {
        const now = new Date();
        const currentDay = now.getDay();
        const currentTime = now.getHours() * 60 + now.getMinutes(); 
        
        const dayKeys = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
        const todayKey = dayKeys[currentDay] as keyof WorkingHours;
        const todaySchedule = workingHours[todayKey];

        if (!todaySchedule?.isOpen) return false;

        const [openHour, openMin] = todaySchedule.openTime.split(':').map(Number);
        const [closeHour, closeMin] = todaySchedule.closeTime.split(':').map(Number);
        
        const openTime = openHour * 60 + openMin;
        const closeTime = closeHour * 60 + closeMin;

        return currentTime >= openTime && currentTime <= closeTime;
    };

    const openStatus = isOpenNow();

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <FiClock className={styles.icon} />
                <h3>Horário de Funcionamento</h3>
                <span className={`${styles.status} ${openStatus ? styles.open : styles.closed}`}>
                    {openStatus ? '● Aberto agora' : '● Fechado'}
                </span>
            </div>
            
            <div className={styles.schedule}>
                {days.map(({ key, label }) => {
                    const schedule = workingHours[key as keyof WorkingHours];
                    return (
                        <div key={key} className={styles.day}>
                            <span className={styles.dayLabel}>{label}</span>
                            {schedule?.isOpen ? (
                                <span className={styles.hours}>
                                    {formatTime(schedule.openTime)} - {formatTime(schedule.closeTime)}
                                </span>
                            ) : (
                                <span className={styles.closed}>Fechado</span>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
