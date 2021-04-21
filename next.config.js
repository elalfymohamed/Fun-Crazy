const path = require("path");

module.exports = {
  future: {
    webpack5: true,
  },
  sassOptions: {
    includePath: [path.join(__dirname, `styles`)],
  },
};
