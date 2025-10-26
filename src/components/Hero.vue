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
        <img class="hero__image" src="../assets/TableHero.svg" alt="">
    </section>
</template>

<style scoped lang="scss">
    .hero {
        background-color: #2A254B;
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media (max-width: 1024px) {
            flex-direction: column;
            text-align: center;
            background-color: white;
        }
    }
    .hero__container {
        max-width: 610px;
        padding-left: 60px;

        @media (max-width: 1024px) {
            padding-left: 0;
            padding: 40px 20px;
            max-width: 100%;
            background-color: #2A254B;
        }

        @media (max-width: 768px) {
            padding: 30px 15px;
            background-color: #2A254B;
        }
    }

    .hero__title {
        font-size: 32px;
        color: #FFFFFF;
        line-height: 140%;
        font-weight: 400;
        padding-bottom: 41px;
        padding-top: 60px;

        @media (max-width: 1024px) {
            padding-top: 40px;
            font-size: 28px;
        }

        @media (max-width: 768px) {
            font-size: 24px;
            padding: 30px 0 25px 0;
        }

        @media (max-width: 480px) {
            font-size: 20px;
        }
    }

    .hero__button {
        padding: 16px 32px;
        color: #FFFFFF;
        background: #7c77aa;
        border-color: transparent;
        margin-bottom: 196px;

        @media (max-width: 1024px) {
            margin-bottom: 60px;
        }

        @media (max-width: 768px) {
            margin-bottom: 40px;
            padding: 14px 28px;
        }

        @media (max-width: 480px) {
            width: 100%;
            max-width: 280px;
        }
    }

    .hero__paragtaph {
        font-size: 18px;
        color: #FFFFFF;
        line-height: 150%;

        @media (max-width: 768px) {
            font-size: 16px;
        }
    }

    .hero__image {
        max-width: 50%;
        height: auto;

        @media (max-width: 1024px) {
            max-width: 100%;
            width: 100%;
            margin-bottom: 40px;
        }

        @media (max-width: 768px) {
            margin-bottom: 30px;
        }

        @media (max-width: 480px) {
            margin-bottom: 20px;
        }
    }
</style>