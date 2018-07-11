const { GraphQLServer } = require("graphql-yoga");
const { Prisma } = require("prisma-binding");
const resolvers = require("./resolvers");

const server = new GraphQLServer({
  typeDefs: "src/schema.graphql",
  resolvers,
  context: req => ({
    ...req,
    prisma: new Prisma({
      typeDefs: "src/generated/prisma.graphql",
      endpoint: "https://us1.prisma.sh/kyle-rothenbaum-e9a77b/tireless/dev"
    })
  })
});

server.start(() =>
  console.log(`GraphQL server is running on http://localhost:4000`)
);
