import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: '/graphql/',
  cache: new InMemoryCache(),
})
