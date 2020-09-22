# Deploy documentation to Netlify
Ensure you have the [Netlify CLI](https://cli.netlify.com) installed.

1. `git checkout tags/{version_number}`
2. `cd packages/docs-site`
3. `yarn build`
4. `netlify unlink`
5. `netlify deploy`
6. Select `Create & configure a new site` when prompted for "What would you like to do?"
7. Select `Design System team` when prompted for "Team"
8. Enter `{site_id}-design-system` when prompted for "Site name (optional)". `site_id` is from updating the versions page
8. Enter `public` when prompted for "Publish directory"
9. `netlify deploy --prod`
10. Enter `public` when prompted for "Publish directory"
