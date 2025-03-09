
const { ApolloServer } = require("@apollo/server"); // @apollo/server 4버전 migration
const { startStandaloneServer } = require("@apollo/server/standalone");
import { schema } from "./graphql/schema"; // Nexus 스키마 사용
import { PrismaClient } from "@prisma/client";

// const TrackAPI = require("./datasources/track-api");
const port = process.env.PORT || 4000;

const prisma = new PrismaClient();

async function startApolloServer() {
    const server = new ApolloServer({ schema });

    // prisma 사용
    const { url } = await startStandaloneServer(server, {
        context: async () => ({ prisma }),
    });

    console.log(`
      🚀  Server is running
      🔉  Listening on port ${port}
      📭  Query at ${url}
    `);
}

startApolloServer();

// apollo-server 3 코드
// const server = new ApolloServer({
//     schema,
//     context: createContext,
// });

// server.listen({ port: 4000 }).then(({ url }) => {
//     console.log(`🚀 Server ready at ${url}`);
// });
