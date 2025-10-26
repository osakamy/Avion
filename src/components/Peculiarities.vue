<script setup>

</script>

<template>
    <section class="main">
        <h2 class="main__title">What makes our brand different</h2>
        <div class="main__info">
            <div class="main__info--peculiarities">
                <img src="../assets/Delivery.svg" alt="">
                <h4>Next day as standard</h4>
                <p>Order before 3pm and get your order the next day as standard</p>
            </div>
            <div class="main__info--peculiarities">
                <img src="../assets/Checkmark.svg" alt="">
                <h4>Made by true artisans</h4>
                <p>Handmade crafted goods made with real passion and craftmanship</p>
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

<style scoped lang="scss">
    .main__title {
        font-size: 24px;
        padding-bottom: 51px;
        padding-top: 120px;
        font-weight: 400;
        text-align: center;

        @media (max-width: 1024px) {
            padding-top: 80px;
            padding-bottom: 40px;
        }

        @media (max-width: 768px) {
            padding-top: 60px;
            padding-bottom: 30px;
            font-size: 22px;
        }

        @media (max-width: 480px) {
            font-size: 20px;
            padding-top: 40px;
            padding-bottom: 25px;
        }
    }

    .main__info {
        display: flex;
        justify-content: space-between;
        gap: 30px;
        flex-wrap: wrap;

        @media (max-width: 1024px) {
            justify-content: center;
            gap: 40px;
        }

        @media (max-width: 768px) {
            flex-direction: column;
            align-items: center;
            gap: 30px;
        }
    }
    
    .main__info--peculiarities {
        max-width: 266px;
        text-align: center;
        flex: 1;
        min-width: 200px;

        @media (max-width: 1024px) {
            flex-grow: 0; //элемент НЕ будет растягиваться, чтобы занять свободное место
            flex-shrink: 1; //элемент МОЖЕТ сжиматься при нехватке места
            flex-basis: calc(50% - 40px); //базовая ширина элемента = 50% минус 40px (учет gap)
            max-width: 280px;
        }

        @media (max-width: 768px) {
            flex-grow: 1; //элемент БУДЕТ растягиваться, чтобы занять всё свободное место
            flex-shrink: 1; //элемент МОЖЕТ сжиматься
            flex-basis: 100%; // базовая ширина = 100%
            max-width: 100%;
        }
    }

    h4 {
        padding: 8px 0px;
        font-size: 20px;
        margin-bottom: 8px;

        @media (max-width: 768px) {
            font-size: 18px;
        }

        @media (max-width: 480px) {
            font-size: 16px;
        }
    }
</style>