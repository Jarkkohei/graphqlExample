# A simple GraphQL Example


## Installation

`npm install`

#

## Running

`nodemon server`

#

## Navigate to 

`localhost:4000/graphql` 

#

## Graphiql usage


### Get one user with id:
```js
{
    user(id: "2") {
        id,
        firstName,
        lastName,
        age,
        hobbies
    }
}
```

### Get first name from all users:
```js
{
    users {
        firstName
    }
}
```