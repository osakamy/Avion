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
                    <RouterLink to="/about" class="main__info--about__link">About us</RouterLink>
                    <p>Vacancies</p>
                    <p>Contact us</p>
                    <p>Privacy</p>
                    <p>Returns policy</p>
                </div>
                <div class="main__info--newsletter">
                    <p>Join our mailing list</p>
                    <div class="main__info--form">
                        <input class="main__info--email" type="email" name="" id="" placeholder="your@email.com">
                        <button class="main__info--button">Sing up</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.main {
    background-color: #2A254B;
    width: 100%;
}

.main__container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 1rem;

    @media (max-width: 480px) {
        padding: 0 0.5rem;
    }
}

.main__info {
    display: flex;
    justify-content: space-between;
    padding-top: 58px;
    padding-bottom: 58px;
    color: #ffffff;
    gap: 40px;

    @media (max-width: 1024px) {
        flex-wrap: wrap;
        gap: 30px;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 40px 0;
        gap: 25px;
    }

    @media (max-width: 480px) {
        padding: 30px 0;
        gap: 20px;
    }
}

.main__info--about {
    @media (max-width: 1024px) {
        flex: 1 1 calc(50% - 30px);
        min-width: 200px;
    }

    @media (max-width: 768px) {
        flex: 1 1 100%;
        text-align: center;
    }
}

.main__info--newsletter {
    @media (max-width: 1024px) {
        flex: 1 1 100%;
        text-align: center;
    }
}

.main__info--form {
    display: flex;
    margin-top: 16px;

    @media (max-width: 1024px) {
        justify-content: center;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }
}

.main__info--email {
    padding: 17px;
    width: 509px;
    border-color: transparent;
    background: #7c77aa;
    color: white;

    @media (max-width: 1024px) {
        width: 300px;
    }

    @media (max-width: 768px) {
        width: 100%;
        max-width: 300px;
    }

    @media (max-width: 480px) {
        padding: 14px;
    }
}

.main__info--email::placeholder {
    color: white;
    opacity: 1;
}

.main__info--button {
    padding: 17px 32px;
    border-color: transparent;
    background: #ffffff;
    cursor: pointer;

    @media (max-width: 768px) {
        width: 100%;
        max-width: 300px;
    }

    @media (max-width: 480px) {
        padding: 14px 24px;
    }
}

h4 {
    font-size: 16px;
    font-weight: bold;
}

.main__info--about__link {
    color: #ffffff;
    text-decoration: none;
    cursor: pointer;
}
</style>