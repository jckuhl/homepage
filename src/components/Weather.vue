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

            <p>Temp: {{ weather.main.temp | fromKelvinTo('farenheit') }} 
                /  {{ weather.main.temp | fromKelvinTo('celsius') }}</p>
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
            wxLoaded: false,
        }
    },
    methods: {
        setWeather: async function() {
            let weather = JSON.parse(sessionStorage.getItem('weather'));

            //if weather is not in local storage or if weather in session storage is older than 5 minutes
            if(!weather || differenceInMinutes(new Date(), new Date(weather.dt)) > 5) {
                this.weather = await Weather.getLocalWeather();
                sessionStorage.setItem('weather', JSON.stringify(this.weather));
                this.wxLoaded = true;
            } else {
                this.weather = weather;
                this.wxLoaded = true;
            }
        },
        /**
         * Grab the weather, and update it every five minutes (300,000 ms)
         */
        updateWeather() {
            this.setWeather();
            setTimeout(this.setWeather.bind(this), 300001);
        }
    },
    filters: {
        fromKelvinTo(value, degree) {
            const cToF = c => (c * 9/5) + 32;

            let temp = parseFloat(value) - 273.15;
            if(degree === 'farenheit') {
                return cToF(temp).toFixed(2) + ' °F';
            }
            return temp.toFixed(2) + ' °C';
        }
    },
    created() {
        this.updateWeather();
    }
}
</script>
