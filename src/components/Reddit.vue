<template>
    <div>
        Reddit
        <reddit-post v-for="post of reddit" :post="post" :key="post.data.id" />
    </div>
</template>

<script>
import RedditPost from './RedditPost';
import Reddit from './../models/reddit.js';

export default {
    components: {
        RedditPost
    },
    data() {
        return {
            reddit: {},
            subreddits: [],
            postsPerReddit: 25
        }
    },
    async created() {
        this.subreddits = await Reddit.getSubscribedSubs();
        
        // grab the reddit posts
        this.reddit = (await Promise
                            .all(this.subreddits.map(sub => Reddit.getRedditPosts(sub))))

                            // then create an array of just the posts, ignoring the meta data
                            .map(sub => sub.data.children)

                            // reduce to a single array
                            .reduce((subreddits, subreddit)=> subreddits.concat(subreddit), [])

                            // and sort by date
                            .sort((postA, postB)=> postA.data.created_utc - postB.data.created_utc)
                            .slice(0,this.postsPerReddit);
    }
}
</script>

