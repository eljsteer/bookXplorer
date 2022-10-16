const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Book {
    _id: ID!
    authors: String
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type User {
    _id: ID!
    username: String! @unique
    email: String! @unique
    password: String!
    savedBooks: [Books]
  }

  type Query {
    books: [Book]
    getBook:(_id: String): Book
    users: [User]
    getUser:(_id: String): User
  }

  type Mutation {
    createUser(username: String!, email: String, password: String!): User
    saveBook(savedBooks: [Books]): User
  }
`