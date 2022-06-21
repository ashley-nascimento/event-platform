import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: '{link_da_api}',
    cache: new InMemoryCache()
})