<template>
    <div class="container">
        <div class="clock">
            {{ time }}
        </div>
    </div>
</template>

<script>
import { format } from 'date-fns';

export default {
    name: 'Clock',
    data() {
        return {
            time: 0
        }
    },
    methods: {
        startClock() {
            setInterval(()=> {
                this.time = format(new Date(), 'hh:mm:ss');
            }, 500);
        }
    },
    mounted() {
        this.startClock();
    }
}
</script>

<style scoped>
    .clock {
        border: 10px solid white;
        border-radius: 20px;
        font-size: 5rem;
        font-weight: bold;
        color: white;
        display: inline-block;
        text-align: center;
        padding: 2rem;
    }

    .container {
        width: 100%;
        display: block;
        text-align: center;
    }
</style>


