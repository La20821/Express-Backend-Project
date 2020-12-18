## Purpose 
The purpose of the the Back End aspect of this project is to set up the specific routes based off of web application's desired functionality. These endpoints would ultiamtely be the framework and skeleton of the overall project and is proven to be a very important portion a Full Stack Web Application. Within the backend portion of this project, I created an API database so that I could store information and later pass it into the React front end of my project. I was able to use Postman, a tool common for developers to test RESTful APIs by testing the endpoints, providing an input and expecting an output rendered correct data. 

## Getting Started
### Entity Relationship Diagram

![image](https://user-images.githubusercontent.com/68744076/102092105-4b982780-3de5-11eb-86fd-565703f70ce8.png)

### Wireframe


## Technology Used

* Command Line
* Visual Studio Code
* Google Chrome Web Browser
* PG Admin
* Lucid Chart 
* Postman
* Npx Sequelize


## Development Steps
1. The first step was to run npm install to get neccessary dependecies. 
2. Second, I set up bacic files including the server and controllers and input neccessary routes into my controllers.
3. I created my database inside of PG admin. I linked PG admin to my VS code. 
4. I generated my model and then migrated, editing the added files as neccessary. 
5. I then worked on my page routes inside of my controllers file, ensuring that endpoints were noted correctly. 


## General Requirements
## User Stories 
* As a user, I should be able to create an account.
* As a user, I should be able to edit an account.
* As a user, I should be able to delete an account.
* As a user, I should be able to sign in. 
* As a user, I should be able to add an item. 
* As a user, I should be able to edit an item.
* As a user, I should be able to delete an item.
* As a user, I should be able to assign an item to a user. 


## Issues 
The main issue I ran into during back end development was understanding the relationships between my models and users. I spent a lot of time editing the relationships and updating the kind of data being stored in the users and models tables. It took debugging a lot of errors to finally reach a point where all the endpoints worked during testing on the Postman tool.
