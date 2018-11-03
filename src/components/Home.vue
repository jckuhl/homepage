<template>
    <div>
        <clock />
        <weather />
    </div>
</template>

<script>
import Clock from './Clock';
import Weather from './Weather';

export default {
    components: {
        Clock,
        Weather
    }
}
</script>
