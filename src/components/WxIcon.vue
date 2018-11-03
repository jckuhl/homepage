<template>
    <img :src="src" :alt="alt" :title="alt">
</template>

<script>
export default {
    props: {
        icon: String,
        alt: String
    },
    computed: {
        src: function() {
            return `http://openweathermap.org/img/w/${this.icon}.png`
        }
    }
}
</script>

