<script setup>
import { RouterLink } from 'vue-router';
const props = defineProps({
    image: String,
    title: String,
    price: String,
    id: String,
}
)
</script>

<template>
<RouterLink :to="`cards/${ props.id }`" class="card">
    <img :src="props.image" alt="">
    <h3>{{ props.title }}</h3>
    <p>{{ props.price }}</p>
</RouterLink>
</template>

<style scoped lang="scss">
.card {
    text-align: center;
    max-width: 305px;
    text-decoration: none;
    color: black;

    @media (max-width: 768px) {
        max-width: 280px;
    }
}

.card__title {
    font-size: 20px;
    margin-bottom: 8px;

    @media (max-width: 768px) {
        font-size: 18px;
    }
}

.card__price {
    font-size: 18px;
    color: #2A254B;

    @media (max-width: 768px) {
        font-size: 16px;
    }
}
</style>