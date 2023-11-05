import { ICountdown } from '@customTypes/types';

// get countdowns from local storage
export const getCountdowns = (): ICountdown[] => {
    if (typeof window !== 'undefined') {
        const countdowns = window.localStorage.getItem("countdowns");
        return countdowns !== null ? JSON.parse(countdowns) : [];
    }
    return [];
};

// save countdowns to local storage
export const saveCountdowns = (countdowns: ICountdown[]): void => {
    window.localStorage.setItem("countdowns", JSON.stringify(countdowns));
};

// add a new countdown to local storage
export const addCoundown = (countdown: ICountdown) => {
    const countdowns = getCountdowns();
    countdowns.push(countdown);
    saveCountdowns(countdowns);
};

// save every countdown except the one with the given id
export const deleteCountdown = (id: string) => {
    const countdowns = getCountdowns();
    const filteredCountdowns = countdowns.filter((countdown) => countdown.id !== id);
    saveCountdowns(filteredCountdowns);
}

// get the number of days left until the given date
export const getCountdownDays = (date: string): number => {
    let today = new Date();
    const difference = new Date(date).getTime() - today.getTime();
    const diffInDays = Math.ceil(difference / (1000 * 3600 * 24));
    return diffInDays;
}

// order countdowns by the number of days left
export const orderCountdowns = (countdowns: ICountdown[]): ICountdown[] => {
    return countdowns.sort((a, b) => {
        const aDays = getCountdownDays(a.date.toString());
        const bDays = getCountdownDays(b.date.toString());
        return aDays - bDays;
    });
}