<template>
    <div>
        <h3><a :href="post.data.url">{{ post.data.title }}</a></h3>
        <h5>{{ post.data.author }}</h5>
        <p>{{ post.data.subreddit_name_prefixed }}</p>
        <p>{{ post.data.selftext }}</p>
    </div>
</template>

<script>
export default {
    props: {
        post: Object
    }
}
</script>
