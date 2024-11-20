<script setup>
    import Header from './components/Header.vue';
    import Footer from './components/Footer.vue';
    import Home from './pages/Home.vue';
    import { RouterView } from 'vue-router';
</script>

<template>
    <Header />
    <main>
        <!-- Conteúdo -->
         <RouterView />
    </main>
    <Footer />
</template>

<style scoped>
</style>
