// Imports: Axios
import axios from 'axios';

// Imports: API Key
import APIKEY from '/Users/jefflewis/Documents/Computer-Programming/Projects/Converted GraphQL REST APIs/epa-envirofacts-rest-api-to-graphql/config/config.js';


// GraphQL: Resolvers
const RESOLVERS = {
  Query: {

    // Toxic Release Inventory (TRI) Chemical Hazard Information Profiles


    // Safe Drinking Water Information System (SDWIS)
    // Description: I would like to know, within a specific county, what are the different Public Water Systems (PWSs), the population served by each one, the regulating agency, and the contact name and phone number.
    testFunction: (parent, args) => {
      let county = toUpperCase(args.county);

      return axios.get(`https://iaspub.epa.gov/enviro/efservice/SDW_COUNTY_SERVED/${county}/ACCOMACK/JSON`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    // Safe Drinking Water Information System (SDWIS)
    // Description: I would like to know, within a specific county and state, the violations and enforcement actions for the different PWSs, as well as the definitions, health effects, and sources of contamination for any contaminants.
    testFunction: (parent, args) => {
      let city = toUpperCase(args.city);
      let state = toUpperCase(args.stateAbbreviation);

      return axios.get(`https://iaspub.epa.gov/enviro/efservice/SDW_VIOL_ENFORCEMENT/COUNTYSERVED/${city}/STATE/${state}/JSON`)
      .then((response) => response.data)
      .catch((error) => console.log(error));
    },
    // Safe Drinking Water Information System (SDWIS)
    // Description: I would like to know, for a specific PWS, the violations and enforcement actions, as well as the definitions, health effects, and sources of contamination for any contaminants.
    testFunction: (parent, args) => {
      let pws = toUpperCase(args.pws);

      return axios.get(`https://iaspub.epa.gov/enviro/efservice/SDW_VIOL_ENFORCEMENT/PWSID/${pws}/JSON`)
      .then((response) => response.data)
      .catch((error) => console.log(error));
    },
    // Safe Drinking Water Information System (SDWIS)
    // Description: I would like to know, for a specific zip code, the violations and enforcement actions, as well as the definitions, health effects, and sources of contamination for any contaminants
    testFunction: (parent, args) => {
      let zipCode = toUpperCase(args.zipCode);

      return axios.get(`https://iaspub.epa.gov/enviro/efservice/SDW_CONTAM_VIOL_ZIP/geolocation_zip/=/${zipCode}/rows/1:10/JSON`)
      .then((response) => response.data)
      .catch((error) => console.log(error));
    },
    // Safe Drinking Water Information System (SDWIS)
    // Description: I would like to know, for a specific city and state, the violations and enforcement actions, as well as the definitions, health effects, and sources of contamination for any contaminants.
    testFunction: (parent, args) => {
      let city = toUpperCase(args.city);
      let state = toUpperCase(args.stateAbbreviation);

      return axios.get(`https://iaspub.epa.gov/enviro/efservice/SDW_CONTAM_VIOL_CITY/geolocation_city/${city}/STATE/${state}/rows/1:10/JSON`)
      .then((response) => response.data)
      .catch((error) => console.log(error));
    },  



    // Environmental Regulations
    // Description: Will return all of the compliance records for ZIP Code 60085  
    testFunction: (parent, args) => {
      let zipCode = toUpperCase(args.zipCode);

      return axios.get(`https://iaspub.epa.gov/enviro/efservice/t_compliance_echo/zip/${zipCode}/JSON`)
      .then((response) => response.data)
      .catch((error) => console.log(error));
    },
    // Environmental Regulations
    // Description: return all of the compliance records for by City and State
    testFunction: (parent, args) => {
      let city = toUpperCase(args.city);
      let state = toUpperCase(args.stateAbbreviation);

      return axios.get(`https://iaspub.epa.gov/enviro/efservice/t_compliance_echo/city/${city}/state/${state}/JSON`)
      .then((response) => response.data)
      .catch((error) => console.log(error));
    },  
    // Environmental Regulations
    // Description: return all of the compliance records whos current compliance records are listed as "serious violations(s)" in Washington, DC as a JSON output.
    testFunction: (parent, args) => {
      let city = toUpperCase(args.city);
      let state = toUpperCase(args.stateAbbreviation);

      return axios.get(`https://iaspub.epa.gov/enviro/efservice/t_compliance_echo/city/${city}/state/${state}/CURR_COMP_STATUS/serious%20violation(s)/JSON`)
      .then((response) => response.data)
      .catch((error) => console.log(error));
    },  




  }
};

// Exports
export default RESOLVERS;