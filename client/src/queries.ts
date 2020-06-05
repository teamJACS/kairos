import gql from 'graphql-tag'

export const GET_USER = gql`
query user($userId: ID!){
  user(userId: $userId) {
    id,
    jobs {
      id
      company
      location
      notes,
      jobTitle
  }
  }
}
`

export const GET_JOB = gql`
query getJob ($userId: ID!, $jobId: ID!) {
  getJob (userId: $userId, jobId: $jobId) {
    company
    jobTitle
    statusId
    notes
    location
  }
}
`




export const AUTH_USER = gql`
query auth ($email: String!, $password: String!){
  auth (email: $email, password: $password) {
    id
  }
}
`

export const CREATE_JOB = gql`
mutation createJob(
  $statusId: String!,
  $userId: String!,
  $company: String!,
  $jobTitle: String!,
  $location: String,
  $notes: String,
  $dateApplied: String
){
  createJob(
    statusId: $statusId, 
    userId: $userId, 
    company: $company, 
    jobTitle: $jobTitle, 
    location: $location, 
    notes: $notes, 
    dateApplied: $dateApplied
  ) {
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