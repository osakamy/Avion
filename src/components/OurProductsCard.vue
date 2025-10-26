<script setup>
const props = defineProps({
    image: String,
    title: String,
    price: String
})
</script>

<template>
    <div>
        <img :src="props.image" alt="">
        <h3>{{ props.title }}</h3>
        <p>{{ props.price }}</p>
    </div>
</template>

<style scoped>

</style>