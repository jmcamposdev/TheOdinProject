/**
 * Return the day of the week for the given date.
 * E.g. Monday, Tuesday, etc.
 * @param {Date} date
 * @return {string}
 */
function getDay(date) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[date.getDay()];
}

export {getDay};
