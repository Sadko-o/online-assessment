<template>
  <div>
    <h1>Home</h1>
    <CurrencyList />
  </div>
</template>

<script>
import CurrencyList from '../components/CurrencyList.vue';

export default {
  name: 'Home',
  components: {
    CurrencyList
  }
};
</script>
