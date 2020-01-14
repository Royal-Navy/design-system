# Update versions page
Consumers of older versions of the library may need to view previous versions of the documentation.

1. Generate a new GUID to be used as `site_id` 
2. Browse to the `versions.md` found in `~/packages/docs-site/src/library/pages`
3. Add a new version to `versions.md` following the pattern:
    ````
    ## {version_number}
    * [Release note](https://github.com/Royal-Navy/standards-toolkit/releases/tag/{version_number})
    * [Documentation](https://{site_id}-standards.netlify.com)
    ````
4. Commit this change
