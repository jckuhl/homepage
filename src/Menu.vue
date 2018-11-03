<template>
    <div>
        <ul>
            <!-- The menu won't be reordered so index will do for key -->
            <li v-for="(menuItem, index) of menuItems" :key="index">
                <router-link :to="menuItem.route">
                {{ menuItem.name }}
                </router-link>
                <notification :src="menuItem.src" :notifications="menuItem.notifications"/>
            </li>
        </ul>
    </div>
</template>

<script>
import Notification from './components/Notification';

const menuItems = [
    {
        name: 'Home',
        route: '/',
        src: ''
    },
    {
        name: 'Reddit',
        route: '/reddit',
        src: 'https://www.reddit.com'
    },
    {
        name: 'Facebook',
        route: '/fb',
        src: 'https://www.facebook.com'
    },
    {
        name: 'Twitter',
        route: '/twit',
        src: 'https://www.twitter.com'
    },
    {
        name: 'Instagram',
        route: '/instagram',
        src: 'https://www.instagram.com'
    }
]

export default {
    components: {
        Notification
    },
    data() {
        return {
            menuItems
        }
    },
    created() {
        this.menuItems = this.menuItems.map(item => {
            if(item.name === 'Home') {
                return item;
            }
            item.notifications = 3;
            return item;
        });
    }
}
</script>
