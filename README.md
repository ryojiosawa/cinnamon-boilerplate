#Cinnamon Boilderplate

Cinnamon Boilerplate is a Force.com project template that helps you kickstart and manage your Cinnamon project by providing a set of useful commands.

###To set up Cinnamon Boilerplate
1. `git clone https://github.com/ryojiosawa/cinnamon-boilerplate`
2. `cd cinnamon-boilerplate`
3. `npm install` - this downloads all dependent packages Cinnamon Boilerplate needs
4. Edit cinnamon.json

That’s all it!  You’re now good to go!

###Install Cinnamon: `grunt install`
Run this commeand to install Cinnamon into your Salesforce organization

###Configure Cinnamon settings: `grunt setup`
This command updates your Cinnamon settings based on cinnamon.json

###Deploy Cinnamon tests: `grunt deploy`
This command deploys all Cinnamon tests in /src/classes directory

###Run Cinnamon tests: `grunt run`
This command runs your Cinnamon tests.  By default, it runs all Cinnamon tests in your Salesforce organization

###Delete Cinnamon tests: `grunt delete`
This command removes all the deployed Cinnamon tests from your Salesforce organization

###Uninsall Cinnamon: `grunt uninstall`
This command uninstalls Cinnamon package from your Salesforce oranization.  You must run `grunt delete` and remove all Cinnamon tests before uninstalling Cinnamon package
