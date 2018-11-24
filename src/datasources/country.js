const { RESTDataSource } = require('apollo-datasource-rest');

class CountryAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://restcountries.eu/rest/v2/';
  }

  // leaving this inside the class to make the class easier to test
  countryReducer(country) {
 
    return {
        name:country.name,
        topLevelDomain:country.topLevelDomain,
        alpha2Code:country.alpha2Code,
        alpha3Code:country.alpha3Code,
        callingCodes:country.callingCodes,
        capital:country.capital,
        altSpellings:country.altSpellings,
        region:country.region,
        subregion:country.subregion,
        population:country.population,
        latlng:country.latlng,
        demonym:country.demonym,
        area:country.area,
        timezones:country.timezones,
        flag:country.flag,
        currencies:{
            code:country.currencies[0].code,
            name:country.currencies[0].name,
            symbol:country.currencies[0].symbol
        }
    };
  }

  async getAllCountries() {
    const res = await this.get('all');

    // transform the raw launches to a more friendly
    return res && res.length ? res.map(l => this.countryReducer(l)) : [];
  }

  async getCountryByName({ name }) {
    const res = await this.get(`name/${name}`);
    return this.countryReducer(res[0]);
  }

  async getCountryByNames({ countryName }) {
    return Promise.all(
        countryName.map(name => this.getCountryById({ name })),
    );
  }
}

module.exports = CountryAPI;