# <h1>Todo App API Documentation</h1>
<br/>
<p>The Todo App API allows users to manage tasks and perform user authentication using JSON Web Token (JWT). This documentation provides an overview of the available endpoints and their usage.</p>
<br/>
<h2>Base URL</h2><br/>
<a>https://github.com/Ritikthakur01/ToDo-RESTfull-API</a>

<h2>Authentication</h2>
<br/>
<strong>Register a new user</strong>
<br/>
<strong>Endpoint:</strong>/auth/register

<strong>Method</strong>: POST

<strong>Request body:</strong>

username (string, required): The username of the user.
password (string, required): The password of the user.

<strong>Response:</strong>

message (string): A success message indicating the user has been registered.


