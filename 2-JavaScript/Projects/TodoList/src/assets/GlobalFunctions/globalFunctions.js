function equalsDates (date1, date2) {
    return date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
};

function inSameWeek(date1, date2) {
    const firstDayOfWeek = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate() - date1.getDay());
    const lastDayOfWeek = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate() - date1.getDay() + 6);
    return date2 >= firstDayOfWeek && date2 <= lastDayOfWeek;
};

export { equalsDates, inSameWeek };