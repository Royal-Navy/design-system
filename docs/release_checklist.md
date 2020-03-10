# Release checklist

NOTE: Fix problems by moving forward (roll a new release with a fix).

- [ ] Create and push new release branch from `master`, using the convention `release/*.*.*` ([Semver](https://semver.org/))
- [ ] Update [docs-site Versions page](update_versions_page.md)
- [ ] Run `yarn lerna:version` (updates package version, linked dependency versions, tags and pushes to remote)
- [ ] Merge release branch to `master` (Pull Request should include release notes) [2x peer approval]
- [ ] [Deploy documentation at tag](deploy_documentation.md)
- [ ] Check published packages on the [NPM public registry](https://www.npmjs.com/search?q=royalnavy) and the `docs-site` [production deployment](https://docs.royalnavy.io)
