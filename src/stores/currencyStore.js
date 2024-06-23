import { defineStore } from 'pinia';
import { ref } from 'vue';
import { fetchCurrencyData } from '../services/api';

export const useCurrencyStore = defineStore('currencyStore', () => {
  const currencies = ref([]);
  const favourites = ref(JSON.parse(localStorage.getItem('favourites')) || []);

  function formatDate(dateString) {
    const [year, month, day] = dateString.split('-');
    return `${day}.${month}.${year}`;
  }

  const getCurrencies = async (date) => {
    const formattedDate = formatDate(date);
    const data = await fetchCurrencyData(formattedDate);
    const parser = new DOMParser();
    const xml = parser.parseFromString(data, 'application/xml');
    const items = xml.getElementsByTagName('item');
    currencies.value = Array.from(items).map(item => ({
      fullname: item.getElementsByTagName('fullname')[0].textContent,
      title: item.getElementsByTagName('title')[0].textContent,
      description: item.getElementsByTagName('description')[0].textContent,
      quant: item.getElementsByTagName('quant')[0].textContent,
      index: item.getElementsByTagName('index')[0].textContent,
      change: item.getElementsByTagName('change')[0].textContent
    }));
  };

  const toggleFavourite = (currency) => {
    if (!currency || !currency.title) return;
    console.log(currency.title)

    const index = favourites.value.findIndex(fav => fav.title === currency.title);
    console.log(index);
    if (index === -1) {
      favourites.value.push(currency);
    } else {
      favourites.value.splice(index, 1);
    }
    localStorage.setItem('favourites', JSON.stringify(favourites.value));
  };

  return { currencies, favourites, getCurrencies, toggleFavourite };
});
