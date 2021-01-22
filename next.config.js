const withMDX = require("@next/mdx")({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

const getCurrentDateInEST = () => {
  const offset = -5; // EST timezone offset -5
  const dateInEST = new Date(new Date().getTime() + offset * 3600 * 1000)
    .toUTCString()
    .replace(/ GMT$/, "");
  return new Date(dateInEST);
};

const formatTimeOfDay = (date) => {
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

const formatCurrentDate = () => {
  const now = getCurrentDateInEST();
  console.log(now);
  return `${
    now.getMonth() + 1
  }/${now.getDate()}/${now
    .getFullYear()
    .toString()
    .substr(-2)} ${formatTimeOfDay(now)} EST`;
};

const Config = {
  distDir: "dist",
  env: {
    NEXT_PUBLIC_LAST_UPDATED_DATE: formatCurrentDate(),
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

module.exports = withMDX(Config);
