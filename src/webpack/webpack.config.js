const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require("webpack")
module.exports = (env) => {
    return {
        mode: env.mode ?? "development",
        entry: path.resolve(__dirname, "src", "index.ts"),
        output: { //для определения папки, куда все создастся
            path: path.resolve(__dirname, "build"),
            filename: "[name].[contenthash].bundle.js",
            clean: true //удаление существующего перед сборкой
        },
        plugins: [
            //автоматически добавляет скрипт в html файл
            new HtmlWebpackPlugin({template: path.resolve(__dirname, "public", "index.html")}),
            //показывает процент готовности во время сборки
            new webpack.ProgressPlugin()
        ],
        module: {
            rules: [
                {
                    test: /\.tsx?$/, //регулярка файлов, которые будут обрабатываться
                    use: "ts-loader", //название лоадера
                    exclude: /node_modules/, //то, чот не надо обрабатывать
                }
            ]
        },
        resolve: {
            extensions: [".tsx", ".ts", ".js"] // нужно, чтобы при импортах не писать расширение
        }
    }
}