import {ApolloClient, InMemoryCache} from "@apollo/client";

const NewClient = (token: string) => new ApolloClient({
    uri: 'https://api.sputnik.systems/query',
    cache: new InMemoryCache({
        addTypename: false
    }),
    headers: {
        Authorization: token
    }
});

export default NewClient;
