<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-secondary">
            <img src="../assets/img/logo-firjan.png" alt="Logo Firjan">
        </nav>
    </header>
    <ul class="nav justify-content-center nav-underline">
        <li class="nav-item">
            <RouterLink class="nav-link" to="/">HOME</RouterLink>
        </li>
        <li class="nav-item">
            <RouterLink class="nav-link" to="/sobre">SOBRE</RouterLink>
        </li>
        <li class="nav-item">
            <RouterLink class="nav-link" to="/contato">CONTATO</RouterLink>
        </li>
    </ul>
</template>

<style scoped>
    img {
        width: 150px;
        height: auto;
        margin: 5px 15px;
    }
</style>