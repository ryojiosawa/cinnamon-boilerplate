#Cinnamon Boilderplate

Cinnamon Boilerplate is a Force.com project template that helps you kickstart and manage your Cinnamon project by providing a set of useful commands.

###To set up Cinnamon Boilerplate
1. `git clone https://github.com/ryojiosawa/cinnamon-boilerplate`
2. `cd cinnamon-boilerplate`
3. `npm install` - this downloads all dependent packages Cinnamon Boilerplate needs
4. Edit cinnamon.json

That’s all it!  You’re now good to go!

--
###Use Cinnamon Boilerplate
Use the following commands to manage your Cinnamon project

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
When you are setting up Cinnamon for the first time, follow the steps below to install, setup, and run a sample Cinnamon test

1. [Set up your Cinnamon project](#To set up Cinnamon Boilerplate)
2. Edit cinnamon.json
3. Run `grunt setup`
4. Run `grunt deploy` to deploy a sample Cinnamon test
5. Run `grunt run`
6. Find output.xml in /ant directory after your test is completed

--
###Set up Cinnamon in Jenkins
If your team is using Jenkins to manage builds and run automated tests, you can easily create a job in Jenkins to schedule and trigger Cinnamon tests by following the instructions below

1. Copy `cinnamon-job` directory
2. Paste it into `jobs` directory under your Jenkins' root directory
3. Edit at leaste the following parameter strings in config.xml
 * USERNAME
 * PASSWORD
 * SERVERURL
4. Restart your Jenkins
5. Run your new Jenkins job
