
// typeDefs
const typeDefs = `
    type Book {
        _id: ID
        authors: [String]
        description: String
        bookId: String
        image: String
        forSale: String
        link: String
        title: String
    }
    type User {
        _id: ID
        username: String
        email: String
        password: String
        bookCount: Int
        savedBooks: [Book]        
    }
    type Query {
        me: User
      } 
    type Auth {
    token: ID!
    user: User
    }
    input SavedBookInput {
        authors: [String]
        description: String
        bookId: String
        image: String
        title: String
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(book: SavedBookInput): User
        removeBook(bookId: String!): User
}
`;

// export the typeDefs
module.exports = typeDefs;