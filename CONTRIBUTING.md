## Getting started

First step in contributing would be to clone and build the project per the docs here:
https://github.com/brave/brave-browser/wiki

After finishing the steps for your platform (ex: after you run `npm i && npm run init`), you'll have a directory under `src/brave` which is pointing at [brave/brave-core](https://github.com/brave/brave-core)

The actual build process- it's up to you if you want to run it. It would be great to help ensure the code compiles, but at the same time, it can take several hours (6+ on a laptop) to compile the entire project (and you can submit patches without testing locally and a Brave team member can help you test / verify the fix)

For submitting the patch, you'll want to fork the [brave/brave-core](https://github.com/brave/brave-core) repo if you haven't already and update your remote list (under `src/brave`) to add your fork in there (ex: `git remote add <your-github-username> git@github.com:<your-github-username>/brave-core.git`). You can then create a branch off master for your work and push that to your remote. Once pushed, GitHub will show a "pull request" button the UI which let's you submit the patch against [brave/brave-core](https://github.com/brave/brave-core)

Tests are encouraged - although there's a learning curve. I'd be happy to help when you get further along
