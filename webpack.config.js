module.exports = {
    mode: "development",
    entry: "/client/index.js",
    output: {
        path: __dirname + "/server/public",
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react'],
                },
            },
        ],
    },
};