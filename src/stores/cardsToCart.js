import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const cardsToCart = defineStore('cart', () => {
    const cards = ref([]);

    const number = computed(() => {
        let result = 0;
        if(cards.value.length){
            for(const card of cards.value){
                result += card.count;
            }
        }
        return result;
    });

    function addToCart(id, title, price, image, count) {
        if((cards.value.find((value) => value.id == id))){
            cards.value = cards.value.filter(item => item.id !== id)
        } else { 
            cards.value.push({
            id,
            title,
            price,
            image,
            count,
        })};
    }

   return {cards, addToCart, number};
});

