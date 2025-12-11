import { useState } from 'react';
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
        { day: 'monday', dayLabel: 'Segunda-feira', isOpen: true, openTime: '08:00', closeTime: '18:00' },
        { day: 'tuesday', dayLabel: 'Terça-feira', isOpen: true, openTime: '08:00', closeTime: '18:00' },
        { day: 'wednesday', dayLabel: 'Quarta-feira', isOpen: true, openTime: '08:00', closeTime: '18:00' },
        { day: 'thursday', dayLabel: 'Quinta-feira', isOpen: true, openTime: '08:00', closeTime: '18:00' },
        { day: 'friday', dayLabel: 'Sexta-feira', isOpen: true, openTime: '08:00', closeTime: '18:00' },
        { day: 'saturday', dayLabel: 'Sábado', isOpen: false, openTime: '08:00', closeTime: '18:00' },
        { day: 'sunday', dayLabel: 'Domingo', isOpen: false, openTime: '08:00', closeTime: '18:00' },
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
                <div key={day.day} className={styles.dayRow}>
                    <div className={styles.dayInfo}>
                        <label className={styles.checkbox}>
                            <input
                                type="checkbox"
                                checked={day.isOpen}
                                onChange={() => handleToggleDay(index)}
                            />
                            <span className={styles.dayLabel}>{day.dayLabel}</span>
                        </label>
                    </div>

                    {day.isOpen ? (
                        <div className={styles.timeInputs}>
                            <div className={styles.timeField}>
                                <label>Abertura</label>
                                <input
                                    type="time"
                                    value={day.openTime}
                                    onChange={(e) => handleTimeChange(index, 'openTime', e.target.value)}
                                    className={styles.timeInput}
                                    name={`workingHours[${day.day}].openTime`}
                                />
                            </div>
                            <span className={styles.separator}>às</span>
                            <div className={styles.timeField}>
                                <label>Fechamento</label>
                                <input
                                    type="time"
                                    value={day.closeTime}
                                    onChange={(e) => handleTimeChange(index, 'closeTime', e.target.value)}
                                    className={styles.timeInput}
                                    name={`workingHours[${day.day}].closeTime`}
                                />
                            </div>

                            <input
                                type="hidden"
                                name={`workingHours[${day.day}].isOpen`}
                                value="true"
                            />
                        </div>
                    ) : (
                        <div className={styles.closedLabel}>
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
