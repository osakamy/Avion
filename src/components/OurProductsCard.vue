<script setup>
const props = defineProps({
    image: String,
    title: String,
    price: String
})
</script>

<template>
    <div class="card">
        <img :src="props.image" alt="" class="card__image">
        <h3 class="card__title">{{ props.title }}</h3>
        <p class="card__price">{{ props.price }}</p>
    </div>
</template>

<style scoped  lang="scss">
.card__image {
    width: 100%;
    height: auto;
    max-width: 100%;
    margin-bottom: 16px;
    
    @media (max-width: 480px) {
        max-width: 280px;
    }
}

.card__title {
    font-size: 20px;
    margin-bottom: 8px;
    
    @media (max-width: 480px) {
        font-size: 18px;
        padding: 0 10px;
        text-align: center;
    }
}

.card__price {
    font-size: 18px;
    color: #2A254B;
    
    @media (max-width: 480px) {
        font-size: 16px;
        text-align: center;
    }
}
</style>