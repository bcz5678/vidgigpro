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

You need to set NODE_PATH=lib to heroku's configuration variables.
NODE_PATH tells node where to find modules besides node_modules directory.
Also, you need to tell the app to read env variables in a production environment.

$ heroku config:set NODE_ENV=production

$ heroku config:set NODE_PATH=lib


### Contribution guidelines ###

* Writing tests
* Code review
* Other guidelines

### Who do I talk to? ###

* Repo owner or admin
* Other community or team contact