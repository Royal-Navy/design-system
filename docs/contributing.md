# Contributing to Standards Toolkit

## Conventional commits

Commits messages must follow the [conventional commit](https://www.conventionalcommits.org) format, a specification for adding human and machine readable meaning.

### Pattern
When committing use the following pattern:

```
type(scope?): subject  #scope is optional
```

### Types
- build
- ci
- chore
- docs
- feat
- fix
- perf
- refactor
- revert
- style
- test

## Branching strategy
The Standards Toolkit repository is using a trunk-based development branching strategy. All changes are merged directly into `master`. To have control over publishing of packages, `npm publish` is triggered only when a new version tag is merged into `master`. Branches are still used for the peer review process. When required, separate branches are maintained for fixes.

## Adding a new feature
```
git checkout master
git checkout -b feature/<name>
```

Make changes to the feature branch, `commit` and `push` to the remote repository. Open a PR and once approved `merge` into `master`.

## Hot fixing
If there is an issue (never happens :sunglasses:) then `master` is always fixed first as it is possible that another release from `master` could happen once the hot fix is live.

### Apply the fix to `master` in the first instance
To start adding a hot fix:

```
git checkout master
git checkout -b fix/<name>
```

Make changes to the fix branch, `commit` and `push` to the remote repository. Open a PR and once approved `merge` into `master`.

### Add the fix to the release
Once the fix is merged into `master` you are ready to add the fix to the release.

#### Create the release branch

```
git checkout tags/<version-in-prod>
git checkout -b <version-in-prod>-hotfix
git push origin <version-in-prod>-hotfix
```

#### Cherry pick the fix
```
git checkout <version-in-prod>-hotfix
git cherry-pick <commit-hash>
```

### Release the fix
```
git checkout <version-in-prod>-hotfix
yarn lerna:version
```

### Finally
Once deployed successfully, open a PR to `merge` the changes back into `master`.
