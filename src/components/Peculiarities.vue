<script setup>

</script>

<template>
    <section class="main">
        <h2 class="main__title">What makes our brand different</h2>
        <div class="mein__info">
            <div class="main__info--peculiarities">
                <img src="../assets/Delivery.svg" alt="">
                <h4>Next day as standard</h4>
                <p>Order before 3pm and get your order
the next day as standard</p>
            </div>
            <div class="main__info--peculiarities">
                <img src="../assets/Checkmark.svg" alt="">
                <h4>Made by true artisans</h4>
                <p>Handmade crafted goods made with
real passion and craftmanship</p>
            </div>
            <div class="main__info--peculiarities">
                <img src="../assets/Purchase.svg" alt="">
                <h4>Unbeatable prices</h4>
                <p>For our materials and quality you won’t find better prices anywhere</p>
            </div>
            <div class="main__info--peculiarities">
                <img src="../assets/Sprout.svg" alt="">
                <h4>Recycled packaging</h4>
                <p>We use 100% recycled packaging to ensure our footprint is manageable</p>
            </div>
        </div>
    </section>
    
</template>

<style scoped>
    .main__title {
        font-size: 24px;
        padding-bottom: 51px;
        padding-top: 120px;
        font-weight: 400px;
        text-align: center;
    }

    .mein__info {
        display: flex;
        justify-content: space-between;
    }
    
    .main__info--peculiarities {
        max-width: 266px;
    }

    h4 {
        padding: 8px 0px;
        font-size: 20px;
    }
</style>