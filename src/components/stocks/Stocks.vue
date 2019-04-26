<template>
    <div> 
        <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock"></app-stock>
    </div> 
</template>

<script>
import Stock from "./Stock.vue";

export default {
    data() {
        return {
            stocks: [{
                id: 1,
                name: "BMW",
                price: 400
            }, {
                id: 2,
                name: "CISCO",
                price: 350
            }, {
                id: 3,
                name: "APPLE",
                price: 500
            }, {
                id: 4,
                name: "NISSAN",
                price: 600
            }, {
                id: 5,
                name: "RENAULT",
                price: 650
            }, ]
        }
    },
    components: {
        appStock: Stock
    }
}
</script>

