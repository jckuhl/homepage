class GeoError extends Error {
    constructor(message) {
        super(message);
    }
}

export default {
    getLocalPosition: ()=> {
        return new Promise((resolve, reject)=> {
            if('geolocation' in navigator) {
                navigator.geolocation.getCurrentPosition((position)=> resolve(position), (error)=> reject(error));
            } else {
                reject(new GeoError(`Your browser doesn't support geolocation`));
            }
        });
    }
}