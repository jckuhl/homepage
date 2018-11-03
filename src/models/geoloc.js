class GeoError extends Error {
    constructor(message) {
        super(message);
    }
}

/**
 * Grabs the current location of the user as a Promise
 * @returns {Promise}
 */
export default function getLocalPosition() {
    return new Promise((resolve, reject)=> {
        if('geolocation' in navigator) {
            // resolve the position or reject if an error is thrown
            navigator.geolocation.getCurrentPosition(
                (position)=> resolve(position),
                (error)=> reject(error)
            );
        } else {
            reject(new GeoError(`Your browser doesn't support geolocation`));
        }
    });
}
