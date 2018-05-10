const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');


// Construct a schema, using GraphQL schema language
const schema = buildSchema(`

    type Address {
        street: String,
        apartment: String,
        city: String,
        zipCode: String,
        country: String
    }

    type User {
        id: Int
        firstName: String
        lastName: String
        age: Int
        hobbies: [String]
        address: Address 
    }

    type Query {
        user(id: String): User
        users: [User]
    }

`);



// The root provides a resolver function for each API endpoint
const root = {
    user: function({ id }) {
        return fakeDatabase.users[id];
    },

    users: function() {
        return fakeDatabase.users;
    }
};




//  Array type database
const fakeDatabase = {
    users: 
    [
        {
            id: 0,
            firstName: 'Andy',
            lastName: 'Smith',
            age: 69,
            hobbies: [
                'Walking',
                'Jumping',
                'Whistling'
            ],
            address: {
                street: 'Andy\'s street',
                apartment: 'A14',
                city: 'Kensington',
                zipCode: '556647',
                country: 'Someland'
            }
        },
        {
            id: 1,
            firstName: 'John',
            lastName: 'Doe',
            age: 20,
            hobbies: [
                'Loitering',
                'Drinking',
                'Fucking around'
            ],
            address: {
                street: 'John\'s street',
                apartment: '50',
                city: 'Brighton',
                zipCode: '993354',
                country: 'Otherland'
            }
        },
        {
            id: 2,
            firstName: 'Jason',
            lastName: 'Spalding',
            age: 45,
            hobbies: [
                'Cars',
                'Videogames',
                'Watching movies'
            ],
            address: {
                street: 'Jason\'s street',
                apartment: 'D60',
                city: 'Stanton',
                zipCode: '994466',
                country: 'Whateverland'
            }
        }
    ]
};



const app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));


const port = 4000;
app.listen(port, console.log('Running a GraphQL API server at localhost:' + port + '/graphql'));