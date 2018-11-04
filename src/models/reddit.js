export default {
    BASE_URI: 'https://www.reddit.com/r/',
    getRedditPosts: async function(subreddit) {
        return (await fetch(this.BASE_URI + subreddit + '.json')).json();
    },
    getSubscribedSubs: function() {

        // TODO find a way to get all subreddits I'm subbed to
        return new Promise((resolve)=> resolve(['learnjavascript', 'typescript']));
    }
}