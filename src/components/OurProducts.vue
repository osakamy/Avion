<script setup>
import OurProductsCard from './OurProductsCard.vue';
import Card from '../assets/OurCard.svg';
import Card1 from '../assets/OurCard1.svg';
import Card2 from '../assets/OurCard2.svg';
const cards = [
    {
    image: Card,
    title: "The Poplar suede sofa",
    price: "£980"
},
{
    image: Card1,
    title: "The Dandy chair",
    price: "£250"
},
{
    image: Card2,
    title: "The Dandy chair",
    price: "£250"
}
]
</script>

<template>
    <h2>Our popular products</h2>
    <div class="cards">
        <OurProductsCard 
        v-for="card in cards" 
        :image="card.image" 
        :title="card.title" 
        :price="card.price" />
    </div>
    <p>View collection</p>
</template>

<style scoped>
    .cards {
        display: flex;
        justify-content: space-between;
    }
    h2 {
        padding-bottom: 25px;
    }

    p {
        padding: 67px 32px 16px 32px;
        text-align: center;
        margin-bottom: 144px;
    }
</style>