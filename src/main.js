import Vue from 'vue'
import router from './router/router'
import App from './App.vue'

Vue.config.productionTip = false


Vue.filter('title', (string) => {
    return string.split(' ').map((word)=> {
        return word.substring(0, 1).toUpperCase() + word.substring(1);
    }).join(' ');
});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')