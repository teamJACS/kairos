import gql from 'graphql-tag'

export const GET_USER  = gql`
query user($userId: ID!){
  user(userId: $userId) {
    id,
    jobs {
      id
      company
      location
      notes
  }
  }
}
`

export const AUTH_USER  = gql`
query auth ($email: String!, $password: String!){
  auth (email: $email, password: $password) {
    id
  }
}
`

export const CREATE_USER = gql`
mutation createUser($email: String!, $password: String!) {
  createUser(email: $email, password: $password) {
    id
  }
}
`