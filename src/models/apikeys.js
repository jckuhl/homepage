export default async function getAPIKey(key) {
    return await (await fetch('http://localhost:8000/' + key)).json();
}