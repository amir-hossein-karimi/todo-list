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
                            <ol>
                                <li><a href="#login">login</a></li>
                                <li><a href="#regiser">register</a></li>
                                <li><a>refresh token</a></li>
                            </ol>
                        </div>
                    </li>
                    <li><a href="#USER">user routes</a></li>
                    <li><a href="#CATEGORIES">categories routes</a></li>
                    <li><a href="#TODOS">todos routes</a></li>
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

<h2 id="Usage">Usage</h2>

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

get all users: http://localhost:3500/user/all

```json
{
  "method": "get"
}
```

get one user: http://localhost:3500/user/one?id={{_id}}

```json
{
  "method": "get"
}
```

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

delete a user: http://localhost:3500/user/delete?id={{_id}}

```json
{
  "method": "delete"
}
```

<h4 id="CATEGORIES">CATEGORIES</h4>

get all your categories: http://localhost:3500/category/all

```json
{
  "method": "get",
  "headers": {
    "token": "token"
  }
}
```

get one category (It must be yours): http://localhost:3500/category/one?id={{_id}}

```json
{
  "method": "get",
  "headers": {
    "token": "token"
  }
}
```

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

get all your todos: http://localhost:3500/todos/all

```json
{
  "method": "get",
  "headers": {
    "token": "token"
  }
}
```

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

delete a todo (It must be yours): http://localhost:3500/todos/delete?id={{_id}}

```json
{
  "method": "delete",
  "headers": {
    "token": "token"
  }
}
```
