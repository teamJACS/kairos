
import React from "react";
import { AuthProvider } from "./AuthProvider";
import { Routes } from "../components/Routes";
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'



interface ProvidersProps { }

export const Providers: React.FC<ProvidersProps> = ({ }) => {
  const uri = 'http://localhost:3000/graphql'

  const client = new ApolloClient({ uri })

  return (
    <ApolloProvider client={client}>
      {/* <AuthProvider> */}
        <Routes />
      {/* </AuthProvider> */}
    </ApolloProvider>
  );
};