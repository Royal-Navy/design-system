# Release checklist

NOTE: Fix problems by moving forward (roll a new release with a fix).

- [ ] Create and push new release branch from `develop`, using the convention `release/*.*.*` ([Semver](https://semver.org/))
- [ ] Run `yarn lerna:version` (updates package version, linked dependency versions, tags and pushes to remote)
- [ ] Add draft release notes to GitHub and link to tag
- [ ] Merge release branch to `master` (Pull Request should include release notes) [2x peer approval]
- [ ] Merge `master` back into `develop`
- [ ] Check published packages on the [NPM public registry](https://www.npmjs.com/search?q=royalnavy) and the `docs-site` [production deployment](https://docs.royalnavy.io)
- [ ] Publish GitHub release
