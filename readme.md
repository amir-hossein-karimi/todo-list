<h1>Todo App</h1>
This repository contains a full-stack todo application. It is built using React and typescript for the FrontEnd and Node.js and MongoDB for the BackEnd.

<h2>LINKS</h2>

<div>
    <ul>
        <li><a href="#FrontEnd">FrontEnd details</a></li>
        <li><a href="#BackEnd">BackEnd details</a></li>
        <li><a href="#Installation">Installation</a></li>
        <li>
            <div>
                <a href="#Usage">Usage</a>
                <ul>
                    <li>
                        <div>
                            <a href="#AUTHENTICATION">authentication routes</a>
                            <ul>
                                <li><a href="#login">login</a></li>
                                <li><a href="#regiser">register</a></li>
                                <li><a href="#refreshToken">refresh token</a></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div>
                            <a href="#USER">user routes</a>
                            <ul>
                                <li><a href="#getAllUsers">get all users</a></li>
                                <li><a href="#getOneUser">get one user by id</a></li>
                                <li><a href="#createUser">create a user</a></li>
                                <li><a href="#updateUser">update a user by id</a></li>
                                <li><a href="#deleteUser">delete a user by id</a></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div>
                            <a href="#CATEGORIES">categories routes</a>
                            <ul>
                                <li><a href="#getAllCategories">get all categories</a></li>
                                <li><a href="#getOneCategory">get one category by id</a></li>
                                <li><a href="#createCategory">create a category</a></li>
                                <li><a href="#updateCategory">update a category by id</a></li>
                                <li><a href="#deleteCategory">delete a category by id</a></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div>
                            <a href="#TODOS">todos routes</a>
                            <ul>
                                <li><a href="#getAllTodos">get all todos</a></li>
                                <li><a href="#getOneTodo">get one todo by id</a></li>
                                <li><a href="#createTodo">create a todo</a></li>
                                <li><a href="#updateTodo">update a todo by id</a></li>
                                <li><a href="#deleteTodo">delete a todo by id</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </li>
    <ul>
</div>

<h2 id="FrontEnd">FrontEnd</h2>
The FrontEnd is built using React and typescript. It is located in the front directory.

<h2 id="BackEnd">BackEnd</h2>
The BackEnd is built using Node.js and MongoDB. It is located in the back directory.

<h2 id="Installation">Installation</h2>
To install the application, follow these steps:
<br />

Clone the repository:

```bash
git clone https://github.com/amir-hossein-karimi/todo-list.git
```

<br />
Install the dependencies for the FrontEnd:

```bash
cd front
npm install
```

Install the dependencies for the BackEnd:
<br />

```bash
cd back
npm install
```

Start the FrontEnd:

```bash
cd back
npm start
```

The FrontEnd should now be running at http://localhost:3000.

Start the BackEnd:

```bash
cd back
npm start
```

The BackEnd should now be running at http://localhost:3500.

<h2>Usage</h2>

<b>BackEnd routes usage</b>

<h4 id="AUTHENTICATION">AUTHENTICATION</h4>

<div id="login"></div>

login: http://localhost:3500/auth/login

```json
{
  "method": "post",
  "body": {
    "username": "username",
    "password": "password"
  }
}
```

<div id="regiser"></div>

register: http://localhost:3500/auth/register

```json
{
  "method": "post",
  "body": {
    "username": "username",
    "password": "password"
  }
}
```

<div id="refreshToken"></div>

refreshToken: http://localhost:3500/auth/refreshToken

```json
{
  "method": "post",
  "body": {
    "refreshToken": "refresh token"
  },
  "headers": {
    "token": "expired token"
  }
}
```

<h4 id="USER">USER</h4>

<div id="getAllUsers"></div>

get all users: http://localhost:3500/user/all

```json
{
  "method": "get"
}
```

<div id="getOneUser"></div>

get one user: http://localhost:3500/user/one?id={{_id}}

```json
{
  "method": "get"
}
```

<div id="createUser"></div>

create a user: http://localhost:3500/user/create

```json
{
  "method": "post",
  "body": {
    "username": "username",
    "password": "password",
    "role": "user | admin | superAdmin | undefined(optional key)"
  }
}
```

<div id="updateUser"></div>

update a user: http://localhost:3500/user/update?id={{_id}}

```json
{
  "method": "put",
  "body": {
    "role": "user | admin | superAdmin | undefined(optional key)",
    "token": "token | undefined(optional key)",
    "refreshToken": "refresh token | undefined(optional key)"
  }
}
```

<div id="deleteUser"></div>

delete a user: http://localhost:3500/user/delete?id={{_id}}

```json
{
  "method": "delete"
}
```

<h4 id="CATEGORIES">CATEGORIES</h4>

<div id="getAllCategories"></div>

get all your categories: http://localhost:3500/category/all

```json
{
  "method": "get",
  "headers": {
    "token": "token"
  }
}
```

<div id="getOneCategory"></div>

get one category (It must be yours): http://localhost:3500/category/one?id={{_id}}

```json
{
  "method": "get",
  "headers": {
    "token": "token"
  }
}
```

<div id="createCategory"></div>

create a category: http://localhost:3500/category/create

```json
{
  "method": "post",
  "headers": {
    "token": "token"
  },
  "body": {
    "name": "category name"
  }
}
```

<div id="updateCategory"></div>

update a category (It must be yours): http://localhost:3500/category/update?id={{_id}}

```json
{
  "method": "put",
  "headers": {
    "token": "token"
  },
  "body": {
    "name": "category name"
  }
}
```

<div id="deleteCategory"></div>

delete a category (It must be yours): http://localhost:3500/category/delete?id={{_id}}

```json
{
  "method": "delete",
  "headers": {
    "token": "token"
  }
}
```

<h4 id="TODOS">TODOS</h4>

<div id="getAllTodos"></div>

get all your todos: http://localhost:3500/todos/all

```json
{
  "method": "get",
  "headers": {
    "token": "token"
  }
}
```

<div id="getOneTodo"></div>

get one todo (It must be yours): http://localhost:3500/todos/one?id={{_id}}

```json
{
    {
  "method": "get",
  "headers": {
    "token": "token"
  },
}
}
```

<div id="createTodo"></div>

create a todo: http://localhost:3500/todos/create

```json
{
  "method": "post",
  "headers": {
    "token": "token"
  },
  "body": {
    "title": "todo title",
    "description": "todo description | undefined(optional key)",
    "categoryId": "category id"
  }
}
```

<div id="updateTodo"></div>

update a todo: http://localhost:3500/todos/update?id={{_id}}

```json
{
  "method": "put",
  "headers": {
    "token": "token"
  },
  "body": {
    "title": "todo title | undefined(optional key)",
    "description": "todo description | undefined(optional key)",
    "categoryId": "category id | undefined(optional key)"
  }
}
```

<div id="deleteTodo"></div>

delete a todo (It must be yours): http://localhost:3500/todos/delete?id={{_id}}

```json
{
  "method": "delete",
  "headers": {
    "token": "token"
  }
}
```
