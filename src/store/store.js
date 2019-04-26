import Vue from "vue";
import VueX from "vuex";
import stocksModule from "./modules/stocks";
import userPortfolio from "./modules/portfolio"

Vue.use(VueX);

export default new VueX.Store({
    modules: {
        stocksModule,
        userPortfolio
    }
})