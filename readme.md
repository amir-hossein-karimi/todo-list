<h1>Todo App</h1>
This repository contains a full-stack todo application. It is built using React and typescript for the FrontEnd and Node.js and MongoDB for the BackEnd.

<h2>FrontEnd</h2>
The FrontEnd is built using React and typescript. It is located in the front directory.

<h2>BackEnd</h2>
The BackEnd is built using Node.js and MongoDB. It is located in the back directory.

<h2>Installation</h2>
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

<h4>AUTHENTICATION</h4>

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

<h4>USER</h4>

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

<h4>CATEGORIES</h4>

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
  "method": "post",
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
  "method": "delete"
}
```
