var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require("webpack");
module.exports = {
    entry: __dirname + "/app/main.js",//

    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015'],
                    plugins: ['transform-runtime', [
                        'import', {
                            libraryName: 'antd',
                            style: 'css'
                        }
                    ]
                    ]
                }

            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    }
}
