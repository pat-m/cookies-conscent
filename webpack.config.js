const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/scripts/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'scripts/[name].js',
        publicPath: "/dist"
    },
    module: {
        rules: [
            {
            test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS
                ]
            },
            {
            test: /\.(png|svg|jpg|gif)$/,
                loader: 'file-loader', options: {
                    name: 'images/[name].[ext]'
                }
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};