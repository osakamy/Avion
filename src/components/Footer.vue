<script setup>
</script>

<template>
    <section class="main">
        <div class="main__container">
            <div class="main__info">
                <div class="main__info--about">
                    <h4>Menu</h4>
                    <p>New arrivals</p>
                    <p>Best sellers</p>
                    <p>Recently viewed</p>
                    <p>Popular this week</p>
                    <p>All products</p>
                </div>
                <div class="main__info--about">
                    <h4>Categories</h4>
                    <p>Crockery</p>
                    <p>Furniture</p>
                    <p>Homeware</p>
                    <p>Plant pots</p>
                    <p>Chairs</p>
                    <p>Crockery</p>
                </div>
                <div class="main__info--about">
                    <h4>Our company</h4>
                    <p>About us</p>
                    <p>Vacancies</p>
                    <p>Contact us</p>
                    <p>Privacy</p>
                    <p>Returns policy</p>
                </div>
                <div>
                    <p>Join our mailing list</p>
                    <div>
                        <input class="main__info--email" type="email" name="" id="" placeholder="your@email.com">
                        <button class="main__info--button">Sing up</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.main {
    background-color: #2A254B;
    width: 100%;
}

.main__container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 1rem;
}

.main__info {
    display: flex;
    justify-content: space-between;
    padding-top: 58px;
    padding-bottom: 58px;
    color: #ffffff;
}

.main__info--email {
    padding: 17px;
    width: 509px;
    border-color: transparent;
    background: #7c77aa;
    color: white;
}

.main__info--email::placeholder {
    color: white;
    opacity: 1;
}

.main__info--button {
    padding: 17px 32px;
    border-color: transparent;
}

h4 {
    font-size: 16px;
    font-weight: bold;
}
</style>