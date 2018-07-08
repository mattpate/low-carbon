exports.onCreateBabelConfig = ({ actions }) => {
  // if (process.env.NODE_ENV !== `production`) {
  //   return {
  //     plugins: [
  //       [
  //         require.resolve(`babel-plugin-emotion`),
  //         {
  //           sourceMap: true,
  //         },
  //       ],
  //     ].concat(babelrc.plugins),
  //   }
  // }

  actions.setBabelPlugin({
    name: `babel-plugin-emotion`,
  })
}
