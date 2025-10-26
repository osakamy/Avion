<script setup>

</script>

<template>
    <section class="header">
        <div class="header__container">
            <div class="header__main">
                <img src="../assets/Search.svg" alt="">
                <p class="header__logo">Avion</p>
                <div class="header__main--info">
                    <img src="../assets/ShoppingCart.svg" alt="">
                    <img src="../assets/UserAvatar.svg" alt="">
                </div>
            </div>
            <div class="header__navigation">
                <p>Plant pots</p>
                <p>Ceramics</p>
                <p>Tables</p>
                <p>Chairs</p>
                <p>Crockery</p>
                <p>Tableware</p>
                <p>Cutlery</p>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.header {
    background-color: #ffffff;
    width: 100%;
}

.header__container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 1rem;
}

.header__main {
    display: flex;
    justify-content: space-between;
    padding-bottom: 40px;
    align-items: center;
}

.header__logo {
    font-size: 24px;
    font-weight: 400;
}

.header__main--info {
    display: flex;
    gap: 16px;
    width: 16px;
    height: 16px;
}

.header__navigation {
    display: flex;
    justify-content: center;
    gap: 44px;
    color: #726E8D;
    padding-bottom: 60px;
}
</style>