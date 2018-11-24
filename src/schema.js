const {gql} = require('apollo-server')

const typeDef = gql`

type Query{
    countries(
        """
        The number of results to show. Must be >= 1. Default = 20
        """
        pageSize: Int
        """
        If you add a cursor here, it will only return results _after_ this cursor
        """
        after: String
      ):  [Country]!
      country(name:String!):Country!
}

type Country{
    name:String!
    topLevelDomain:[String!]
    alpha2Code:String!
    alpha3Code:String!
    callingCodes:[String!]
    capital:String!
    altSpellings:[String!]
    region:String!
    subregion:String!
    population:Int!
    latlng:[Float!]
    demonym:String!
    area:Float!
    timezones:[String!]
    currencies:Currency!
    flag:String!
}

type Currency{
    code:String!
    name:String!
    symbol:String!
}

`

module.exports = typeDef