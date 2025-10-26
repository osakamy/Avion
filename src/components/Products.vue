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
    <p>View collection</p>
</template>

<style scoped>
    h2 {
        font-size: 32px;
        padding-top: 160px;
        padding-bottom: 33px;
    }

    .cards {
        display: flex;
        justify-content: space-between;
    }

    p {
        padding: 67px 32px 16px 32px;
        text-align: center;
        margin-bottom: 144px;
    }
</style>