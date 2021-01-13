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
- [Styled Components](#styled-components)
  - [Recomended practices](#recomended-practices)

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
- chore
- ci
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

### Releases
`master` is [released](https://github.com/Royal-Navy/design-system/actions?query=workflow%3ARelease) on a nightly schedule.

## Hot fixing
If there is an issue (never happens :sunglasses:) then follow the process for adding a new feature. Hotfixes can be released & published by Design-System team members using the 'manual release' GitHub Actions workflow.

## Styled Components
We use the [`styled-components`](https://github.com/styled-components/styled-components) library for styling the component library.

### Recommended practices
- Break up components - consider creating a 'partials' directory.

- Props unique to the styled-component that do not need to be drilled to the wrapped component / markup should be marked as transient (`$`). Transient by default (think `const`).

- Avoid targeting markup even if it's namespaced by parent styled-component. This is sometimes a smell that the component needs breaking up further. There are exceptions to the rule - consider on a case by case basis.

- Avoid mixing classes / BEM and styled-components. Stick to the single paradigm.

- Avoid setting the style prop and instead pass props to the styled-component. 

- Identify discrete UI states (avoiding one-to-one relationship between props and CSS properties where possible).

- Always use the `css`\`` tagged template literal.

- Always declare components outside of the React component (performance - CSS class re-generation).

- It is important the `className` prop is attached to a component's parent DOM node. Not doing so will break `styled(Component)` HOC usage.

- Prefer [specificity trick](https://styled-components.com/docs/faqs#how-can-i-override-styles-with-higher-specificity) over `!important` usage.
