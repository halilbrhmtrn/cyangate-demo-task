
const initialState = {
    preparedBeverages: []
};

const Reducer = (state = initialState, action) => {
    if (action.type === 'PREPARE_BEVERAGE') {
        const preparedBeverages = [];
        state.preparedBeverages.forEach(beverage => {
            if (beverage.type === action.beverageType) {
                beverage.latest = false;
            }
            if (beverage.createdAt > new Date().getTime() + (1 * 24 * 60 * 60 * 1000)) {
                beverage.expired = true;
            }
            preparedBeverages.push(beverage);

        })
        const newBeverage = {
            id: Math.floor(Math.random() * 1000),
            timestamp: new Date().toLocaleTimeString(),
            latest: true,
            createdAt: new Date(),
            expired: false,
            type: action.beverageType
        }
        preparedBeverages.push(newBeverage);
        return {
            ...state,
            preparedBeverages
        }
    }
    return state;
}

export default Reducer;