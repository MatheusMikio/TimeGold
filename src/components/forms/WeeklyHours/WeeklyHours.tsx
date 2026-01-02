import { useState } from 'react';
import { FiClock, FiX } from 'react-icons/fi';
import styles from './WeeklyHours.module.css';

interface DaySchedule {
    day: string;
    dayLabel: string;
    isOpen: boolean;
    openTime: string;
    closeTime: string;
}

interface WeeklyHoursProps {
    onChange?: (schedule: DaySchedule[]) => void;
}

export default function WeeklyHours({ onChange }: WeeklyHoursProps) {
    const [schedule, setSchedule] = useState<DaySchedule[]>([
        { day: 'monday', dayLabel: 'Segunda', isOpen: true, openTime: '08:00', closeTime: '18:00' },
        { day: 'tuesday', dayLabel: 'Terça', isOpen: true, openTime: '08:00', closeTime: '18:00' },
        { day: 'wednesday', dayLabel: 'Quarta', isOpen: true, openTime: '08:00', closeTime: '18:00' },
        { day: 'thursday', dayLabel: 'Quinta', isOpen: true, openTime: '08:00', closeTime: '18:00' },
        { day: 'friday', dayLabel: 'Sexta', isOpen: true, openTime: '08:00', closeTime: '18:00' },
        { day: 'saturday', dayLabel: 'Sábado', isOpen: false, openTime: '08:00', closeTime: '14:00' },
        { day: 'sunday', dayLabel: 'Domingo', isOpen: false, openTime: '08:00', closeTime: '14:00' },
    ]);

    const handleToggleDay = (index: number) => {
        const newSchedule = [...schedule];
        newSchedule[index].isOpen = !newSchedule[index].isOpen;
        setSchedule(newSchedule);
        onChange?.(newSchedule);
    };

    const handleTimeChange = (index: number, field: 'openTime' | 'closeTime', value: string) => {
        const newSchedule = [...schedule];
        newSchedule[index][field] = value;
        setSchedule(newSchedule);
        onChange?.(newSchedule);
    };

    return (
        <div className={styles.weeklyHours}>
            {schedule.map((day, index) => (
                <div 
                    key={day.day} 
                    className={`${styles.dayRow} ${day.isOpen ? styles.open : styles.closed}`}
                >
                    <div className={styles.dayHeader}>
                        <div className={styles.dayToggle}>
                            <input
                                type="checkbox"
                                id={`day-${day.day}`}
                                checked={day.isOpen}
                                onChange={() => handleToggleDay(index)}
                                className={styles.toggleInput}
                            />
                            <label htmlFor={`day-${day.day}`} className={styles.toggleLabel}>
                                <span className={styles.toggleSwitch}></span>
                            </label>
                        </div>
                        <span className={styles.dayName}>{day.dayLabel}</span>
                    </div>

                    {day.isOpen ? (
                        <div className={styles.timeControls}>
                            <div className={styles.timeGroup}>
                                <div className={styles.timeInputWrapper}>
                                    <FiClock className={styles.clockIcon} />
                                    <input
                                        type="time"
                                        value={day.openTime}
                                        onChange={(e) => handleTimeChange(index, 'openTime', e.target.value)}
                                        className={styles.timeInput}
                                        name={`workingHours[${day.day}].openTime`}
                                    />
                                </div>
                                <span className={styles.timeSeparator}>—</span>
                                <div className={styles.timeInputWrapper}>
                                    <FiClock className={styles.clockIcon} />
                                    <input
                                        type="time"
                                        value={day.closeTime}
                                        onChange={(e) => handleTimeChange(index, 'closeTime', e.target.value)}
                                        className={styles.timeInput}
                                        name={`workingHours[${day.day}].closeTime`}
                                    />
                                </div>
                            </div>
                            <input
                                type="hidden"
                                name={`workingHours[${day.day}].isOpen`}
                                value="true"
                            />
                        </div>
                    ) : (
                        <div className={styles.closedBadge}>
                            <FiX className={styles.closedIcon} />
                            <span>Fechado</span>
                            <input
                                type="hidden"
                                name={`workingHours[${day.day}].isOpen`}
                                value="false"
                            />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
