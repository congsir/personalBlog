const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
    devServer:{
        open:true
    },
    runtimeCompiler:true,
    publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
    productionSourceMap:false,
    configureWebpack: config =>{
        if (process.env.NODE_ENV !== 'production') return;
        return {
            plugins: [
                new BundleAnalyzerPlugin(),
            ]
        }
    }  
}