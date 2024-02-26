import { Schedule, ScheduleDays } from "../../components/business/ScheduleDisplay/ScheduleDisplay.tsx";

export const DESKTOP_MIN_WIDTH = 1200;
export const MOBILE_MAX_WIDTH = 768;

export const DESKTOP_SIDE_MARGINS = 64;
export const TABLET_SIDE_MARGINS = 48;
export const MOBILE_SIDE_MARGINS = 20;

export const SCHEDULE_1: Schedule = {
    startDay: ScheduleDays.MONDAY,
    endDay: ScheduleDays.FRIDAY,
    startTime: 8,
    endTime: 16
}

export const SCHEDULE_2: Schedule = {
    startDay: ScheduleDays.SATURDAY,
    endDay: ScheduleDays.SUNDAY,
    startTime: 8,
    endTime: 23
}

export enum Section {
    HOME = 'home',
    CONTACT = 'contact',
    ABOUT = 'about',
    MENU = 'menu',
    RESERVATIONS = 'reservations',
    NAV = 'nav'
}