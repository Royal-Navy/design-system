# Release checklist

NOTE: Fix problems by moving forward (roll a new release with a fix).

- [ ] Create new release branch from develop, using the convention feature/x.x.x, where x.x.x is the new version based on Semver.
- [ ] Update 'latest release' in `docs-site` documentation and `README.md`
- [ ] Run `yarn lerna:version` (updates package version, linked dependency versions, tags and pushes to remote)
- [ ] Add draft release notes to GitHub and link to tag
- [ ] Merge release branch to `master` (Pull Request should include release notes) [2x peer approval]
- [ ] Merge `master` back into `develop`
- [ ] Check published packages on the NPM public registry and the `docs-site` production deployment (https://docs.royalnavy.io)
- [ ] Publish GitHub release
