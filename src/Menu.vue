<template>
    <div>
        <ul>
            <!-- The menu won't be reordered so index will do for key -->
            <li v-for="(menuItem, index) of menuItems" :key="index">
                <router-link :to="menuItem.route">
                {{ menuItem.name }}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>

const menuItems = [
    {
        name: 'Home',
        route: '/'
    },
    {
        name: 'Reddit',
        route: '/reddit'
    },
    {
        name: 'Facebook',
        route: '/fb'
    },
    {
        name: 'Instagram',
        route: '/instagram'
    }
]

export default {
    data() {
        return {
            menuItems
        }
    }
}
</script>
