const withReactSvg = require("next-react-svg");
const path = require("path");

module.exports = withReactSvg({
  include: path.resolve(
    __dirname,
    "node_modules/@fortawesome/fontawesome-free/svgs/"
  ),
  webpack(config, options) {
    return config;
  },
});
