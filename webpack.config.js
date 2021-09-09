const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',        //指定肉粽頭js
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    plugins:[
        new HtmlWebpackPlugin({       //幫你處裡public的html
            template:'./public/index.html'
        })
    ],
    module:{
        rules:[
            {
                test:/\.css$/i,
                use:['style-loader','css-loader']
            },
            {
                test:/\.(png|jpg|jpeg|svg|gif)$/i,
                type:'asset/resource',
                
            }
        ]
    },
    mode:'development',             //要這行才能用devServer龜毛
    devServer:{
        static:'dist',
        port:3000                   //指定什麼port
    },
    devtool:'inline-source-map',    //告訴第幾行錯誤
}