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


### Get one user by id:
```js
{
    user(id: "2") {
        id
        firstName
        lastName
        age
        hobbies
        address {
            street
            apartment
            city
            zipCode
            country
        }
    }
}
```

### Get first name and city from address for all users:
```js
{
    users {
        firstName
        address {
            city
        }
    }
}
```