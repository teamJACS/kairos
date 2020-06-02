import "dotenv/config";
import { ApolloServer } from "apollo-server-express";
import * as cors from "cors";
import * as express from "express";

import "./src/db/connection";
import accessEnv from "./src/helpers/accessEnv";
import resolvers from "./src/graphql/resolvers";

import typeDefs from "./src/graphql/typeDefs"

const PORT = accessEnv("PORT", 3000);

const apolloServer = new ApolloServer({ resolvers, typeDefs })
const app = express();
app.use(express.json());

apolloServer.applyMiddleware({ app, path: "/graphql"})

app.listen(PORT, () => {
  console.info(`Server listening on ${PORT}`)
})