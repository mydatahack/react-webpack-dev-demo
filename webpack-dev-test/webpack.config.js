module.exports = {
    mode: 'development',
    entry:['@babel/polyfill','./source/client.js'],
    output: {
        path: '/Users/taka/Desktop/webpack-dev-test/',
        filename: 'index.js'
    },
    devServer:{
        inline:true,
        contentBase:'./public',
        historyApiFallback: true,
        port:3000
    },

    module: {
        rules: [
            {test:/\.js$/,
             exclude:/node_modules/,
             loader:'babel-loader'
            }
        ]
    }
}