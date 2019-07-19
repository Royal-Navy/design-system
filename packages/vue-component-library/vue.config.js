module.exports = {
  css: {
    loaderOptions: {
      sass: {
        resources: [
          './_config.scss',
          './node_modules/@royalnavy/css-framework/src/_config.scss',
          './node_modules/@royalnavy/css-framework/src/contexts/*.scss',
          './node_modules/@royalnavy/css-framework/src/abstracts/functions/*.scss',
          './node_modules/@royalnavy/css-framework/src/vars/*.scss',
          './node_modules/@royalnavy/css-framework/src/abstracts/mixins/*.scss',
        ],
      },
    },
  },
}
