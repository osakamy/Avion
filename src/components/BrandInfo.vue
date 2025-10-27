<script setup>

</script>

<template>
    <section class="main">
        <div class="main__info">
            <h4>From a studio in London to a global brand with over 400 outlets</h4>
            <p>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.</p>
            <p>
                Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.
            </p>
            <p class="main__contact">Get in touch</p>
        </div>
        <img class="main__image" src="../assets/Info.svg" alt="">
    </section>

</template>

<style scoped lang="scss">
    .main {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 40px;

        @media (max-width: 1024px) {
            flex-direction: column;
            text-align: center;
            gap: 30px;
        }

        @media (max-width: 768px) {
            gap: 20px;
        }
    }

    .main__info {
        max-width: 536px;
        display: flex;
        margin: 0 auto;
        flex-direction: column;
        row-gap: 25px;
        justify-content: center;

        @media (max-width: 1024px) {
            max-width: 100%;
            padding: 0 20px;
        }

        @media (max-width: 768px) {
            padding: 0 15px;
            row-gap: 20px;
        }
    }

    h4 {
        font-size: 24px;
        line-height: 140%;

        @media (max-width: 768px) {
            font-size: 20px;
        }

        @media (max-width: 480px) {
            font-size: 18px;
        }
    }


    .main__contact {
        padding-top: 212px;

        @media (max-width: 1024px) {
            padding-top: 60px;
        }

        @media (max-width: 768px) {
            padding-top: 40px;
        }

        @media (max-width: 480px) {
            padding-top: 30px;
        }
    }

    .main__image {
        max-width: 50%;
        height: auto;

        @media (max-width: 1024px) {
            max-width: 80%;
            order: -1;
        }

        @media (max-width: 768px) {
            max-width: 90%;
        }
    }
</style>