# Environmental Protection Agency GraphQL Server
Operation Refactor America's wrapped Environmental Protection Agency' REST API (Envirofacts) to GraphQL Server. The REST endpoints have been mapped as GraphQL types and resolvers. **Note: This API doesn't required an API Key.**

If you'd like to contribute to this project, please fork this repository and submit a pull request.

## On This Page
*  [About the Data](#about-the-data)
*  [About Operation Refactor America](#about-operation-refactor-america)
*  [GraphQL Server: Apollo Server](#graphql-server-apollo-server)
*  [GraphQL Server: Start](#graphql-server-start)
*  [GraphQL Server: Query](#graphql-server-query)
*  [GraphQL Server: Testing API Endpoints](#graphql-server-testing-api-endpoints)
*  [API Data: ](#api-data)
*  [GraphQL Query Examples](#graphql-query-examples)

## About Operation Refactor America
Operation Refactor America is a not associated with any governement agency, but our goal is to empower citizens with transparent data. Only a fraction of government agencies provide public APIs, which are usually poorly documented, built on archaic REST architecture, and contains scattered data. Our mission is to retreive that valuable data and convert them into an intuitive and modern API using GraphQL Server.

## About the Data
The data comes directly from the Environmental Protection Agency's REST API (Envirofacts). The REST endpoints have been mapped as GraphQL types and resolvers. A summary of endpoints and documentation can be found here: https://www3.epa.gov/enviro/

## GraphQL Server: Apollo Server
This GraphQL server uses apollo-server-express and not Facebook's graphql-express.

## GraphQL Server: Start
    npm run server

## GraphQL Server: Query
    http://localhost:4000/graphiql

## GraphQL Server: Testing API Endpoints
    npm jest

## API Data: 



## GraphQL Query Examples
### Example #1: 
**Query:**




### Example #2: 
**Query:**



**GraphQL Result:**




### Example #3: 
**Query:**



**GraphQL Result:**

