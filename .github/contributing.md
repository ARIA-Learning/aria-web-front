# Contributing

## Request for changes / Pull Requests
You first need to create a fork of the [aria-web-front](https://github.com/ethanfranks/aria-web-front) repository to commit your changes to. Methods to fork a repository can be found in the [GitHub Documentation](https://docs.github.com/en/get-started/quickstart/fork-a-repo).

Then add your fork as a local project:

```sh
# Using HTTPS
git clone <url_to_forked_repo>
```

Then, go to your local folder

```sh
cd aria-web-front
```

Add git remote controls:

```sh
# Using HTTPS
git remote add fork <url_to_forked_repo>
git remote add upstream https://github.com/ethanfranks/aria-web-front
```

You can now verify that you have your two git remotes:

```sh
git remote -v
```

## Workflow

1. Before starting development work make sure your fork of the ```development``` branch is up to date with the upstream development branch. See the [Syncing a fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork) documentation.

2. Create a separate branch off of your fork of the ```development``` branch named after the Jira ticket you are working on.

```sh
# Create and checkout the desired branch
git checkout -b <ticket_name>
```

3. Write code and commit changes locally following the [Conventional Commits guidelines](https://www.conventionalcommits.org/en/v1.0.0/#summary). Push the branch you are working on to you remote ```fork```. See the GitHub documentation on [pushing commits to a remote repository](https://docs.github.com/en/get-started/using-git/pushing-commits-to-a-remote-repository) for help.

4. Once you have completed work on your ticket and pushed all of your code to your remote ```fork``` create a pull request from the feature branch to the ```develop``` branch of the upstream repository. See the Github documentation on [creating a pull request from a fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork) for help.

### Resources

- [Git Documentation](https://git-scm.com/docs)
- [GitHub Documentation](https://docs.github.com/en)
