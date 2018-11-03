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
import { differenceInMinutes } from 'date-fns';

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
        let weather = JSON.parse(localStorage.getItem('weather'));

        //if weather is not in local storage or if weather in local storage is older than 30 minutes
        if(!weather || differenceInMinutes(new Date(), new Date(weather.dt)) > 30) {
            this.weather = await Weather.getLocalWeather();
            localStorage.setItem('weather', JSON.stringify(this.weather));
            this.wxLoaded = true;
        } else {
            this.weather = weather;
            this.wxLoaded = true;
        }
    }
}
</script>
