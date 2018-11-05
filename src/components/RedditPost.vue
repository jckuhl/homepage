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

        /**
         * Parses the post.data.selftext_html, if it exists, into workable HTML
         */
        postHtml() {
            let html = this.post.data.selftext_html;

            // necessary regex to allow HTML to parse tags and special characters
            // zeroth element is the regex, first element is what replaces its matches.
            const REGEXP = [
                [ /(&lt;)/gui, '<'],
                [ /(&gt;)/gui, '>'],
                [ /(&amp;)/gui, '&'],
                [ /(\\n)/gui, '<br>']
            ]

            if(html) {
                REGEXP.forEach(regex=> html = html.replace(regex[0], regex[1]));
                return html;
            }

            //if post.data.selftext_html doesn't exist, return the non-html version which is usually ""
            return this.post.data.selftext;
        },
        subredditURL() {
            return this.BASE_URL + this.post.data.subreddit_name_prefixed;
        }
    },
    filters: {
        derp(string) {
            return '¯\_(ツ)_/¯ '
        }
    }
}
</script>

<style>
</style>
