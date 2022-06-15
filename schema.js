const {gql} = require("apollo-server");

exports.typeDefs = gql `

type Query{
   tweet(id: ID!): Tweet
   tweets(filter: TweetFilterInput): [Tweet!]!
   tweetsMeta: Meta
   user(id: ID!): User
   notifications(limit: Int): [Notification]
   notificationsMeta: Meta
}

type Tweet{
    id: ID!
    body: String
    date: String
    authorId: User
    stats: Stat
}

type User{
   id: ID!
   username: String
   first_name: String
   last_name: String
   full_name: String
   name: String 
   avatar_url: String
}

type Notification{
    id: ID! #user Id
   String: String
   type: String
}

type Stat{
    id: ID!
    views: Int
    likes: Int
    retweets: Int
    responses: Int
}

type Meta{
    count: Int
}


type Mutation{
    createTweet ( input: CreateTweet ): Tweet
   deleteTweet(id: ID!): Tweet
   markTweetRead(id: ID!): Boolean
}

input TweetFilterInput{
     limit: Int
     skip: Int
     sort_field: String
     sort_order: String
}

input CreateTweet{
    body: String
}

`