const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPartialsPlugin = require("html-webpack-partials-plugin");
const ImageminPlugin = require("imagemin-webpack");

module.exports = {
  mode: "production",
  entry: {
    bundle: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "assets/js/[name].js",
    // assetModuleFilename: "assets/img/[name][ext]",
    clean: true,
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    // historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: [{ loader: "raw-loader" }, { loader: "pug-html-loader" }],
      },
      //  {
      //   test: /\.html$/,
      //   loader: "html-loader",
      // },
      // {
      //   test: /\.html$/,
      //   loader: "raw-loader",
      // },
      // {
      //   test: /\.(png|jpg|jpeg|gif|svg|eot|ttf|woff)$/,
      //   use: [
      //     loader : ImageminPlugin.loader,
      //       options: {
      //         bail:false,
      //         cache: false,
      //         imagemOptions: {
      //           this.plugins: [

      //           ]
      //         }
      //       },
      //   ]
      // },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { importLoaders: 2 } },
          { loader: "postcss-loader" },
          { loader: "resolve-url-loader"},
          { loader: "sass-loader" },
        ],
        
      },
    ],
  },
  plugins: [

    new MiniCssExtractPlugin({
      filename: "assets/css/main.css",
    }),

    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/assets/img"),
          to: path.resolve(__dirname, "dist/assets/img"),
        },
      ],
    }),

    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.pug",
      inject: "body",
    }),

    // new HtmlWebpackPlugin({
    //   filename: "calculadora.html",
    //   template: "src/calculadora.pug",
    //   inject: "body",
    // }),


    // new HtmlWebpackPlugin({
    //   filename: "blog.html",
    //   template: "src/blog.pug",
    //   inject: "body",
    // }),

    // new HtmlWebpackPlugin({
    //   filename: "noticia.html",
    //   template: "src/noticia-isolada.pug",
    //   inject: "body",
    // }),

    // new HtmlWebpackPlugin({
    //   filename: "lista-noticias.html",
    //   template: "src/lista-de-noticias.pug",
    //   inject: "body",
    // }),

    // new HtmlWebpackPlugin({
    //   filename: "pagina-fatos-b3-dino.html",
    //   template: "src/informes.pug",
    //   inject: "body",
    // }),

    // // // // // // // // // TEMPLATE

    // new HtmlWebpackPlugin({
    //   filename: "template/banner-top.html",
    //   template: "src/pages/blocks/banner-top.pug",
    //   inject: "body",
    // }),

    // new HtmlWebpackPlugin({
    //   filename: "template/barra-lateral-direita.html",
    //   template: "src/pages/blocks/barra-lateral-direita.pug",
    //   inject: "body",
    // }),

    // new HtmlWebpackPlugin({
    //   filename: "template/compartilhar-btn.html",
    //   template: "src/pages/blocks/compartilhar.pug",
    //   inject: "body",
    // }),

    // new HtmlWebpackPlugin({
    //   filename: "template/saber-mais-investimentos-formulario.html",
    //   template: "src/pages/blocks/investimentos-lead.pug",
    //   inject: "body",
    // }),

    // new HtmlWebpackPlugin({
    //   filename: "template/paginacao.html",
    //   template: "src/pages/blocks/paginacao.pug",
    //   inject: "body",
    // }),

    // new HtmlWebpackPlugin({
    //   filename: "template/pesquisar-barra.html",
    //   template: "src/pages/blocks/search.pug",
    //   inject: "body",
    // }),




    // new HtmlWebpackPlugin({
    //   filename: "partials/head.html",
    //   template: "src/partials/head.pug",
    //   inject: "false",
    // }),

    // new HtmlWebpackPlugin({
    //   filename: "partials/header.html",
    //   template: "src/partials/header.pug",
    //   inject: "false",
    // }),

  ],

  devtool: "source-map",
};
