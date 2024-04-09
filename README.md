# book-search-engine

The goal of this project is to refactor a fully functioning Google Books API search engine that is currently using a restful api to use graphql api and have an apollo server.

## The process

### What i did
* Updated auth in the server to work with graphql
* Updated the server file to implement the apollo server
* Added schema files that define the resolvers and typedefs
* Created queries and mutations in the front end to execute login, add user, save book and remove book
* Updated the app.jsx to create a apollo provider to connect with the server
* Updated the search book to use mutations instead of using the API file
* Updated the login and signup to use the mutation for the data
* Updated the savebook to use useQuery to find the user and usemutation to delete books

![Image of ]()
  
## Installation 
The final code tutorial can be found at https://book-search-engine-pnri.onrender.com
