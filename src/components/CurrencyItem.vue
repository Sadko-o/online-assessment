<template>
    <div class="currency-item">
        <div class="currency-actions">
            <font-awesome-icon :icon="[isFavorited ? 'fas' : 'far', 'heart']" @click="toggleFavorite"
                class="heart-icon" />
        </div>
        <span :class="flagClass" class="currency-flag"></span>
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
        isFavorited: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    computed: {
        flagClass() {
            return `currency-flag currency-flag-${this.currency.title.toLowerCase()}`;
        }
    },
    methods: {
        toggleFavorite() {
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

.currency-flag {
    width: 32px;
    height: 24px;
    margin-right: 10px;
}
</style>