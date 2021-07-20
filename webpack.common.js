const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        index: ["./src/index.js", "./src/style.scss"],
    },
    output: {
        filename: "assets/js/[name].[contenthash].bundle.js",
        path: path.resolve(__dirname, "dist"),
        // * 就是先 clean output 的檔案
        clean: true,
        assetModuleFilename: "assets/images/[name][ext][query]",
    },
    optimization: {
        // usedExports: true,
        // * 除非有新的依賴檔，否則 `vendor.[hash].bundle.js` 將不會改變 hash，藉此達到 cache
        moduleIds: "deterministic",
        runtimeChunk: "single",
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all",
                },
            },
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "src/index.html",
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "assets/style/[name].css",
            chunkFilename: "[id].css",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                            sassOptions: {
                                outputStyle: "compressed",
                            },
                        },
                    },
                ],
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                type: "asset/resource",
            },
        ],
    },
};
