/* eslint-disable */
import getLocalPosition from './geoloc';
import GeoError from './geoloc';

export default {
    URI: 'https://api.openweathermap.org',
    getLocalWeather: async function(city=null, countryCode=null) {
        try {
            // fetch the API key from environment
            const API_KEY = await (await fetch('http://localhost:8000')).json();

            if(!city || !countryCode) {
                // get the current location
                const currentLocation = await getLocalPosition();

                // build the uri string
                const url = this.URI 
                    + `/data/2.5/weather?`
                    + `lat=${currentLocation.coords.latitude}`
                    + `&lon=${currentLocation.coords.longitude}`
                    + `&APPID=${API_KEY.wx}`;
                    
                // fetch the weather
                return (await fetch(url)).json()
            } else {
                const url = this.URI
                    + `/data/2.5/weather?`
                    + `q=${city},${countryCode}`
                    + `&APPID=${API_KEY.wx}`;

                return (await fetch(url)).json();
            }
        } catch(error) {
            sessionStorage.removeItem('weather');
            console.error(error);
            if(error instanceof GeoError) {
                // TODO display an error of location can't be found
            }
        }
    }
}
