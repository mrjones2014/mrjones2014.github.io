const isProd = process.env.NODE_ENV === "production";

const withMDX = require("@next/mdx")({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

module.exports = withMDX({
  assetPrefix: isProd
    ? "https://cdn.statically.io/gh/mrjones2014/mrjones2014.github.io/gh-pages/"
    : "",
  distDir: "dist",
});
