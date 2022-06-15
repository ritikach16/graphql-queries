
const tweet = [
    {
        id: "tweet_1",
        body: "This is your Tweet Content",
        date: "2014-01-01T23:28:56.782Z",
        authorId: "user_1",
        stats: "tweet_1"

    },
    {
        id: "tweet_2",
        body: "This is your Tweet Content",
        date: "2014-01-01T23:28:56.782Z",
        authorId: "user_2",
        stats: "tweet_2"
    },
    {
        id: "tweet_3",
        body: "This is your Tweet Content",
        date: "2014-01-01T23:28:56.782Z",
        authorId: "user_3",
        stats: "tweet_3"
    },
    {
        id: "tweet_4",
        body: "This is your Tweet Content",
        date: "2014-01-01T23:28:56.782Z",
        authorId: "user_4",
        stats: "tweet_4"
    }

];

const user = [
    {
        id: "user_1",
        username: "rc16",
        first_name: "ritika",
        last_name: "chauhan",
        name: "Ritika Chauhan",
        avatar_url: "https://cdn-icons-png.flaticon.com/512/1946/1946429.png"

    },

    {
        id: "user_2",
        username: "rc16",
        first_name: "john",
        last_name: "doe",
        name: "John Doe",
        avatar_url: "https://cdn-icons-png.flaticon.com/512/1946/1946429.png"
    },

    {
        id: "user_3",
        username: "rc16",
        first_name: "marrie",
        last_name: "disuza",
        name: "Marrie Disuza",
        avatar_url: "https://cdn-icons-png.flaticon.com/512/1946/1946429.png"
    },

    {
        id: "user_4",
        username: "rc16",
        first_name: "kinsey",
        last_name: "wheeler",
        name: "Kinsey Wheeler",
        avatar_url: "https://cdn-icons-png.flaticon.com/512/1946/1946429.png"
    }

];

const notification = [
    {
        id: "user_1",
        date: "2014-01-01T23:28:56.782Z",
        type: "tweet response"
    },

    {
        id: "user_2",
        date: "2014-01-01T23:28:56.782Z",
        type: "tweet response"
    },

    {
        id: "user_3",
        date: "2014-01-01T23:28:56.782Z",
        type: "tweet response"
    },

    {
        id: "user_4",
        date: "2014-01-01T23:28:56.782Z",
        type: "tweet response"
    },
];

const stat = [
    {
        id: "tweet_1",
        views: 19050,
        likes: 12,
        retweets: 20,
        responses: 100
    },

    {
        id: "tweet_2",
        views: 19050,
        likes: 12,
        retweets: 202,
        responses: 100
    },

    {
        id: "tweet_3",
        views: 19050,
        likes: 12,
        retweets: 203,
        responses: 100
    },

    {
        id: "tweet_4",
        views: 19050,
        likes: 12,
        retweets: 204,
        responses: 100
    }

];

const meta = [
    {
        count: 30
    }

];

exports.db = {
    tweet,
    user,
    notification,
    stat,
    meta
}


