<template>
    <div>
        <div class="header">
            <Header />
        </div>
        <div class="content">
           <router-view />
           
        </div>
    </div>
  
</template>

<script>
    import Header from './Header.vue'
    export default {
        name: 'main-app',
        components: {
            Header
        }

    }
</script>
