<script setup>
    import Header from '@/components/Header.vue';
    import Footer from '@/components/Footer.vue';
</script>

<template>
    <div class="layout">
        <Header/>
        <slot></slot>
        <Footer/>
    </div>
</template>

<style scoped>
.layout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}
</style>