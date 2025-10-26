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
    <p class="view-collection">View collection</p>
</template>

<style scoped lang="scss">
    .cards {
    display: flex;
    justify-content: space-between;
    gap: 20px;

    @media (max-width: 1024px) {
        flex-wrap: wrap;
        justify-content: center;
        gap: 30px;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        gap: 25px;
    }

    @media (max-width: 480px) {
        gap: 20px;
        padding: 0 10px;
    }
}

h2 {
    padding-bottom: 25px;
    font-size: 32px;
    text-align: center;

    @media (max-width: 1024px) {
        font-size: 28px;
    }

    @media (max-width: 768px) {
        font-size: 24px;
        padding-bottom: 20px;
    }

    @media (max-width: 480px) {
        font-size: 20px;
        padding-bottom: 15px;
        padding: 0 10px;
    }
}

.view-collection {
    padding: 67px 32px 16px 32px;
    text-align: center;
    margin-bottom: 144px;
    cursor: pointer;
    font-size: 16px;

    @media (max-width: 1024px) {
        margin-bottom: 100px;
        padding: 50px 0 16px 0;
    }

    @media (max-width: 768px) {
        margin-bottom: 80px;
        padding: 40px 0 16px 0;
        font-size: 15px;
    }

    @media (max-width: 480px) {
        margin-bottom: 60px;
        padding: 30px 10px 16px 10px;
        font-size: 14px;
    }
}
</style>