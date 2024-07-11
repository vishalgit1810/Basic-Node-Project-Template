This is a base project structure for a NODE_JS project, which anyone canbe used.
This template is made keeping some of the most important code principles and project 
management recommendations. 
feels free to change this.

`src` - This folder contains all the actual source code regarding the project, there is no folder for test cases
       but later on you can add it.
       
let's see what's inside the `src` -

-`/config` - This folder contains all kind of setup, configurations, settings required for the project.
             E.g- we've setup 'dotenv' for setting up environmental variable.
                  also we've setup Logging mechanism.

-`/routes` - Here, we register thr routes with corresponding middleware and controller to it.

-`/middleware` - They are just going to intercepts the incoming requests where we can write our 
                 validator, authenticator etc.  

-`controllers` - They are kind of last middleware, which helps us to call the business layer to execute the  
                 business logic. In the controllers we just receive the incoming request and the data and pass it to the business layer, once the business layer returns an output, we structure the API response in Controller and send the output.

-`/repositories` - This folder contains all the logic which is require to connect with the DB, also ALL raw 
                   and ORM queries will go here.

-`/services` - This contains all the Business Logic and also interact with /respositories for the data fom the 
               database.

-`/utils` - This contains all the Utility functions like error etc. 

## Setup The Project 
 1. Download this template form Github, and open in your editor and also run this cmd in your terminal
```
npm install
```
 2. In the Root dir creates a file ".env" to setup environment variable
```
PORT = <Port_Number>
```
 3. Go to `/src` and execute the following cmd
    ```
    npx sequelize init
    ```
    By exeuting the following cmd you will get-
    `/config/config.json` - which contains all 'development','test','production' envs.
    `/seeders, /models, /mifrations` folders 