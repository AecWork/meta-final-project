import React from 'react'
import './ScheduleDisplay.css'

export enum ScheduleDays {
    MONDAY = 'MONDAY',
    TUESDAY = 'TUESDAY',
    WEDNESDAY = 'WEDNESDAY',
    THURSDAY = 'THURSDAY',
    FRIDAY = 'FRIDAY',
    SATURDAY = 'SATURDAY',
    SUNDAY = 'SUNDAY'
}

type Hour =  0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23;

export interface Schedule {
    startDay: ScheduleDays,
    endDay: ScheduleDays,
    startTime: Hour,
    endTime: Hour
}

const formatHour = (hour: Hour): string => hour.toString().length < 2 ? `0${hour}h` : `${hour}h`;

const ScheduleDisplay: React.FC<Schedule> = ({ startDay, endDay, startTime, endTime }) => {
    return (
        <div className='schedule-display-container'>
            <span className='days text-XL uppercase'>{`${startDay} - ${endDay}`}</span>
            <span className='hours'>{`${formatHour(startTime)} - ${formatHour(endTime)}`}</span>
        </div>
    )
}

export default ScheduleDisplay