import Vue from "vue";
import VueX from "vuex";
import stocksModule from "./modules/stocks"

Vue.use(VueX);

export default new VueX.Store({
    modules: {
        stocksModule
    }
})