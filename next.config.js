const withMDX = require("@next/mdx")({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

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

const formatTimeOfDay = (date) => {
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const amOrPm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours === 0 ? 12 : hours; // 0 should be 12 AM
  return `${hours}:${minutes} ${amOrPm}`;
};

const formatCurrentDate = () => {
  const now = new Date(Date.now());
  return `${
    monthNames[now.getMonth()]
  } ${now.getDate()}, ${now.getFullYear()} at ${formatTimeOfDay(now)}`;
};

module.exports = withMDX({
  distDir: "dist",
  env: {
    NEXT_PUBLIC_LAST_UPDATED_DATE: formatCurrentDate(),
  },
});
