# Renesas Cloud Toolbox Voice Demo

## Project Summary
Renesas has developed a Cloud Toolbox kit, as part of the Synergy platform, that connects to Renesas hardware (the "board"),
and allows data storage and retrieval in 3 major cloud services (AWS, GCP, and Microsoft Azure).

This project contains sample code for voice skills retrieve board data via the Synergy kit, while running on each of those 3 cloud services (i.e. "Alexa", "Google Home", and "Cortana").

**NOTE:** This project should be treated as a development starter kit.
You are responsible for taking proper steps to secure your App should you choose to release it to production.

## Architecture
### Request Chain
The request chain looks like this:

`User -> Amazon Echo -> NLU -> Alexa Skill code on AWS -> Renesas Synergy -> Renesas Board`

**NOTE:** Natural Language Understanding ("NLU") is provided by each of the 3 cloud services.

A basic diagram of this structure can be found [here](
https://docs.google.com/a/spindance.com/drawings/d/1ma5PeA9Rir80D227dMM7bks4U5MVmsfMnYPmQMLI_24/edit?usp=sharing).

### Folder structure
#### Voice Code
The code is divided into folders for each cloud platform: `aws`, `azure`, `gcp`,
as well as a `common` folder for code that can run on all 3.

Each platform folder contains sub-folders for the handler functions that will be deployed to that platform.
This includes a `hello` function for quick testing,
and currently, a platform-specific voice handler function (e.g. `cortana` for `azure`).
It is possible to deploy any number of handler functions on each platform, if desired.

Generally, a voice handler will accept a request with a platform-specific signature.
It will then translate the request into a custom `Request.js` Object (or the generic one from `common`).
Next, the handler performs any logical operations specific to request's Intent and the Skill's SDK.
Finally, a custom (or generic) `Response.js` is created and a response is issued to the voice platform to be read aloud by the voice speaker.

Voice Skills and Intent Schemas are managed via the web utilities on their respective platforms.
Refer to the documention of your platform for how to work with Intent Schemas.
You may wish to version the Intent Schemas by committing backups to a `schemas` folder at logical checkpoints.
Simply export from the web interface and commit.

#### Utilities
The `utils` folder is for scripts that can be executed against the codebase.

#### Documentation
Documentation for the project can be found in the `doc` folder.

Running `npm run export-docs` from the project root will convert `.md` files to `.pdf` for ease of sharing.

### Deployment Framework
This project uses the Serverless Framework to quickly deploy code to each of the 3 cloud platforms.
If you're new to Serverless, [the aws guide](https://serverless.com/framework/docs/providers/aws/guide/intro/) is a good place to start.
Note however, that the `serverless.yml` file looks a bit different for each platform.

You can find a `serverless.yml` file in each platform folder.

This project uses Babel for ES7 syntax support, including async/await.

The project also uses the [serverless-webpack](https://github.com/serverless-heaven/serverless-webpack) plugin. It supports:

- **File bundling**
  - Import/export without worry
- **Sourcemaps for proper error messages**
  - Error message show the correct line numbers
  - Works in production with CloudWatch
- **Automatic support for multiple handler files**
  - No need to add a new entry to your `webpack.config.js`

You can find a `webpack.config.js` file in the root folder of the project.
You can also find a custom `webpack.[platform]config.js` file in the platform folders in cases where it was necessary to override variables.

## Development
### Requirements
- Install [Node.js](https://nodejs.org/en/) for your system.
- Do a global install for the serverless npm: `npm install -g serverless`
- Clone this repository.
- `cd` into your local repository and install the node packages:
`npm install`

To test that everything is working, you can run a function on your local machine:

``` bash
$ cd aws
$ serverless invoke local --function hello
```
- **NOTE:** Running functions locally can help catch simple syntax errors,
but at the point of interaction with other services, you will need to deploy to the cloud to test.

### Config files
There are three config files that will need to be filled in depending on your platform.
Each file contains its own instructions.

| File path | Description |
| --------- | ----------- |
| common/src/settings/boards.example.js | Needed for every platform. Fill out after provisioning boards. |
| azure/credentials/template.sh | Sets credentials for your Azure account. Discussed in [Build and Deploy](#build-and-deploy) section. |
| gcp/settings/gcpEnv.example.js | Needed for for Google platform. Discussed in [Environment Variables](#environment-variables) section. |

### Package
You can use `sls package` to have Serverless run just the build step.
This will allow you to see what the generated bundle will look like without uploading to the server.

### Cloud Accounts
Before you can deploy to a cloud platform, you will need to set up accounts and 1 or more Apps on that platform.
For details on doing that, you should refer to the extensive documentation provided by your chosen platform,
as well as the Serverless guides linked in the [Deployment Framework](#deployment-framework) section above.

### Environment Variables
This project contains multiple environment variables that must be set before the code will run properly.

For AWS, this can be done via the Lambda Management Console.
Select your function and look under the "Environment Variables" heading.
For Azure, this can be done via the Function Apps blade on the Azure Dashboard.
Select your App, go to Application settings,
and look under the "Application settings" heading.
For GCP, there is no current support for environment variables.
A special config file is provided in this repo.

| Variable | Description | Notes |
| -------- | ----------- | ----- |
| CTB_SYNERGY_USERNAME | Your Renesas Cloud Toolbox Username | For GCP, there is a config file. See gcp/settings/gcpEnv.example.js |
| CTB_SYNERGY_PASSWORD | Your Renesas Cloud Toolbox Password | For GCP, there is a config file. See gcp/settings/gcpEnv.example.js |
| CTB_CORTANA_BOT_APP_ID | Bot framework App ID | Azure only |
| CTB_CORTANA_BOT_APP_PASSWORD | Bot framework App password | Azure only |
| CTB_LUIS_APP_URL | LUIS endpoint URL | Azure only |


### Build and Deploy
Configure credentials for your cloud platform:
- For AWS, you'll need an `~/.aws/credentials` file with a `[renesas]` entry.
Find instructions on how to populate it [here](https://serverless.com/framework/docs/providers/aws/guide/credentials/).

  **NOTE:** The name of the "renesas" entry can be changed, but it must match the profile name in the serverless.yml file.

- For Azure, you will need to set environment variables as described [here](https://serverless.com/framework/docs/providers/azure/guide/credentials/).

  A template bash file can be found in the `azure/credentials/` folder. Make a copy of the template, fill it in, and then you can easily run:

  ```
  cd azure
  source credentials/<your-account>.sh
  ```

  If you're running Windows, the PowerShell equivalent can be found at the same link above.

- For GCP, you'll need a `~/.gcloud/renesas.json` file.
For details on how to populate this file, see [here](https://serverless.com/framework/docs/providers/google/guide/credentials/).

  **NOTE:** You can name "renesas.json" how you wish,
but you must update the credentials path in the serverless.yml file.

Now you're ready to deploy. If you deploy to an empty cloud project, serverless will set up all the project requirements in the cloud.
If you run `sls deploy` on a non-empty project, serverless will verify and overwrite the project settings.
Either way, a deploy automatically pacakges the code and uploads all handler functions (this can take a while; give it time).

For example, a deploy to Amazon looks like this:

``` bash
$ cd aws
$ serverless deploy
```

After a full deploy, or if the cloud project was already set up previously, you can deploy a single function:

``` bash
$ sls deploy function -f hello
```
- **NOTE:** `sls` is an alias for `serverless` and `-f` is an alias for `--function`.
- **NOTE:** Single function deploys do not work for `gcp`.
You must do a full deploy or the code will not update.

To add another handler function to your project, simply create a new folder and add the appropriate entries in `serverless.yml`.
The webpack config should automatically discover your functions and bundle them for deployment.
- GCP uses a hardcoded entrypoint of `index.js`.
All GCP handler functions need to be exported from that file.

### How It Works

To ensure that you get all the ES7 capabilities while showing proper error messages and seamlessly integrating with the rest of your project, we do the following:

- The `webpack.config.js` loads all your handlers using the `slsw.lib.entries` from the `serverless-webpack` plugin.
This means that you don't have to edit the `webpack.config.js` when you add a new handler file.
- Generate the sourcemaps for all the transpiled files and load the sourcemaps in each of the handler files.
- Catch and log any unhandled exceptions to ensure that async functions can log errors.

The result is that you should see proper error messages in your CloudWatch or console logs.

## Voice Platform Gotchyas
### Logging
AWS CloudWatch and Google Functions "View Logs" (accessed via the Cloud Console) will display anything you dump to `console.log` or `console.info`.

However for Microsoft, it's not so simple.
Azure Functions has a web "Monitor" that will display errors, but not console lines.
For that, you need to use `context.log.info()`, which is only available inside a handler call.

There is a helper file called `azureLogger.js` that should be used in lieu of `console.log` for any code that uploads to Azure Functions.

The `context` logs can be seen while streaming logs from Azure Functions.
The easiest way is to keep a terminal open and run `sls logs` for your handler function:

```bash
$ cd azure
$ sls logs -f cortana
```
- **NOTE:** The above logs will sometimes quit after deploying new function code.
You can `Ctrl+C` and re-run the command to restart them.

### Misc.
For other gotchyas like this, see `doc/Voice_Platform_Gotchyas` for some specific problems that you may run into.
