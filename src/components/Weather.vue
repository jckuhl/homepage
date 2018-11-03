<template>
    <div>
        <div v-if="wxLoaded">
            <h2>Weather for {{ weather.name}}</h2>
            <ul>
                <li v-for="wx of weather.weather" :key="wx.id">
                    <p>{{ wx.main }}</p>
                    <p>{{ wx.description | title }}</p>
                    <wx-icon :icon="wx.icon" :alt="wx.description" />
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
import WxIcon from './WxIcon';

export default {
    components: {
        WxIcon
    },
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
