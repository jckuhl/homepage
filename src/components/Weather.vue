<template>
    <div>
        <div v-if="wxLoaded">
            <h2>Weather for {{ weather.name}}, {{ weather.sys.country }}</h2>
            <ul>
                <li v-for="wx of weather.weather" :key="wx.id">
                    <p>{{ wx.main }}</p>
                    <p>{{ wx.description }}</p>
                </li>
            </ul>
            {{ weather }}
        </div>
        <div v-else>
            <h3>Please wait, your weather is loading</h3>
        </div> 
    </div>
</template>

<script>
import Weather from './../models/weather.js';
export default {
    data() {
        return {
            weather: Weather,
            wxLoaded: false
        }
    },
    async created() {
        this.weather = await Weather.getLocalWeather();
        this.wxLoaded = true;
    }
}
</script>
