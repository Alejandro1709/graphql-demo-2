import { makeExecutableSchema } from '@graphql-tools/schema';
import { resolvers } from './resolvers.js';

const typeDefs = `
    type Query {
        hello: String
        greet(name: String!): String
        hotels: [Hotel]
    }

    type Hotel {
        id: ID!
        hotelName: String!
        hotelImages: String
        hotelWebsite: String
        hotelSlug: String
        hotelPrice: String!
        hotelLocation: String!
    }
`;

export default makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers,
});
