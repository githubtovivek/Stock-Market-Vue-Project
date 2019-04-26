const state = {
    userFunds: 1000,
    userStocks: []
}

const mutations = {
    "BUY_STOCKS" (state, order) {
        const stock = state.userStocks.find(element => element.id === stockId);
        
        if(stock) {
            stock.quantity += stockQuantity;
        } else {
            state.userStocks.push(
                {
                    id: order.stockId,
                    name: order.stockName,
                    price: order.stockPrice,
                    quantity: order.quantity
                }
            )
        }

        state.funds -= order.stockPrice * order.quantity;
    },
    "SELL_STOCKS" (state, order) {
        const stock = state.userStocks.find(element => element.id === order.stockId);

        if(stock) {
            stock.quantity -= order.quantity;
        } else {
            state.userStocks.splice(state.stocks.indexOf(stock), 1);
        }

        state.funds += order.stockPrice * order.quantity;
    }
};

const actions = {
    sellStocks({ commit }, order) {
        commit('SELL_STOCKS', order);
    },
    buyStocks: ({ commit }, order) => {
        commit('BUY_STOCKS', order);
    },
}

const getters = {
    stockPortfolio (state, getters) {
        return state.userStocks.map(stock => {
            const record = getters.stocks.find(element => element.id === stock.id);

            return {
                id: record.id,
                name: record.name,
                price: record.price,
                quantity: stock.quantity
            }
        })
    },
    funds(state) {
        return state.funds;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}