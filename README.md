# <h1>Todo App API Documentation</h1>
<br/>
<p>The Todo App API allows users to manage tasks and perform user authentication using JSON Web Token (JWT). This documentation provides an overview of the available endpoints and their usage.</p>
<br/>
<h3>Base URL</h3><br/>
<a>https://github.com/Ritikthakur01/ToDo-RESTfull-API</a>

<h3>Authentication</h3>
<br/>
Register a new user
Endpoint: /auth/register

Method: POST

Request body:

username (string, required): The username of the user.
password (string, required): The password of the user.
Response:

message (string): A success message indicating the user has been registered.


