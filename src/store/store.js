import Vue from "vue";
import VueX from "vuex";
import stocksModule from "./modules/stocks";
import userPortfolio from "./modules/portfolio";
import * as actions from './actions';

Vue.use(VueX);

export default new VueX.Store({
    actions,
    modules: {
        stocksModule,
        userPortfolio
    }
})