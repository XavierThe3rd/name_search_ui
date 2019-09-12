const path = require("path");
const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const modeConfiguration = env => require(`./build-utils/webpack.${env}`)(env);

module.exports = ({ mode } = { mode: "production" }) => {
    console.log(`mode is: ${mode}`);

    return webpackMerge(
        {
        resolve: {
            alias: {
                "TweenMax": path.resolve('node_modules', 'gsap/src/uncompressed/TweenMax.js'),
                "TimelineMax": path.resolve('node_modules', 'gsap/src/uncompressed/TimelineMax.js'),
                "ScrollMagic": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'),
                "animation.gsap": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
                "debug.addIndicators": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js')
            },
          },
            mode,
            entry: "./src/index.js",
            devServer: {
                hot: true,
                open: true,
                inline:false,
                port: 8080
            },
            output: {
                publicPath: "/",
                path: path.resolve(__dirname, "build"),
                filename: "bundled.js"
            },
            module: {
                rules: [
                    {
                        test: /\.(js|jsx)$/,
                        exclude: /node_modules/,
                        loader: "babel-loader"
                    },
                    {
                        test: /\.svg$/,
                        loader: 'svg-inline-loader'
                    }
                ],               
            },
            
              
            plugins: [
                new HtmlWebpackPlugin({
                    template: "./public/index.html"
                }),
                new webpack.HotModuleReplacementPlugin()
            ]
        },
        modeConfiguration(mode)
    );
};