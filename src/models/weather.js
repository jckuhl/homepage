/* eslint-disable */
import GeoLoc from './geoloc';

export default {
    URI: 'https://api.openweathermap.org',
    getLocalWeather: async function(city=null, countryCode=null) {
        const fetchWxData = async (url, options={})=> (await fetch(url, options));

        try {
            const API = await fetchWxData('http://localhost:8000')
                                        .then(response=> response.json())
                                        .then(data=> data)
                                        .catch(error=> console.error(error));
            const currentLocation = await GeoLoc.getLocalPosition().then(position => position);
            const url = this.URI 
                + `/data/2.5/weather?`
                + `lat=${currentLocation.coords.latitude}`
                + `&lon=${currentLocation.coords.longitude}`
                + `&APPID=${API.key}`;
            const options = {
                method: 'GET',
            };
            return await fetchWxData(url, options)
                                .then(response=> response.json())
                                .then(data=> data)
                                .catch(error=> console.error(error));
        } catch(error) {
            console.error(error);
        }
    }
}
