<h1>Todo App API Documentation</h1>
<br/>
<p>The Todo App API allows users to manage tasks and perform user authentication using JSON Web Token (JWT). This documentation provides an overview of the available endpoints and their usage.</p>
<br/>

<h2>Prerequisites</h2><br/>
<p>Before running the Todo App API, make sure you have the following software installed:</p>
  <br/>
   1. Node.js (version 12 or higher)
   2. MongoDB (running instance or connection details)

<br/>

<h2>Installation</h2><br/>
<p>Follow these steps to set up the Todo App API:</p>
   <br/>
   1. Clone the repository: `git clone https://github.com/Ritikthakur01/ToDo-RESTfull-API.git`
   <br/>
   2. Navigate to the project directory: `cd todo-app-api`
   <br/>
   3. npm install
  

<h2>Base URL</h2><br/>
<a>mongodb://127.0.0.1:27017/ToDo_API_db</a>

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
       
       
 <h3>Update a task</h3>
 
  1. Endpoint : `/tasks/:id`
  2. Method: `PUT`
  3. URL parameter:
         <br/>
        `id` (string, required): The ID of the task to update.
  4. Request body : 
          <br/>
          `name` (string, required): The updated name of the task.
          <br/>
          `description` (string): The updated description of the task.
          <br/>
          `status` (string): The updated status of the task.
  5. Response:
      <br/>
       `id` (string): The ID of the updated task.
      <br/>
       `name` (string): The updated name of the task.
      <br/>
       `description` (string): The updated description of the task.
      <br/>
       `status` (string): The updated status of the task.
       
       
 <h3>Delete a task</h3>
  
  1. Endpoint : `/tasks/:id`
  2. Method : `DELETE`
  3. URL parameter :
         <br/>
        `id` (string, required): The ID of the task to delete.
  4. Response :
       <br/>
      `message` (string) : A success message indicating that the task has been deleted.


  




