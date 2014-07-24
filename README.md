#Cinnamon Boilderplate

Cinnamon Boilerplate is a Force.com project template that helps you kickstart and manage your Cinnamon project by providing a set of useful commands.

###To set up Cinnamon Boilerplate
1. `git clone https://github.com/ryojiosawa/cinnamon-boilerplate`
2. `cd cinnamon-boilerplate`
3. `npm install` - this downloads all dependent packages Cinnamon Boilerplate needs
4. Edit cinnamon.json

That’s all it!  You’re now good to go!

--
####Use the following commands to manage your Cinnamon project


####`grunt install`
This grunt task installs the most recent version of Cinnamon package into your Salesforce organization

####`grunt setup`
This grunt task updates your Cinnamon settings based on cinnamon.json

####`grunt deploy`
This grunt task deploys all Cinnamon tests in /src/classes directory

####`grunt show`
This grunt task shows all Cinnamon tests deployed to your Salesforce organization

####`grunt run`
This grunt task runs your Cinnamon tests.  By default, it runs all Cinnamon tests in your Salesforce organization.  When test run finishes, all test results are written to `output.xml` in ant directory.

####`grunt delete`
This grunt task removes all the deployed Cinnamon tests from your Salesforce organization

####`grunt uninstall`
This grunt task uninstalls Cinnamon package from your Salesforce oranization.  You must run `grunt delete` and remove all Cinnamon tests before uninstalling Cinnamon package

--
Follow the steps below to install Cinnamon into a Salesforce organization, configure settings, deploy a sample Cinnamon test, and finally run the sample test

1. `grunt install`
2. edit cinnamon.json
3. `grunt setup`
4. `grunt deploy` to deploy a sample Cinnamon test
5. `grunt show` to make sure we have at lesat one test to run
6. `grunt run`
