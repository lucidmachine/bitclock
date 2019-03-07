const path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    entry: './src/index.ts',
    module: {
        rules: [
            {
                exclude: /node_modules/,
                include: /src/,
                test: /\.ts$/,
                use: 'ts-loader'
            }
        ]
    },
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.ts', '.js']
    }
};
