/* eslint-disable */
import getLocalPosition from './geoloc';

export default {
    URI: 'https://api.openweathermap.org',
    getLocalWeather: async function(city=null, countryCode=null) {
        try {
            // fetch the API key from environment
            const API_KEY = await fetch('http://localhost:8000')
                                        .then(response=> response.json())
                                        .then(data=> data)
                                        .catch(error=> console.error(error));
            
            // get the current location
            const currentLocation = await getLocalPosition()
                                                .then(position => position)
                                                .catch(error=> console.error(error));

            // buld the uri string
            const url = this.URI 
                + `/data/2.5/weather?`
                + `lat=${currentLocation.coords.latitude}`
                + `&lon=${currentLocation.coords.longitude}`
                + `&APPID=${API_KEY.wx}`;
                
            // fetch the weather
            return await fetch(url)
                                .then(response=> response.json())
                                .then(data=> data)
                                .catch(error=> console.error(error));
        } catch(error) {
            console.error(error);
        }
    }
}
