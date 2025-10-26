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
        <img src="../assets/Info.svg" alt="">
    </section>

</template>

<style scoped>
    .main {
        display: flex;
        justify-content: space-between;
    }

    .main__info {
        max-width: 536px;
        display: flex;
        flex-direction: column;
        row-gap: 25px;
        justify-content: center;
    }

    h4 {
        font-size: 24px;
        line-height: 140%;
    }

    .main__contact {
        padding-top: 212px;
    }
</style>