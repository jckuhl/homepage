<template>
    <div>
        <h3><a :href="url">{{ post.data.title }}</a></h3>
        <h5>{{ post.data.author }}</h5>
        <p><a :href="subredditURL">{{ post.data.subreddit_name_prefixed }}</a></p>
        <p><img v-if="post.data.thumbnail !== 'self'" :src="post.data.thumbnail" :alt="post.data.title"></p>
        <p v-html="postHtml"></p>
    </div>
</template>

<script>
export default {
    props: {
        post: Object
    },
    data() {
        return {
            BASE_URL: 'https://www.reddit.com/'
        }
    },
    computed: {
        url() {
            return this.BASE_URL + this.post.data.permalink
        },
        postHtml() {
            let html = this.post.data.selftext_html;
            if(html) {
                return html.replace(/(&lt;)/g, '<').replace(/(&gt;)/g, '>');
            }
            return this.post.data.selftext;
        },
        subredditURL() {
            return this.BASE_URL + this.post.data.subreddit_name_prefixed;
        }
    }
}
</script>