<template>
    <div class="container">
        <div class="clock">
            {{ time }}
        </div>
        <div>
            <h1>{{ date }}</h1>
        </div>
    </div>
</template>

<script>
import { format } from 'date-fns';

export default {
    name: 'Clock',
    data() {
        return {
            time: '',
            date: '',
        }
    },
    methods: {
        startClock() {
            setInterval(()=> {
                this.time = format(new Date(), 'hh:mm:ss');
                this.date = format(new Date(), 'dddd, MMMM D, YYYY');
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


