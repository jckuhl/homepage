<template>
    <div class="bubble">
        {{ notifications }}
        <a :href="src" v-if="src">Go</a>
    </div>
</template>

<script>
export default {
    props: {
        notifications: Number,
        src: String
    }
}
</script>

<style scoped>

    .bubble {
        background: darkslategray;
        color: white;
        border-radius: 25%;
        display: inline-block;
        padding: 3px;
    }

</style>
