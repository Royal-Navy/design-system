/* eslint-disable no-param-reassign */

// Required in Jest 28
// See https://jestjs.io/docs/upgrading-to-jest28#packagejson-exports

module.exports = (path, options) => {
  return options.defaultResolver(path, {
    ...options,
    packageFilter: (pkg) => {
      if (pkg.name !== 'uuid') {
        return pkg
      }

      // Mutation is needed here as returning a new object without these
      // properties doesn't work, unfortunately.
      delete pkg.exports
      delete pkg.module

      return pkg
    },
  })
}
