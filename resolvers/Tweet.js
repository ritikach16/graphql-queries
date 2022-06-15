exports.Tweet = {

    authorId: (parent, args, {db}) => {
       
        const ans = db.user.find((u) => {
           return u.id == parent.authorId
        })
        return ans;
    
    },

    stats: (parent, args, {db}) => {
    //  console.log( parent.stats);
        return db.tweet.find((t) => t.id == parent.stats )
    }

}