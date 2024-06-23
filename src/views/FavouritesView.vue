<template>
  <div>
    <h1>Favourites</h1>
    <div v-for="currency in favouritedCurrencies" :key="currency.title">
      <CurrencyItem 
        :currency="currency" 
        :flagSrc="getFlagSrc(currency.title)" 
        :isFavorited="true" 
        @toggle-favorite="removeFromFavourites"
      />
    </div>
  </div>
</template>

<script>
import { useCurrencyStore } from '../stores/currencyStore.js';
import CurrencyItem from '../components/CurrencyItem.vue';

export default {
  name: 'Favourites',
  components: {
    CurrencyItem
  },
  computed: {
    favouritedCurrencies() {
      const store = useCurrencyStore();
      return store.favourites;
    }
  },
  methods: {
    getFlagSrc(currencyCode) {
      return ''; 
    },
    removeFromFavourites(currency) {
      const store = useCurrencyStore();
      store.toggleFavourite(currency);
    }
  }
};
</script>
