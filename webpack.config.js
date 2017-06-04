var path = require("path");
module.exports = {
    entry: "./app/app.js",
    output: {
        path: path.join(__dirname, "dist"),
        publicPath: "/assets/",
        filename: "bundle.js"
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }]
    }
};