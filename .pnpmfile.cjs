module.exports = {
  hooks: {
    readPackage: (pkg) => {
      if (pkg.name === '@storybook/test-runner') {
        pkg.dependencies['jest-circus'] = '^28.1.3'
        pkg.dependencies['jest-environment-node'] = '^28.1.3'
      }
      return pkg
    }
  }
}
