# Picatic Component Docs
To view the documentation, log in with your Picatic admin account.

## Running the working project
* Run `grunt connect:ng` or `grunt connect:html` from the root directory to start a server to view the documentation and open the documentation in your default browser
* Switch to the working directory you plan to work in (`cd src/angular/` | `cd src/html/`)
* Run `grunt watch` to see changes in docs as you work

### Notes
Main documentation src files are in `src/*/app/`.

Each component build out is in `src/*/components/`. Each of the LESS files are compiled for release and also shown in documentation.

Javascript for any custom components is in `src/angular/js/components`. These files are compiled into the release javascript.


## For release
In order to publish releases, you will need a `github token` (that can be easily generated following [this link](https://help.github.com/articles/creating-an-access-token-for-command-line-use/)). _You only need "repo" scope._

Once generated, make a copy of `gren-local.json` and rename it `gren.json`. Change the token in the new `gren.json` file to the `github token` you created in the previous step. `gren.json` is in `.gitignore` as your token should be treated like a password and never published to the repo.

Now you're all set to release.
Run `grunt release` from root.
This will build distributable `.js` and `.css` files that can be used through services like Bower.
It will also build the documentation, do a version bump/commit/push, send a deployment message to the Slack #deployments channel, then deploy to GPC.

By default, the version bump is a patch (`0.0.3` -> `0.0.4`).
To do a minor release (`0.0.4` -> `0.1.0`), run `grunt release:minor`.
To do a major release (`0.1.0` -> `1.0.0`), run `grunt release:major`.
