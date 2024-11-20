<script setup>
</script>

<template>
    <section>
        <div class="image">
            <img src="../assets/img/paisagens/paisagem-1.jpg" alt="Paisagem 1">
        </div>
    </section>
</template>

<style scoped>

    h1 {
        text-align: center;
    }

    .image {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .image img {
        width: 500px;
        height: auto;
        margin: 1rem;
        border: 2px solid gray;
        box-shadow: 4px 4px 8px black, -4px -4px 8px black;
    }

</style>