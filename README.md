#Hackathon - Ivy  w8d

#Objectives

#Learning Objectives:

* Demonstrate an understanding of Node.js, Express, and Sequelize
* Demonstrate an understanding of AngularJS and UI Router
* Demonstrate how to build an application from scratch, integrating the Front End and Back End

#Performance Objectives

* Writing migrations and models for the various data in your application
* Defining appropriate HTTP routes for the functionality in your application
* Writing controller methods that handle data from the request and return JSON responses
* Querying the database using Sequelize and models
* Hashing passwords and generating access tokens

----

#API Documentation

----
#USERS
----
POST /signup

Create a `user` to create links and write comments.
Required entries:

* name: string
* email: string
* password: string

----
POST /login

Requires correct password and email!

How to verify your account.
Required entries:

* username: string
* email: string
* user_password: string

----
#Photos
----
POST /photos/:id

Posting links to websites.
Required entries:

* title: string
* photoUrl: string
* userId: integer (foreign key)

----
GET /photos

Returns all of the photos, sorted by the most recent.
