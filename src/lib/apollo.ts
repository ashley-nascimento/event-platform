import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oqqm7h0vxs01z48zqm7mnp/master',
    cache: new InMemoryCache()
})