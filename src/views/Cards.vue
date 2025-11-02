<script setup>
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import Card1 from '../assets/Card.svg';
import Card2 from '../assets/Card1.svg';
import Card3 from '../assets/Card2.svg';
import Card4 from '../assets/Card3.svg';
import Card5 from '../assets/OurCard.svg';
import Card6 from '../assets/OurCard1.svg';
import Card7 from '../assets/OurCard2.svg';

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

const route = useRoute();
const id = route.params.id;
const count = ref(1);
const quantity = ref(1);



const mas = cards.filter(card => card.id == id);

const result = mas[0];

const increment = () => {
    quantity.value++;
}

const decrement = () => {
    if (quantity.value > 1) {
        quantity.value--;
    }
}
</script>

<template>
<section>
    <div class="card">
        <img :src="result.image" alt="">
        <div>
           <h3 class="card__title">{{ result.title }}</h3>
           <p class="card__paragraph">{{ result.price }}</p>
           <div class="card__info">
            <h4 class="card__info__title">{{ result.description }}</h4>
            <p class="card__info__paragraph">{{ result.info }}</p>
            <ul class="card__info__list">
                <li>{{ result.advantages }}</li>
                <li>{{ result.advantages }}</li>
                <li>{{ result.advantages }}</li>
            </ul>
            <div class="card__info--additional">
                <h3 class="card__info--additional__title">{{ result.add }}</h3>
                <div class="card__info__dimensions">
                    <p>Height:</p>
                    <p>Width:</p>
                    <p>Depth:</p>
                </div>
                <div class="card__info__sizes">
                    <span>{{ result.Height }}</span>
                    <span>{{ result.Width }}</span>
                    <span>{{ result.Depth }}</span>
                </div>
                <div class="add__cart">
                    <h4 class="add__cart__title">Amount:</h4>
                    <div class="add__cart__quantity-controls">
                        <button class="add__cart--quantity__controls--btn__minus" @click="decrement" :disabled="quantity <= 1">-</button>
                        <span class="add__cart--quantity__controls--quantity">{{ quantity }}</span>
                        <button class="add__cart--quantity__controls--btn__plus" @click="increment">+</button>
                    </div>
                    <button class="add__cart--btn" @click="addToCart">Add to cart</button>
                </div>
            </div>
           </div>
           
        </div>
    </div>
</section>
</template>

<style scoped lang="scss">
.card {
    display: flex;
    gap: 62px;

    &__title {
        font-size: 36px;
    }

    &__paragraph {
        font-size: 24px;
    }

    &__info__title {
        padding-bottom: 16px;
    }

    &__info__paragraph {
        padding-bottom: 20px;
    }

    &__info__list {
        padding-bottom: 43px;
    }

    &__info__dimensions {
        display: flex;
        gap: 57px;
    }

    &__info--additional__title {
        padding-bottom: 28px;
    }

    &__info__sizes {
        display: flex;
        gap: 65px;
        color: #505977;
    }
}

.add__cart {
    display: flex;
    padding-top: 69px;
    align-items: center;
    
    &__title {
        padding-right: 22px;
    }

    &--btn {
        padding: 16px 32px;
        background: #2A254B;
        color: white;
        border: 1px solid transparent;
    }

    &--quantity__controls--btn__plus {
        margin-right: 182px;
        border: 1px solid transparent;
    }

    &--quantity__controls--btn__minus {
        border: 1px solid transparent;
    }

    &--quantity__controls--quantity {
        margin-left: 33px;
        margin-right: 33px;
    }
}

img {
    width: 721px;
    height: 759px;
}
</style>