const DateUtils = require("./utils/date-utils");

const withMDX = require("@next/mdx")({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

const now = DateUtils.getCurrentDateInEST();
const formattedDate = DateUtils.formatDate(now);

const Config = {
  distDir: "dist",
  env: {
    NEXT_PUBLIC_LAST_UPDATED_DATE: formattedDate,
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
