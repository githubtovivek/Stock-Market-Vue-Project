<template>
    <div>
        <h1>Trade stocks here !</h1>
        <h6>You can save & load data</h6>
        <hr>
        <h6>your fund: {{ funds | currency}}</h6>
    </div>
</template>

<script>
export default {
    computed: {
        funds() {
            return this.$store.getters.funds;
        }
    }
}
</script>

