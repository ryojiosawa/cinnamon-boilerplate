#Cinnamon Boilderplate

Cinnamon Boilerplate is a Force.com project template that helps you kickstart and manage your Cinnamon project by providing a set of useful commands.

##To set up Cinnamon Boilerplate
1. Clone Cinnamon Boilerplate git repo `git clone https://github.com/ryojiosawa/cinnamon-boilerplate`
2. cd into cinnamon-boilerplate directory
3. Run `npm install` to download all dependent packages
4. Edit cinnamon.json

That’s all it!  You’re now good to go!

--
##Usage
The following commands are available to help you set up and manage your Cinnamon project.  Run these commands at the root of your Cinnamon project.

####Install Cinnamon package
`grunt install`

####Update Cinnamon configs in cinnamon.json
`grunt setup`

####Deploy Cinnamon tests into your Salesforce organization
`grunt deploy` - this task will deploy all Cinnamon test classes in /src/classes directory


####Show all Cinnamon tests deployed to your Salesforce organization
`grunt show`


####Run Cinnamon tests
`grunt run` - this task runs all of your Cinnamon tests by default.  When test run is completed, `output.xml` is created in /ant directory.

####Delete Cinnamon tests from your Salesforce organization
`grunt delete`

####Uninstall Cinnamon pacakge
`grunt uninstall` - you must first run `grunt delete` and remove all Cinnamon tests before uninstalling Cinnamon package

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
