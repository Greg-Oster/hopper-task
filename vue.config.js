module.exports = {
  devServer: {
    port: 8081, // or any other port you wish to use other than 8080
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/styles/variables.scss";`,
      },
    },
  },
};
