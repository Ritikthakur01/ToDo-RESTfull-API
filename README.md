# <h1>Todo App API Documentation</h1>
<br/>
<p>The Todo App API allows users to manage tasks and perform user authentication using JSON Web Token (JWT). This documentation provides an overview of the available endpoints and their usage.</p>
<br/>
<h2>Base URL</h2><br/>
<a>https://github.com/Ritikthakur01/ToDo-RESTfull-API</a>

<h2>Authentication</h2>
 <h3>Register a new user</h3>
  
  1. Endpoint : `/auth/register`
  2. Method : `POST`
  3. Request body : 
          <br/>
          `username` (string, required) : The username of the user.
          <br/>
          `password` (string, required) : The password of the user.
  4. Response :
          <br/>
          `message` (string): A success message indicating the user has been registered.
 

 <h3>Log in as a user</h3>
 
  1. Endpoint : `/auth/login`
  2. Method : `POST`
  3. Request body : 
          <br/>
          `username` (string, required) : The username of the user.
          <br/>
          `password` (string, required) : The password of the user.
  4. Response :
          <br/>
          `token` (string): A JWT token that should be included in the Authorization header for subsequent requests.
          
          
 <h2>Task Endpoints</h2>
 <h3>Create a new task</h3>
  
  1. Endpoint : `/tasksr`
  2. Method : `POST`
  3. Request body : 
          <br/>
          `name` (string, required): The name of the task.
          <br/>
          `description` (string): The description of the task.
          <br/>
          `status` (string): The status of the task (e.g., "completed", "pending").
  4. Response :
          <br/>
          `id` (string): The unique ID of the created task.
          <br/>
          `name` (string): The name of the task.
          <br/>
          `description` (string): The description of the task.
          <br/>
          `status` (string): The status of the task.
 

 <h3>Get all tasks</h3>
 
  1. Endpoint : `/tasks`
  2. Method : `GET`
  3. Response :
          <br/>
         An array of task objects, each containing the `id`, `name`, `description`, and `status` fields.
   
  
 <h3>Get a specific task</h3>
 1. Endpoint : `/tasks/:id`
 2. Method: `GET`
 3. URL parameter:
         <br/>
        `id` (string, required): The ID of the task to retrieve.
 4. Response:
 <br/>
`id` (string): The ID of the task.
 <br/>
`name` (string): The name of the task.
 <br/>
`description` (string): The description of the task.
 <br/>
`status` (string): The status of the task.


  




