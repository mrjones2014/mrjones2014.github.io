const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

/**
 * Get the current date in Easter Standard Time
 * @returns {Date}
 */
const getCurrentDateInEST = (): Date => {
  const offset = -5; // EST timezone offset is GMT -5
  const dateInEST = new Date(new Date().getTime() + offset * 3600 * 1000)
    .toUTCString()
    .replace(/ GMT$/, "");
  return new Date(dateInEST);
};

/**
 * Format a date with the time of date,
 * for example, 10:30 AM
 * @param {Date} date the date to format
 */
const formatTimeOfDay = (date: Date) => {
  let hours = date.getHours();
  let minutes = `${date.getMinutes()}`;
  if (minutes.length < 2) {
    minutes = `0${minutes}`;
  }
  const amOrPm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours === 0 ? 12 : hours; // 0 should be 12 AM
  return `${hours}:${minutes} ${amOrPm}`;
};

/**
 * Format a date to human-readable form with full specificity.
 * @param {Date} date the date to format
 */
const formatDate = (date: Date) => {
  return `${
    monthNames[date.getMonth()]
  } ${date.getDate()}, ${date.getFullYear()} at ${formatTimeOfDay(date)} EST`;
};

export const DateUtils = {
  getCurrentDateInEST,
  formatTimeOfDay,
  formatDate,
};
