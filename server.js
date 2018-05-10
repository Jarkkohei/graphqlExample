const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
    type User {
        id: Int
        firstName: String
        lastName: String
        age: Int
        hobbies: [String]
    }

    type Query {
        user(id: String): User
        users: [User]
    }
`);


// The root provides a resolver function for each API endpoint
const root = {
    user: function({ id }) {
        return fakeDatabase[id];
    },

    users: function() {
        return fakeDatabase;
    }
};




//  Array type database
const fakeDatabase = [
    {
        id: 0,
        firstName: 'Andy',
        lastName: 'Smith',
        age: 69,
        hobbies: [
            'Walking',
            'Jumping',
            'Whistling'
        ]
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
        ]
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
        ]
    }
];


/*  Object type database
const fakeDatabase = {
    1: {
        id: 1,
        firstName: 'Andy',
        lastName: 'Smith',
        age: 69,
        hobbies: [
            'Walking',
            'Jumping',
            'Whistling'
        ]
    },
    2: {
        id: 2,
        firstName: 'John',
        lastName: 'Doe',
        age: 20,
        hobbies: [
            'Loitering',
            'Drinking',
            'Fucking around'
        ]
    },
    3: {
        id: 3,
        firstName: 'Jason',
        lastName: 'Spalding',
        age: 45,
        hobbies: [
            'Cars',
            'Videogames',
            'Watching movies'
        ]
    }
};
*/



const app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));


const port = 4000;
app.listen(port, console.log('Running a GraphQL API server at localhost:' + port + '/graphql'));