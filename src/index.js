const {ApolloServer} = require('apollo-server')
const typeDefs = require('./schema')
const CountryAPI = require('./datasources/country');
const resolvers = require('./resolvers');


const dataSources = () => ({
    CountryAPI: new CountryAPI(),
  });

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources,
    engine: {
        apiKey: "service:Ifunanyacollins-9483:5sM5bKjFO6rcbUF2lRXA9A"
     }
})




server
.listen({ port: 4000 })
.then(({ url }) => console.log(`🚀 app running at ${url}`));