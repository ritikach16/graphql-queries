const { v4: uuid } = require("uuid");

exports.Mutation = {
    createTweet: (parent, {input}, {db}) => {
        const newTweet = {
            id: uuid(),
            body: input.body,
            date: new Date(),
        }

        db.tweet.push(newTweet);
        return newTweet;
    },

    deleteTweet: (parent, {id}, {db}) => {
        const tweet = db.tweet.find(tweet => tweet.id === id);
        db.tweet = db.tweet.filter(tweet => tweet.id!==id);
        return tweet;
    },
    
    markTweetRead: (parent, {id}, {db}) => {
        for(let i=0;i<db.tweet.length;i++)
        {
            if(db.tweet[i].id===id)
            {
                db.tweet[i].stats.views++;
                return true;
            }
        }

        return false;
        
    }
}
