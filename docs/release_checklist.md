# Release checklist

NOTE: Fix problems by moving forward (roll a new release with a fix).

- [ ] Create release branch (`*.*.*`)
- [ ] Update 'latest release' in `docs-site` documentation and `README.md`
- [ ] Run `yarn lerna:version` (updates package version, linked dependency versions, tags and pushes to remote)
- [ ] Add draft release notes to GitHub and link to tag
- [ ] Merge release branch to `master` (Pull Request should include release notes) [2x peer approval]
- [ ] Merge `master` back into `develop`
- [ ] Check published packages and deployments
- [ ] Publish GitHub release
