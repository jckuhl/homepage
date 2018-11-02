<template>
    <div id="app">
        <Clock />
        <Weather />
    </div>
</template>

<script>
import Clock from './components/Clock';
import Weather from './components/Weather';

export default {
  name: 'app',
      components: {
          Clock,
          Weather
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
