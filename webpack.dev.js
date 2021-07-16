const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        // Change your configuration file to tell the dev server where to look for files:
        contentBase: "./dist",
        hot: true,
    },
});
