export default {
    BASE_URI: 'https://www.reddit.com/r/',
    getRedditPosts: async function(subreddit) {
        return await fetch(this.BASE_URI + subreddit + '.json')
                                .then(response => response.json())
                                .then(data => data);
    }
}