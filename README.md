# Fullstack PG Management Application
A fullstack pg manangement web application where user can resister and login. After logging in user can add his/ her pg buildings, rooms in the buildings and tenants who are residing in the building respectively.

## Backend 
In this fullstack web application the backend has been built using Node JS and Express JS. MongoDB database has been used for express js to interact with it. User Authentication has been performed and routing has been set by giving particular api endpoints.

### Packages Used:

1, <a href="https://nodemon.io/" target="_blank"> Nodemon </a> - Nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.

2, <a href="https://expressjs.com/" target="_blank"> Express </a> - Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

3, <a href="https://mongoosejs.com/" target="_blank"> Mongoose </a> - Mongoose provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.

4, <a href="https://www.npmjs.com/package/validator" target="_blank"> Validator </a> - A package used to check whether the email id provided by the user is valid or in valid. Example: validator.isEmail('foo@bar.com') returns true.

5, <a href="https://www.npmjs.com/package/bcryptjs" target="_blank"> Bcryptjs </a> - This module enables storing of passwords as hashed passwords instead of plaintext.

6, <a href="https://www.npmjs.com/package/jsonwebtoken" target="_blank"> JSON WEB TOKEN </a> - JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. 

7, <a href="https://www.npmjs.com/package/jsonwebtoken" target="_blank"> CORS </a> - Cross-Origin Resource Sharing (CORS). It allows you to make requests from one website to another website in the browser, which is normally prohibited by another browser policy called the Same-Origin Policy (SOP).


## Frontend
The frontend of this repository is built using React JS and Redux. The application level state has been maintained in Redux store and api calls were made in the action generator file. The frontend of this web application allows user to register and login only if the validations are passed. Routing part has been carried out to switch between the pages. CRUD operations were performed in the building, rooms and tenants pages respectively. 

### Packages Used:
1,  <a href="https://reactjs.org/" target="_blank"> React JS </a> 

2,  <a href="https://redux.js.org/" target="_blank"> Redux </a> 

3,  <a href="https://react-redux.js.org/" target="_blank"> React Redux </a> 

4, <a href="https://v5.reactrouter.com/" target="_blank"> React Router Dom </a> 

5, <a href="https://www.npmjs.com/package/redux-thunk" target="_blank"> Redux Thunk </a> 

6, <a href="https://www.npmjs.com/package/axiosr" target="_blank"> Axios </a> 

7, <a href="https://www.npmjs.com/package/validator" target="_blank"> Validator </a> 

8,  <a href="https://sweetalert.js.org/" target="_blank"> Sweetalert </a> 


### Functionalities of UI has been completed. Design part is yet to be done. Thank you for reading.