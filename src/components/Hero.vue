<script setup>

</script>

<template>
    <section class="hero">
        <div class="hero__container">
            <h1 class="hero__title">The furniture brand for the future, with timeless designs</h1>
            <button class="hero__button">View collection</button>
            <p class="hero__paragtaph">
                A new era in eco friendly furniture with Avelon, the French luxury retail brand with nice fonts, tasteful colors and a beautiful way to display things digitally  using modern web technologies.
            </p>
        </div>
        <img src="../assets/TableHero.svg" alt="">
    </section>
</template>

<style scoped>
    .hero {
        background-color: #2A254B;
        display: flex;
        justify-content: space-between;
    }
    .hero__container {
        max-width: 610px;
        padding-left: 60px;
    }

    .hero__title {
        font-size: 32px;
        color: #FFFFFF;
        line-height: 140%;
        font-weight: 400px;
        padding-bottom: 41px;
        padding-top: 60px;
    }

    .hero__button {
        padding: 16px 32px;
        color: #FFFFFF;
        background: #7c77aa;
        border-color: transparent;
        margin-bottom: 196px;
    }

    .hero__paragtaph {
        font-size: 18px;
        color: #FFFFFF;
        line-height: 150%;
    }
</style>