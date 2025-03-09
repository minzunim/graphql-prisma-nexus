import { ApolloServer } from 'apollo-server';
import { schema } from './graphql/schema';
import { createContext } from './context';

const server = new ApolloServer({
    schema,
    context: createContext,
});

server.listen({ port: 4000 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
