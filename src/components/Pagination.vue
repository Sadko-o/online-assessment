<template>
  <div class="pagination">
    <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
    <span>Page {{ currentPage }}</span>
    <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  totalItems: Number,
  itemsPerPage: Number
});

const currentPage = ref(1);

const totalPages = computed(() => Math.ceil(props.totalItems / props.itemsPerPage));

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  margin: 0 5px;
}
</style>