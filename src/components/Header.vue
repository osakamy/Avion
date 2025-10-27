<script setup>

</script>

<template>
    <section class="header">
        <div class="header__container">
            <div class="header__main">
                <img src="../assets/Search.svg" alt="">
                <RouterLink to="/" class="header__logo">Avion</RouterLink>
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

    @media (max-width: 480px) {
        padding: 0 0.5rem;
    }
}

.header__main {
    display: flex;
    justify-content: space-between;
    padding-bottom: 40px;
    align-items: center;

    @media (max-width: 1024px) {
        padding-bottom: 30px;
    }

    @media (max-width: 768px) {
        padding: 20px 0;
    }
}

.header__logo {
    font-size: 24px;
    font-weight: 400;
    color: black;
    text-decoration: none;
    cursor: pointer;

    @media (max-width: 768px) {
        font-size: 20px;
    }
}

.header__main--info {
    display: flex;
    gap: 16px;
    align-items: center;

    @media (max-width: 480px) {
        gap: 12px;
    }
}

.header__main--info img {
    width: 16px;
    height: 16px;

    @media (max-width: 480px) {
        width: 18px;
        height: 18px;
    }
}

.header__navigation {
    display: flex;
    justify-content: center;
    gap: 44px;
    color: #726E8D;
    padding-bottom: 60px;

    @media (max-width: 1024px) {
        gap: 30px;
        flex-wrap: wrap;
        padding-bottom: 40px;
    }

    @media (max-width: 768px) {
        display: none;
    }
}

p {
    cursor: pointer;
}
</style>