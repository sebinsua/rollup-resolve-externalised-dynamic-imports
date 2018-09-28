"use strict";

const resolvePlugin = require("rollup-plugin-node-resolve");
const babelPlugin = require("rollup-plugin-babel");

const isExternal = importPath => {
  return (
    importPath.startsWith("react") || importPath.includes("node_modules/react")
  );
};

module.exports = {
  input: "./src/index.js",
  output: {
    exports: "named",
    file: "dist/index.js",
    name: "test",
    format: "cjs"
  },
  plugins: [
    babelPlugin({
      presets: ["@babel/preset-env"],
      plugins: ["@babel/plugin-syntax-dynamic-import"]
    }),
    resolvePlugin()
  ],
  external: isExternal
};
