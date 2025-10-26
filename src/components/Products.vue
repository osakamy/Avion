<script setup>
import ProductsCards from './ProductsCards.vue';
import Card from '../assets/Card.svg';
import Card1 from '../assets/Card1.svg';
import Card2 from '../assets/Card2.svg';
import Card3 from '../assets/Card3.svg';
const cards = [
    {
    image: Card,
    title: "The Dandy chair",
    price: "£250"
},
{
    image: Card1,
    title: "Rustic Vase Set",
    price: "£155"
},
{
    image: Card2,
    title: "The Silky Vase",
    price: "£125"
},
{
    image: Card3,
    title: "The Lucy Lamp",
    price: "£399"
}
]
</script>

<template>
    <h2>Nex ceramics</h2>
    <div class="cards">
        <ProductsCards
        v-for="card in cards" :key="card.id"
        :image="card.image"
        :title="card.title"
        :price="card.price"
        />
    </div>
    <p class="view-collection">View collection</p>
</template>

<style scoped lang="scss">
    h2 {
        font-size: 32px;
        padding-top: 160px;
        padding-bottom: 33px;
        text-align: center;

        @media (max-width: 1024px) {
            padding-top: 100px;
            font-size: 28px;
        }

        @media (max-width: 768px) {
            padding-top: 80px;
            font-size: 24px;
            padding-bottom: 25px;
        }

        @media (max-width: 480px) {
            padding-top: 60px;
            font-size: 20px;
        }
    }

    .cards {
        display: flex;
        justify-content: space-between;
        gap: 20px;
        flex-wrap: wrap;

        @media (max-width: 1024px) {
            justify-content: center;
            gap: 30px;
        }

        @media (max-width: 768px) {
            flex-direction: column;
            align-items: center;
            gap: 25px;
        }
    }

    .view-collection {
        padding: 67px 32px 16px 32px;
        text-align: center;
        margin-bottom: 144px;
        cursor: pointer;

        @media (max-width: 1024px) {
            margin-bottom: 100px;
            padding: 50px 0 16px 0;
        }

        @media (max-width: 768px) {
            margin-bottom: 80px;
            padding: 40px 0 16px 0;
        }

        @media (max-width: 480px) {
            margin-bottom: 60px;
            padding: 30px 0 16px 0;
        }
}
</style>