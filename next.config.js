const path = require("path");
module.exports = {
  trailingSlash: false,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },

  images: {
    domains: ["res.cloudinary.com"],
  },
};
