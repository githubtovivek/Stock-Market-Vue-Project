<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-info">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{ stock.name }}
                    <small>(price: {{ stock.price }} | Quantity {{ stock.quantity }})</small>
                </h3>
            </div>

            <div class="panel-body">
                <div class="pull-left">
                    <input type="number" placeholder="Quantity" class="form-control" v-model="quantity">
                </div>

                <div class="pull-right">
                    <button class="btn btn-success" @click="sellStock" :disabled="insufficiantQuantity || quantity <= 0 ">Sell</button>
                </div>

                 <div class="error" v-if="insufficiantQuantity">
                    <strong>Alert!</strong> You may not have sufficient stocks to sell.
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["stock"],
        data() {
            return {
                quantity: 0
            }
        },
        computed: {
            insufficiantQuantity() {
                return this.quantity > this.stock.quantity;
            }
        },
        methods: {
            sellStock() {
                const order = {
                    stockId: this.stock.id,
                    stockName: this.stock.name,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                }

                this.$store.dispatch('sellStocks', order);
                
                this.quantity = 0;
            }
        }
    };
</script>

<style>
.error {
    clear: both;
    color:red;
    background: bisque;
    padding: 10px;
}
</style>


