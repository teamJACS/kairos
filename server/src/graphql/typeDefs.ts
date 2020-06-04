import { gql } from 'apollo-server';

//specify the actual structure of the graphql API
const typeDefs = gql`
  type User {
    id: ID!
    email: String
    password: String
    jobs: [Job]
  }

  type Status {
    id: ID!
    name: String
  }

  type Job {
    id: ID!
    location: String
    company: String
    notes: String
    statusId: String
    dateApplied: String
  }

  type Query {
    user(userId: ID!): User!
    auth(email: String!, password: String!): User
  }

  type Mutation {
    createUser(email: String!, password: String!): User!
  }
`

export default typeDefs