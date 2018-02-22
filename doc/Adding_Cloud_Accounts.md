# Adding Cloud Accounts

## Creating Accounts
This section assumes that the skills/apps already exist,
and you are creating a new account to be added to the skill by the skill's owner.

### Amazon

#### Alexa Skills Kit
Go to
https://developer.amazon.com/alexa-skills-kit
and login or create an Amazon account.
You should end up on a landing page for Alexa development.
In the upper-right, click the button that says "Your Alexa Dashboards".
Click the "ALEXA" tab (if not already there) and then under "Alexa Skills Kit", click "Get Started >".

This will take you to a page listing your voice skills.
Click the name of a skill to go to a detailed view where you can access its Interaction Model and Configuration.

#### Lambda
Go to
https://console.aws.amazon.com/lambda
 and create an Amazon account or sign in with an existing one.
Lambda will ask you to associate a credit card with your account. Unfortunately, this is required. Amazon has a fairly generous
["free tier"](https://aws.amazon.com/free/),
but you should take care not to unintentionally deploy anything that will incur large costs.

**IMPORTANT:** When you log in to Lambda, be sure to change your server (in the upper-right corner) to "US East (N. Virginia)".
This is currently the _only_ North American server that will support Alexa Skills.

Having set the server above, you should see a list of your active Lambda functions.
Click a function name to go to a detailed view.

Use "CloudWatch" to get logs related to your functions.

### Microsoft
Microsoft voice skills are broken up into 3 components.
You should use the same Microsoft Account for all 3.
It will make testing easier.

#### Bot Framework
Head to https://dev.botframework.com/bots and create an account with Microsoft or sign in with your existing one.
After logging in, you will go to the Bot Framework dashboard (if you see a Welcome page, click "Cortana bot").

The dashboard shows all bots that you have currently active. Clicking on a bot's name will take you to the detailed view for that bot.

- NOTE: After March 31, 2018,
Microsoft plans to migrate all botframework bots to the Azure service.

#### LUIS
Got to https://www.luis.ai/ and create an account with Microsoft or sign in with your existing one.
After logging in, accept the App's access permissions and the Terms of Service,
 and you should be taken to a page showing a list of your LUIS Apps.
Click the name of an App to be taken to the detailed view for that App.

#### Azure Functions
It should only be necessary to have 1 email associated with the Azure account.
Azure is hosting the bot code.
Be sure your Microsoft account has been added to the Azure account before proceeding or Azure will create a new subscription plan for your account and ask you for credit card information.

Go to https://portal.azure.com and create an account with Microsoft or sign in with your existing one.

Use "Monitor" to get logs related to your functions.


### Google

#### GCP Functions
Go to https://cloud.google.com/functions/
and sign in to an existing Google account or click "add a new one".
After signing in, click on "Try it Free".

Agree to the Terms of Service and click Agree and Continue.
NOTE: GCP requires a credit card, so you must fill out the information on the next page.

You will land on an overview page for your account.
In the upper-left, click the "menu icon" (3 stacked horizontal lines), then click "Cloud Functions" to be taken to a list of your functions.
NOTE: If you do not see the list, you may need to select a project from the drop-down to the right of the "menu icon".
Click the name of a function to go to its detailed view.

For logs, click "View Logs" from a function's detail view.

#### Dialogflow
Go to https://console.actions.google.com and create a Google account or sign in to an existing one.
You should land on a page displaying your existing Actions on Google.
Click the picture of an Action to go to the detailed view.
Select "Actions" > "Dialogflow actions" "Edit actions on Dialogflow".
This will take you to a page showing Intents and Entities, etc.

## Adding accounts to existing skills
This section assumes you have at least one account set up as the owner of each skill/app.

### Amazon
Amazon does not have a convenient way to share a skill with other developers.
There is a new feature to add users as "beta testers"
https://developer.amazon.com/blogs/alexa/post/42e7de5c-f7ef-4e3e-8391-c61fe24f6caa/improve-skill-quality-with-the-new-beta-testing-tool-for-alexa-skills-beta

Or you can add users to the developer/business account and then they will have access to the entire account (including the skill).
For a business/organization, this appears to be Amazon's recommended solution:
https://forums.developer.amazon.com/articles/182/how-do-i-add-new-users-to-my-developers-account.html

### Microsoft
#### Bot Framework
Login to the Cortana dashboard at https://developer.microsoft.com/en-us/cortana/dashboard#!/home

- NOTE: After March 31, 2018,
Microsoft plans to migrate all botframework bots to the Azure service.
This process may change after that time.

**To share the skill:**

WARNING: As of Dec. 18, 2017,
Microsoft is actively changing this process. It may not work as described.

You should see a list of your Cortana skills in a table.
On the right, click "Manage" and you'll be taken to the Knowledge Store.
If not already selected,
find your "botlet" under the organization in the pop-out menu to the left.
Then select "Permissions" and "Add a developer".
NOTE: Each email _must_ be associated with a Microsoft Account.

**To add a bot Admin:**
From the https://dev.botframework.com/bots,
click the name of your bot and you will be taken to the bot framework dashboard.
Once there, click "SETTINGS" in the upper-right corner.
Scroll to the bottom of the Settings page and you will find a list of Admins who can edit the bot.
Add the emails of the users you wish to have Admin rights.
NOTE: Each email _must_ be associated with a Microsoft Account.

#### LUIS
To add collaborators to a LUIS App, login to https://www.luis.ai/home and, once you are at the "My Apps" page, click the name of the App.
This will take you to a detailed view.
On the left will be a list of screens you can view. Click on "Settings" (above "Dashboard").
Scroll down to the "Collaborators" section and add the emails of users you want to help edit the App.
NOTE: Each email _must_ be associated with a Microsoft Account.

#### Azure Functions
**To add a developer:** It should be possible to use the bash file in the `azure/credentials/` directory to export env variables that will allow any local machine to update the bot code on Azure using `sls`.

However, Azure has additional tools that can aid development– such as a code browser
(https://{your-app}.scm.azurewebsites.net)
and "Monitoring"
(Function Apps > [app-name] > Monitor), which shows logs).
For developers to view those, you will need to add users to your Azure account.
See Microsoft's documentation on managing Azure users:
https://docs.microsoft.com/en-us/azure/api-management/api-management-howto-create-groups

**To add an Admin:** Go to this link to find Microsoft's documentation on managing Azure users:
https://docs.microsoft.com/en-us/azure/billing/billing-add-change-azure-subscription-administrator

### Google

#### GCP Functions
Go to https://console.cloud.google.com
and, after logging in, select the Project with the drop-down in the upper-left next to "Google Cloud Platform".
Then, click the "menu icon" (3 stacked horizontal lines) and select "IAM & admin".
Here, you can Add and Remove users, and change their Roles.

#### Dialogflow
Go to https://console.actions.google.com
You should land on a page displaying your existing Actions on Google.
Click the picture of an Action to go to the detailed view.
In the upper-left select the "gear icon" and select "Permissions".
This will take you to a page showing the IAM for your App.
You can Add or Remove team members and change their Roles.
