<script setup>
import { useRouter } from 'vue-router';
import Card1 from '../assets/Card.svg';
import Card2 from '../assets/Card1.svg';
import Card3 from '../assets/Card2.svg';
import Card4 from '../assets/Card3.svg';
import Card5 from '../assets/OurCard.svg';
import Card6 from '../assets/OurCard1.svg';
import Card7 from '../assets/OurCard2.svg';

const router = useRouter();

const openProduct = (cardId) => {
    router.push(`/cards/${cardId}`);
}

const cards = [
    {
    image: Card1,
    title: "The Dandy chair",
    description: "Description",
    price: "£250",
    id: 1,
    advantages: "advantages",
    add: "Dimensions",
    Height: "110cm",
    Width: "75cm",
    Depth: "50cm",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eveniet maxime explicabo, accusantium ipsum non dicta voluptatum temporibus possimus dolore, quaerat qui vero distinctio voluptate a rerum, sit accusamus quam.",
},
{
    image: Card2,
    title: "Rustic Vase Set",
    description: "Description",
    price: "£155",
    id: 2,
    advantages: "advantages",
    add: "Dimensions",
    Height: "110cm",
    Width: "75cm",
    Depth: "50cm",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eveniet maxime explicabo, accusantium ipsum non dicta voluptatum temporibus possimus dolore, quaerat qui vero distinctio voluptate a rerum, sit accusamus quam.",
},
{
    image: Card3,
    title: "The Silky Vase",
    description: "Description",
    price: "£125",
    id: 3,
    advantages: "advantages",
    add: "Dimensions",
    Height: "110cm",
    Width: "75cm",
    Depth: "50cm",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eveniet maxime explicabo, accusantium ipsum non dicta voluptatum temporibus possimus dolore, quaerat qui vero distinctio voluptate a rerum, sit accusamus quam.",
},
{
    image: Card4,
    title: "The Lucy Lamp",
    description: "Description",
    price: "£399",
    id: 4,
    advantages: "advantages",
    add: "Dimensions",
    Height: "110cm",
    Width: "75cm",
    Depth: "50cm",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eveniet maxime explicabo, accusantium ipsum non dicta voluptatum temporibus possimus dolore, quaerat qui vero distinctio voluptate a rerum, sit accusamus quam.",
},
{
    image: Card5,
    title: "The Poplar suede sofa",
    description: "Description",
    price: "£980",
    id: 5,
    advantages: "advantages",
    add: "Dimensions",
    Height: "110cm",
    Width: "75cm",
    Depth: "50cm",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eveniet maxime explicabo, accusantium ipsum non dicta voluptatum temporibus possimus dolore, quaerat qui vero distinctio voluptate a rerum, sit accusamus quam.",
},
{
    image: Card6,
    title: "The Dandy chair",
    description: "Description",
    price: "£250",
    id: 6,
    advantages: "advantages",
    add: "Dimensions",
    Height: "110cm",
    Width: "75cm",
    Depth: "50cm",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eveniet maxime explicabo, accusantium ipsum non dicta voluptatum temporibus possimus dolore, quaerat qui vero distinctio voluptate a rerum, sit accusamus quam.",
},
{
    image: Card7,
    title: "The Dandy chair",
    description: "Description",
    price: "£250",
    id: 7,
    advantages: "advantages",
    add: "Dimensions",
    Height: "110cm",
    Width: "75cm",
    Depth: "50cm",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eveniet maxime explicabo, accusantium ipsum non dicta voluptatum temporibus possimus dolore, quaerat qui vero distinctio voluptate a rerum, sit accusamus quam.",
}
]
</script>

<template>
<div class="hero">
    <h2 class="hero__assortment">Assortment</h2>
    <div class="hero__cards">
        <div v-for="card in cards">
            <img :src="card.image" :alt="card.title" @click="openProduct(card.id)" style="cursor: pointer;">
            <p>{{ card.title }}</p>
            <p>{{ card.price }}</p>
        </div>
    </div>
</div>
</template>

<style scoped lang="scss">
.hero {
    padding-bottom: 30px;

    &__assortment {
        text-align: center;
        padding-bottom: 50px;
        font-weight: bold;
        
    }

    &__cards {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        row-gap: 30px;
    }
}
</style>