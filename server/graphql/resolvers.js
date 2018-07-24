// Imports: Axios
import axios from 'axios';

// Imports: API Key
import APIKEY from '/Users/jefflewis/Documents/Computer-Programming/Projects/Converted GraphQL REST APIs/epa-envirofacts-rest-api-to-graphql/config/config.js';

const CSV = require('csvtojson');

// GraphQL: Resolvers
const RESOLVERS = {
  Query: {

    // TOXIC RELEASE INVENTORY (TRI) CHEMICAL HAZARD INFORMATION PROFILES
    // Get Health Effect Descriptions
    getToxicReleaseInventoryHealthDescriptions: async (parent, args) => {
      return await axios.get(`https://iaspub.epa.gov/enviro/efservice/HEALTH_EFFECT_DESCRIPTIONS/JSON/`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    // Get All Chemicals
    getAllChemicals: async (parent, args) => {
      return await axios.get(`https://iaspub.epa.gov/enviro/efservice/HEALTH_EFFECT_DESCRIPTIONS/chemicals/JSON/`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    // Get Toxic Release Inventory by CAS Number
    getToxicReleaseInventoryByCASNumber: async (parent, args) => {
      let cas = args.casNumber.toUpperCase();

      return await axios.get(`https://iaspub.epa.gov/enviro/efservice/HEALTH_EFFECT_DESCRIPTIONS/cas_number/=/${cas}/JSON`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    // Get Toxic Release Inventory by Chemical (Styrene)
    getToxicReleaseInventoryByChemical: async (parent, args) => {
      let chemical = args.chemical.toUpperCase();

      return await axios.get(`https://iaspub.epa.gov/enviro/efservice/HEALTH_EFFECT_DESCRIPTIONS/chemical/=/${chemical}/JSON/`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },






    // Get Number of all TOXIC RELEASE INVENTORY (TRI) Facility Companies in the United States
    getNumberOfAllToxicReleaseInventoryFacilities: (parent, args) => {
      return axios.get(`https://iaspub.epa.gov/enviro/efservice/tri_facility/COUNT/JSON/`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },

    // Get Number of all TOXIC RELEASE INVENTORY (TRI) Facility Companies by State
    getNumberOfAllToxicReleaseInventoryFacilitiesByState: (parent, args) => {
      return axios.get(`https://iaspub.epa.gov/enviro/efservice/tri_facility/state_abbr/${args.stateAbbreviation}/COUNT/CSV`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },







    // // Public Water Systems And Environmental Violations
    // // Get all Public Water Systems By County
    // getAllPublicWaterSystemsByCounty: (parent, args) => {
    //   let county = args.county.toUpperCase();

    //   return axios.get(`https://iaspub.epa.gov/enviro/efservice/SDW_COUNTY_SERVED/COUNTYSERVED/${county}/JSON/`)
    //   .then((response) => response.data)
    //   .catch((error) => console.log(error))
    // },
    // // Description: I would like to know, within a specific county and state, the violations and enforcement actions for the different PWSs, as well as the definitions, health effects, and sources of contamination for any contaminants.
    // testFunction: (parent, args) => {
    //   let state = args.stateAbbreviation.toUpperCase();
    //   let city = args.city.toUpperCase();

    //   return axios.get(`https://iaspub.epa.gov/enviro/efservice/SDW_VIOL_ENFORCEMENT/COUNTYSERVED/${city}/STATE/${state}/JSON/`)
    //   .then((response) => response.data)
    //   .catch((error) => console.log(error));
    // },
    // // Description: I would like to know, for a specific PWS, the violations and enforcement actions, as well as the definitions, health effects, and sources of contamination for any contaminants.
    // testFunction: (parent, args) => {
    //   let pws = args.pws.toUpperCase();

    //   return axios.get(`https://iaspub.epa.gov/enviro/efservice/SDW_VIOL_ENFORCEMENT/PWSID/${pws}/JSON`)
    //   .then((response) => response.data)
    //   .catch((error) => console.log(error));
    // },
    // // Description: I would like to know, for a specific zip code, the violations and enforcement actions, as well as the definitions, health effects, and sources of contamination for any contaminants
    // getWaterViolationsByZipCode: (parent, args) => {
    //   let zipCode = args.zipCode.toUpperCase();

    //   return axios.get(`https://iaspub.epa.gov/enviro/efservice/SDW_CONTAM_VIOL_ZIP/geolocation_zip/=/${zipCode}/rows/1:10/JSON`)
    //   .then((response) => response.data)
    //   .catch((error) => console.log(error));
    // },
    // // Description: I would like to know, for a specific city and state, the violations and enforcement actions, as well as the definitions, health effects, and sources of contamination for any contaminants.
    // testFunction: (parent, args) => {
    //   let state = args.stateAbbreviation.toUpperCase();
    //   let city = args.city.toUpperCase();

    //   return axios.get(`https://iaspub.epa.gov/enviro/efservice/SDW_CONTAM_VIOL_CITY/geolocation_city/${city}/STATE/${state}/rows/1:10/JSON`)
    //   .then((response) => response.data)
    //   .catch((error) => console.log(error));
    // },  


    // // Facility Registry Systems
    // // Get all Facility Registry Systems
    // getAllFacilityRegistrySystems: (parent, args) => {
    //   let state = args.stateAbbreviation.toUpperCase();
    //   let city = args.city.toUpperCase();

    //   return axios.get(`http://ofmpub.epa.gov/enviro/frs_rest_services.get_facilities?state_abbr=${state}&city_name=${city}&facility_name=${facility}`)
    //   .then((response) => response.data)
    //   .catch((error) => console.log(error));
    // },      
    // // Get all Facility Registry Systems by State
    // getAllFacilityRegistrySystemsByState: (parent, args) => {
    //   let state = args.stateAbbreviation.toUpperCase();

    //   return axios.get(`http://ofmpub.epa.gov/enviro/frs_rest_services.get_facilities?state_abbr=${state}`)
    //   .then((response) => response.data)
    //   .catch((error) => console.log(error));
    // }, 
    // // Get all Facility Registry Systems by State and City
    // getAllFacilityRegistrySystemsByStateAndCity: (parent, args) => {
    //   let state = args.stateAbbreviation.toUpperCase();
    //   let city = args.city.toUpperCase();

    //   return axios.get(`http://ofmpub.epa.gov/enviro/frs_rest_services.get_facilities?state_abbr=${state}&city_name=${city}`)
    //   .then((response) => response.data)
    //   .catch((error) => console.log(error));
    // }, 
    // // Get Facility Registry Systems 
    // getFacilityRegistrySystemByFacilityName: (parent, args) => {
    //   let state = args.stateAbbreviation.toUpperCase();
    //   let city = args.city.toUpperCase();

    //   return axios.get(`http://ofmpub.epa.gov/enviro/frs_rest_services.get_facilities?state_abbr=${state}&city_name=${city}&facility_name=${facility}
    //   `)
    //   .then((response) => response.data)
    //   .catch((error) => console.log(error));
    // }, 



    // // Environmental Regulations
    // // Description: Will return all of the compliance records for ZIP Code 60085  
    // testFunction: (parent, args) => {
    //   let zipCode = args.zipCode.toUpperCase();

    //   return axios.get(`https://iaspub.epa.gov/enviro/efservice/t_compliance_echo/zip/${zipCode}/JSON`)
    //   .then((response) => response.data)
    //   .catch((error) => console.log(error));
    // },
    // // Environmental Regulations
    // // Description: return all of the compliance records for by City and State
    // testFunction: (parent, args) => {
    //   let state = args.stateAbbreviation.toUpperCase();
    //   let city = args.city.toUpperCase();

    //   return axios.get(`https://iaspub.epa.gov/enviro/efservice/t_compliance_echo/city/${city}/state/${state}/JSON`)
    //   .then((response) => response.data)
    //   .catch((error) => console.log(error));
    // },  
    // // Environmental Regulations
    // // Description: return all of the compliance records whos current compliance records are listed as "serious violations(s)" in Washington, DC as a JSON output.
    // testFunction: (parent, args) => {
    //   let state = args.stateAbbreviation.toUpperCase();
    //   let city = args.city.toUpperCase();

    //   return axios.get(`https://iaspub.epa.gov/enviro/efservice/t_compliance_echo/city/${city}/state/${state}/CURR_COMP_STATUS/serious%20violation(s)/JSON`)
    //   .then((response) => response.data)
    //   .catch((error) => console.log(error));
    // },  


    // // Concentrated Animal Feeding Operations
    // // Description: Will return the first 10,000 Animal Feeding Operations CAFO Records
    // getAllConcentratedAnimalFeedingOperationsFirst10000: (parent, args) => {
    //   return axios.get(`https://iaspub.epa.gov/enviro/efservice/V_ICIS_FACILITY_CAFO/excel/`)
    //   .then((response) => response.data)
    //   .catch((error) => console.log(error));
    // },
    // // Environmental Regulations
    // // Description: return all of the Animal Feeding Operations by City and State
    // getAllConcentratedAnimalFeedingOperationsByState: (parent, args) => {
    //   let state = args.stateAbbreviation.toUpperCase();

    //   return axios.get(`https://iaspub.epa.gov/enviro/efservice/V_ICIS_FACILITY_CAFO/state_code/${state}/rows/1:2/JSON`)
    //   .then((response) => response.data)
    //   .catch((error) => console.log(error));
    // },  
    // // Environmental Regulations
    // // Description: return all of the Animal Feeding Operations by Zip Code
    // getAllConcentratedAnimalFeedingOperationsByZipCode: (parent, args) => {
    //   return axios.get(`https://iaspub.epa.gov/enviro/efservice/V_ICIS_FACILITY_CAFO/zip/${args.zipCode}/rows/1:2/JSON/`)
    //   .then((response) => response.data)
    //   .catch((error) => console.log(error));
    // },  

    getDailyUVIndexByZipCode: async (parent, args) => {
      return axios.get(`https://iaspub.epa.gov/enviro/efservice/getEnvirofactsUVDAILY/ZIP/{args.zipCode}/JSON`)
      let fuck = response.data

      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
    },

    // Get all Safer Choice Labeled Products
    getAllSaferChoiceLabeledProducts: (parent, args) => {
      return axios.get(`https://iaspub.epa.gov/enviro/efservice/t_design_for_environment/JSON/rows/1:2`)
      .then((response) => response.data)
      .catch((error) => console.log(error));
    },
  },





  // PCS_PERMIT_FACILITY
  // Descriptipn: returns the first 10000 records from PCS_PERMIT_FACILITY table where the MAJOR_DISCHARGE_INDICATOR = ‘M’.
  getPCSPermitFacilitiesWithMajorDischarge: (parent, args) => {
    return axios.get(`https://iaspub.epa.gov/enviro/efservice/pcs_permit_facility/major_discharge_indicator/M/JSON`)
    .then((response) => response.data)
    .catch((error) => console.log(error));
  },
}

// Exports
export default RESOLVERS;