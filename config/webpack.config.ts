import * as path from "path";
import * as webpack from "webpack";

const PROJECT_PATH_ROOT = path.resolve(__dirname, "../");
const ASSETS_PATH = path.resolve(PROJECT_PATH_ROOT, "./dist/static");

const config: webpack.Configuration = {
  context: path.resolve(__dirname, ".."),
  entry: "./src/app.tsx",
  output: {
    path: ASSETS_PATH,
    publicPath: "/static/",
    filename: "main.js",
  },
  devtool: "#source-map",
  resolve: {
    extensions: ["*", ".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
    ],
  },
};

export default config;
