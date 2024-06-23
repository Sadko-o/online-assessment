<template>
    <div class="currency-item">
        <div class="currency-actions">
            <font-awesome-icon :icon="[isFavorited ? 'fas' : 'far', 'heart']" @click="toggleFavorite"
                class="heart-icon" />
        </div>
        <img :src="flagSrc" alt="Country flag" v-if="flagSrc" />
        <div class="currency-details">
            <div>{{ currency.fullname }}</div>
            <div>{{ currency.title }}</div>
            <div>Курс: {{ currency.description }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CurrencyItem',
    props: {
        currency: {
            type: Object,
            required: true
        },
        flagSrc: {
            type: String,
            required: false,
            default: ''
        },
        isFavorited: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    methods: {
        toggleFavorite() {
            console.log('toggleFavorite');
            console.log(this.currency);
            console.log(this.currency.value);
            this.$emit('toggle-favorite', this.currency);
        }
    }
};
</script>

<style scoped>
.currency-item {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 10px;
    border: 1px solid #ccc;
}

.currency-actions {
    margin-right: 10px;
}

.currency-details {
    width: 100%;
    margin-left: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.heart-icon {
    cursor: pointer;
    color: red;
    font-size: 20px;
}
</style>