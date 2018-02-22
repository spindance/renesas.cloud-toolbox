# Voice Platform Gotchyas
This document is intended for project developers and attempts to capture unusual quirks of working with the 3 different cloud platforms,
or any other solutions to strange problems that might save time.

## Common
### SSML
Speech Synthesis Markup Language (SSML) is supported by all 3 voice services.
However, the wrappers used in this codebase treat the SSML slightly differently.

For Google, and Microsoft, the outgoing SSML _must_ be wrapped in `<speak>...</speak>` tags.
For Amazon, however, doing so causes an Error, so the tags must be left off.

## Azure
### Azure Cold Start
#### What's a cold start?
By default, `serverless-azure-functions` will create an App running on the "Consumption Plan".
This plan is nice for development and testing because you only pay for what you use.
However, Azure Apps running on this plan share resources with other Apps.
When your App is not in use, Azure will "put it to sleep", freeing resources for other Apps.
The first call made after your App goes to sleep will "wake" it (allocating resources).
This "cold start" can be slow enough that Cortana will think the App is not responding and Cortana will time out.

#### How to deal with the cold start
Firstly, ensure you are using webpack when running on Azure.
Azure does not like loading lots of small files (i.e. the `node_modules` folder).
By bundling with webpack, you can _significantly_ lower the cold start time.

If you're using webpack and still seeing cold start issues, you basically have two options:

A) Ignore it. If you're just doing development and testing, this is not a big deal,
and you will save money by staying on the Consumption Plan.

B) Manually create an App on another Plan.
You can set up a new App under an ["App Service Plan"](https://azure.microsoft.com/en-us/pricing/details/app-service/) that does not share resources with other Apps.
However, these plans tend to incur higher costs.
The "Basic" tier will allow you to turn on an Application Setting called "Always On".
If you setup your app manually, you'll want to take special care when doing a deploy (see below).

### Deploying to a manually created App
If you have configured your App manually (see [Azure Cold Start](#azure-cold-start) above), it's important that you do not use `sls deploy`.
If you do, you will **overwite** the Function App and have to blow it all away and re-create it *manually!*

Instead, you should run `sls deploy function -f cortana` to upload one function at a time.

### Easily viewing files
The "Monitor" section of the Azure dashboard can be slow to respond.
Fortunately, there is another way to view files on the server.
Go to the Azure Websites SCM page for your App: https://{your_app_name}.scm.azurewebsites.net/dev,
click "Explore",
and you can view files there.

**NOTE:** Change the URL for the App you want to view.

## GCP
### Single function deploys
- Single function deploys do not work for `gcp`.
You must do a full deploy or the code will not update.
