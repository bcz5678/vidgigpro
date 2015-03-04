# README #

This README would normally document whatever steps are necessary to get your application up and running.

### What is this repository for? ###

* Quick summary
* Version
* [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)

### How do I get set up? ###

* Summary of set up
* Configuration
* Dependencies
* Database configuration
* How to run tests
* Deployment instructions

Deploying to heroku only takes a few steps.

yo angular-fullstack:heroku
To work with your new heroku app using the command line, you will need to run any heroku commands from the dist folder.

If you're using mongoDB you will need to add a database to your app:

heroku addons:add mongohq
Your app should now be live. To view it run heroku open.

If you're using any oAuth strategies, you must set environment variables for your selected oAuth. For example, if we're using Facebook oAuth we would do this :

heroku config:set FACEBOOK_ID=id
heroku config:set FACEBOOK_SECRET=secret
You will also need to set DOMAIN environment variable:

heroku config:set DOMAIN=<your-heroku-app-name>.herokuapp.com

or (if you're using it):

heroku config:set DOMAIN=<your-custom-domain>
To make your deployment process easier consider using grunt-build-control.

Pushing Updates

grunt
Commit and push the resulting build, located in your dist folder:

grunt buildcontrol:heroku



### Contribution guidelines ###

* Writing tests
* Code review
* Other guidelines

### Who do I talk to? ###

* Repo owner or admin
* Other community or team contact
