<template>
    <div>
        <ul>
            <li v-for="menuItem of menuItems">
                {{ menuItem.name }}
            </li>
        </ul>
    </div>
</template>

<script>

const menuItems = [
    {
        name: 'home',
        route: '/'
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
