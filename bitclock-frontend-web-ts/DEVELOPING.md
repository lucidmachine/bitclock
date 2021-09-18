# Publishing a Release

1. Update package.json with the new version.
1. Update the changelog with the new version's changes.
1. Tag the release in Git. `git tag -a v1.2.3 -m "chore(release): 1.2.3"`
1. Push the Git tag. `git push origin --tags`
1. Use [npm-publish](https://docs.npmjs.com/cli/v6/commands/npm-publish) to
   publish the tag. `npm publish . --access public`
