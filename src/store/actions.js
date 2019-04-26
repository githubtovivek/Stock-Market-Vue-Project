import Vue from "vue";

export const loadData = ({ commit }) => {
  Vue.http
    .get("stockData.json")
    .then(response => response.json())
    .then(data => {
      if (data) {
        const stocks = data.stock;
        const stockPortFolio = data.stockPortfolio;
        const funds = data.funds;

        const portFolio = {
          stockPortFolio,
          funds
        };

        commit("SET_STOCKS", stocks);
        commit("LOAD_PORTFOLIO", portFolio);
      }
    });
};
