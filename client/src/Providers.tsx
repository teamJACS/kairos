import React from "react";
import { Routes } from "../components/Routes";
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { Provider } from 'react-redux'
import store from '../redux/store'


interface ProvidersProps { }

export const Providers: React.FC<ProvidersProps> = ({ }) => {
  const uri = 'http://localhost:3000/graphql'

  const client = new ApolloClient({ uri })

  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Routes />
      </ApolloProvider>
    </Provider>
  );
};