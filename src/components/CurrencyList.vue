<template>
  <div>
    <h1>Currency Rates</h1>
    <div class="search">
      <div class="search-by-user">
        <select v-model="filterBy">
          <option value="fullname">Fullname</option>
          <option value="title">Title</option>
        </select>
        <input type="text" placeholder="Search by name" v-model="searchQuery" />
      </div>

      <div class="select-date">
        <label for="date">Select a date:</label>
        <input type="date" v-model="selectedDate" @change="fetchData" />
      </div>

      <div class="pagination-controls">
        <label for="itemsPerPage">Items per page:</label>
        <select v-model="itemsPerPage" id="itemsPerPage">
          <option v-for="option in itemsPerPageOptions" :key="option" :value="option">{{ option }}</option>
        </select>
      </div>
    </div>

    <div v-if="paginatedCurrencies.length <= 0">
      <p>Please choose a date.</p>
    </div>
    <div v-else>
      <div v-for="(currency, index) in paginatedCurrencies" :key="index">
        <CurrencyItem :currency="currency" :flagSrc="getFlagSrc(currency.title)"
          :isFavorited="isFavorited(currency.title)" @toggle-favorite="toggleFavorite" />
      </div>

      <div class="pagination">
        <button @click="previousPage" :disabled="currentPage === 1">Previous</button>
        <span>Page {{ currentPage }} of {{ totalPages }}</span>
        <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useCurrencyStore } from '../stores/currencyStore';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import CurrencyItem from './CurrencyItem.vue';

export default {
  name: 'CurrencyList',
  components: {
    CurrencyItem,
    FontAwesomeIcon
  },
  data() {
    const store = useCurrencyStore();
    return {
      selectedDate: '',
      filterBy: 'fullname',
      searchQuery: '',
      store,
      currentPage: 1,
      itemsPerPage: 5,
      itemsPerPageOptions: [5, 10, 15, 'All']
    };
  },
  computed: {
    currencies() {
      return this.store.currencies;
    },
    filteredCurrencies() {
      const query = this.searchQuery.toLowerCase();
      if (query === '') {
        return this.currencies;
      }
      return this.currencies.filter(currency => currency[this.filterBy].toLowerCase().includes(query));
    },
    paginatedCurrencies() {
      if (this.itemsPerPage === 'All') {
        return this.filteredCurrencies;
      }
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredCurrencies.slice(start, end);
    },
    totalPages() {
      if (this.itemsPerPage === 'All') {
        return 1;
      }
      return Math.ceil(this.filteredCurrencies.length / this.itemsPerPage);
    }
  },
  methods: {
    fetchData() {
      this.store.getCurrencies(this.selectedDate);
    },
    getFlagSrc(currencyCode) {
      return ''; 
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    toggleFavorite(currency) {
      console.log('toggleFavorite', currency);
      this.store.toggleFavourite(currency);
    },
    isFavorited(currencyTitle) {
      return this.store.favourites.some(c => c && c.title === currencyTitle);
    }
  },
  watch: {
    itemsPerPage() {
      this.currentPage = 1;
    }
  }
};
</script>

<style scoped>
.search {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 10px;
}

.search-by-user {
  display: flex;
  gap: 10px;
}

.pagination-controls,
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.pagination-controls label,
.pagination-controls select,
.pagination button {
  margin: 0 5px;
}
</style>
