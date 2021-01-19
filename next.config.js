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
const formatCurrentDate = () => {
  const now = new Date(Date.now());
  return `${monthNames[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;
};

module.exports = withMDX({
  distDir: "dist",
  env: {
    NEXT_PUBLIC_LAST_UPDATED_DATE: formatCurrentDate(),
  },
});
