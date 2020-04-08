const path = require('path');

module.exports = {
    mode:"development",
    entry: {
        index: './src/script/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'build/script'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'src/script')
                ],
                loader: 'babel-loader'
            }
        ]
    }
}