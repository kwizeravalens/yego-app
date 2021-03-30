module.exports = {
  runtimeCompiler: true,
  lintOnSave: undefined,
  productionSourceMap: process.env.NODE_ENV === "production",
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
};
