# Nodejs Express CORS
Understanding and Working on CORS by enabling CORS in Nodejs application using Express and CORS middleware

## Introduction 
- By default web browser prevents requests from unknown websites from accessing your API's and services.
- This means , our server shares its resourses only with the clients that are from same domain (i.e domain on which our server is created)
### Why and When CORS is needed?
 - CORS is important for Node.js applications because it allows them to make requests to other domains.
 - This is useful for applications that need to access data from other APIs or that need to authenticate users with a third-party service.
### What is CORS?
- Node.js with CORS is a server-side JavaScript solution for building scalable and secure cross-origin web APIs.
- To enable CORS in Node.js, you can use the cors package. This package provides a middleware that can be used to add CORS headers to your responses.

# Getting Started 
## nodejs application (backend) - API to serve colors json object 
1. Create a nodejs application: run following command
    > _npm init -y_
2. Install following packages
    > _npm install express cors_
3. create server.js file . In this stage do not add cors middleware 
4. Create colors.js file 
5. Run the application wit following command
  > _node server.js_

**get colors API output:**
![image](https://github.com/Nagamma06/Nodejs_Express_CORS/assets/64766095/3564ff69-53f2-4dfd-ac19-fef8c31e38b1)

## reactjs application (frontend) - Fetch colors from nodejs server
1. Create a react app using following command
 > _npm create vite@latest colors-app_
 > select React framework and then select Javascript
2. Install necessary dependencies by running following command
 > _npm install_
3. Edit App.jsx and add code from above App.jsx file 
4. Run the application using command
 > _npm run dev_

**output**
![image](https://github.com/Nagamma06/Nodejs_Express_CORS/assets/64766095/0f03dd1c-79aa-4c96-8d04-03c8e551b1dc)


## Solution 
- Add CORS middleware at our nodejs server as shown in below code
  > _import cors from 'cors';_
  > _app.use(cors());_
- Now , we can access any API of nodejs Server from Reactjs application .

**output**
![image](https://github.com/Nagamma06/Nodejs_Express_CORS/assets/64766095/6d555c43-ef16-4c42-b12d-fa346911431f)




