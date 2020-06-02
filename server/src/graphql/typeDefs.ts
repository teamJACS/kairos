import { gql } from 'apollo-server';

//specify the actual structure of the graphql API
const typeDefs = gql`
  type User {
    id: ID!
    jobs: [Job]!
  }

  type Status {
    id: ID!
    status: String
  }

  type Job {
    id: ID!
    location: String
    company: String
    notes: String
    status: Status
    dateApplied: String
  }

  type Query {
    user: User! 
  }
`

export default typeDefs