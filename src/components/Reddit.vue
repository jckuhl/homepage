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
            postsPerReddit: 10
        }
    },
    async created() {
        this.reddit = (await Reddit.getRedditPosts('learnjavascript')).data.children.slice(this.postsPerReddit);
    }
}
</script>
