<template>
    <div id="app">
        <Menu />
        <router-view />
    </div>
</template>

<script>
import Menu from './Menu';

export default {
    name: 'app',
    components: {
        Menu
    }
} 
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Changa+One|Open+Sans:400,400i,700,700i|Roboto');

    body {
        background: slategray;
        font-family: 'Roboto', sans-serif;
        color: white;
    }
</style>
