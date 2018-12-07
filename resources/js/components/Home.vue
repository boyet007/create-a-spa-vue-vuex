<template>
    <div>
        <h1>Home</h1>
        <h2>{{ welcome }}</h2>
    </div>
</template>

<script>
export default {
    name: 'Home',
    computed: {
        welcome() {
            return this.$store.getters.welcome
        }
    }
}
</script>
