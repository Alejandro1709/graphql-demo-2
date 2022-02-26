import { hotels } from './hotels.js';

export const resolvers = {
  Query: {
    hello: () => {
      return 'Hello World';
    },
    greet(root, args) {
      return `Hello ${args.name}`;
    },
    hotels() {
      return hotels;
    },
  },
};
