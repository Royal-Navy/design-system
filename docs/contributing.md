# Contributing to Royal Navy Design System
- [Branching strategy](#branching-strategy)
- [Adding a new feature](#adding-a-new-feature)
- [Committing](#committing)
    - [Atomic commits](#atomic-commits)
    - [Conventional commits](#conventional-commits)
        - [Pattern](#pattern)
        - [Types](#types)
        - [Subject](#subject)
    - [Pull requests](#pull-requests)
        - [Fixups](#fixups)
        - [Squashing](#squashing)
- [Prereleases](#prereleases)
- [Hot fixing](#hot-fixing)
    - [Apply the fix to master in the first instance](#apply-the-fix-to-master-in-the-first-instance)
    - [Add the fix to the release](#add-the-fix-to-the-release)
        - [Cherry pick the fix](#cherry-pick-the-fix)
        - [Release the fix](#release-the-fix)
        - [Finally](#finally)

## Branching strategy
The Royal Navy Design System repository is using a trunk-based development branching strategy. All changes are merged directly into `master`. To have control over publishing of packages, `npm publish` is triggered only when a new version tag is merged into `master`. Branches are still used for the peer review process. When required, separate branches are maintained for fixes.

It is important that there are no breaking changes added to `master`. All changes are backwards compatible. If there is an opportunity to improve the code resulting in a breaking change then this can be discussed in an issue.

## Adding a new feature
With the latest version of `master` it is possible to create the feature branch.

```
// get the latest code
git checkout master
git pull

// create a branch
git checkout -b feature/<name>
```

Make changes to the feature branch, `commit` and `push` to the remote repository. Open a PR and once approved `merge` into `master`.


## Committing
There is a strict policy around how code is committed to the repository to encourage good developer practices. These good practices have an impact on the review process and being able to produce automated release notes.

### Atomic commits
A set of changes are best suited to a single commit. It is useful to think about the review process and presenting a series of commits which tell a story about the overall change.

[One Commit. One Change.](https://medium.com/@fagnerbrack/one-commit-one-change-3d10b10cebbf)

### Conventional commits
Commits messages must follow the [conventional commit](https://www.conventionalcommits.org) format, _a specification for adding human and machine readable meaning_.

#### Pattern
When committing use the following pattern:

```
// scope is optional
type(scope?): subject
```

#### Types
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

#### Subject
Good commit history is important for the peer review process and has historical benefit to understand rationale for previous changes.

[How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit)

## Pull requests
Once the feature has been developed and committed locally then it is time to push to the remote repository and open a pull request (PR) for peer review.

[Git Interactive Rebase, Squash, Amend and Other Ways of Rewriting History](https://thoughtbot.com/blog/git-interactive-rebase-squash-amend-rewriting-history)

### Fixups
During the review process feedback will be received. Some of this feedback may mean changing the code. If the code is changed then a `fixup` commit will be required. This ensures that a good commit history is maintained. The small `fixup` commits help with the review process so the reviewer can see what has changed since the last review, rather than reviewing the entire change again.

```
// associate change with previous commit
git commit --fixup <commit hash>
```

### Squashing
Once the PR has been signed off then it will be necessary to `rebase` the PR and squash any `fixup` commits. Rebasing ensures that the branch contains the latest changes and squashing maintains a clean commit history.

```
// get the latest code
git checkout master
git pull

// use the feature branch
git checkout feature/<name>

// replay feature branch changes after latest code
git rebase -i --autosquash origin/master
```

### Prereleases
Each `merge` to `master` publishes a prerelease to NPM. 

## Hot fixing
If there is an issue (never happens :sunglasses:) then `master` is always fixed first as it is possible that another release from `master` could happen once the hot fix is live.

### Apply the fix to `master` in the first instance
To start adding a hot fix:

```
// get the latest code
git checkout master
git pull

// create a branch
git checkout -b fix/<name>
```

Make changes to the fix branch, `commit` and `push` to the remote repository. Open a PR and once approved `merge` into `master`.

### Add the fix to the release
Once the fix is merged into `master` you are ready to add the fix to the release.

#### Cherry pick the fix
The release branch will already exist from the previous `latest` release. This step is to apply the fix from `master` to the release branch.
```
// work with the release
git checkout <major>.<minor>-latest

// apply the fix commit from master
git cherry-pick <commit-hash>
```

#### Release the fix
The package numbers will need updating to trigger publishing of the packages.
```
// work with the release
git checkout <major>.<minor>-latest

// create a branch to increment version numbers
git checkout <name-of-hot-fix>

// create a version
yarn lerna:version
```

A PR will need to be opened to `merge` the package updates into the release branch which will then trigger the publishing of packages.

#### Finally
Once deployed successfully, open a PR to `merge` the `CHANGELOG` and `package.json` changes back into `master`.
