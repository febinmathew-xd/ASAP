export const convertTo12HourFormat = (time24) => {
  let [hours, minutes] = time24.split(":");
  let period = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12; // Convert hours to 12-hour format

  return `${hours}:${minutes} ${period}`;
};
