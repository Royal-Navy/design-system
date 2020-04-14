# Release checklist

NOTE: Fix problems by moving forward (roll a new release with a fix).

- [ ] Delete the `latest` branch and recreate from `master`
- [ ] Create and push a branch from `latest`
- [ ] Update [docs-site Versions page](update_versions_page.md)
- [ ] Run `yarn lerna:version` (updates package version, linked dependency versions, tags and pushes to remote)
- [ ] Merge branch to `latest` (Pull Request should include release notes) [2x peer approval]
- [ ] [Deploy documentation at tag](deploy_documentation.md)
- [ ] Merge `latest` back into `master`
- [ ] Check published packages on the [NPM public registry](https://www.npmjs.com/search?q=royalnavy) and the `docs-site` [production deployment](https://docs.royalnavy.io)
