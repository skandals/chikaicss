
// init mini css extract plugin
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {

    entry: "./src/js/index.js",
    mode: "development",
    output: {
        filename: "chikai.js",
        publicPath: "/"
    },

    module: {
        rules: [ 
            // {

            //     test: /\.js$/,
            //     use: 'babel-loader',
            //     query: {
            //         preset: 'es2015'
            //     }

            // },     
            {
           
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    // 'style-loader',
                    'css-loader',
                    'postcss-loader'
                ]
        }]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'chikai.css'
        })
    ]

}