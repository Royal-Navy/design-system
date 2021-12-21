module.exports = {
  multipass: true,
  plugins: [
    {
      name: 'preset-default',
      params: {
        // Note: minifyStyles needs to be turned off to stop the @keyframes in
        // IconLoader (loader.svg) being destroyed.
        overrides: { removeViewBox: false, minifyStyles: false },
      },
    },
    'convertStyleToAttrs',
  ],
}
