const { paginateResults } = require('./utils');

module.exports = {
  Query: {
    countries: async (_, { pageSize = 20, after }, { dataSources }) => {
      const allLaunches = await dataSources.CountryAPI.getAllCountries();
      // we want these in reverse chronological order
      allLaunches.reverse();

      const countries = paginateResults({
        after,
        pageSize,
        results: allLaunches,
      });
 
      return countries
  
    },

    country: async (_,{name},{dataSources}) => {
      const country = await dataSources.CountryAPI.getCountryByName({name})
      return country;
    }
  },

}