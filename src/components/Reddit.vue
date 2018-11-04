<template>
    <div>
        Reddit
        <div v-for="(subreddit, index) of reddit" :key="index">
            <reddit-post v-for="post of subreddit" :post="post" :key="post.data.id" />
        </div>
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
            postsPerReddit: 10
        }
    },
    async created() {
        this.subreddits = await Reddit.getSubscribedSubs();
        this.reddit = (await Promise
                            .all(this.subreddits.map(sub => Reddit.getRedditPosts(sub)))
                            .then(sub => sub))
                            .map(sub => sub.data.children);
    }
}
</script>
