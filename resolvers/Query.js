exports.Query = {
    tweet: (parent, {id}, {db}) => {
        return db.tweet.find((tweet) => {
            // console.log("checking " + tweet.id + " " + id); ----> working fine
            tweet.id === id
        })
    },

    tweets: (parent, {filter}, {db}) => {
        let tweets = db.tweet;
        if(filter){
            const {limit, skip, sort_field, sort_order} = filter;


            if(limit){
               tweets = tweets.slice(0, limit)
            };

            if(skip){
                tweets.splice(skip, 1);
            }

            if(sort_field){
                tweets.sort((a,b) => a.date - b.date);
            }
        }

        return tweets
    },

    tweetsMeta: (parent, args, {db}) => {
        return db.meta[0]
    },

    user: (parent, {id}, {db}) => {
        return db.user.find((user) =>    user.id === id )
    },

    notifications: (parent, {limit}, {db}) => {
        return db.notifications;
    }
}