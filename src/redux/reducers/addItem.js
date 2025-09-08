const addItem = [];

const addItems = (state = addItem, action) => {
    switch (action.type) {
        case "ADDITEM": 
            // Check if item already exists in cart
            const existingItem = state.find(item => item.id === action.payload.id);
            
            if (existingItem) {
                // If item exists, increase quantity
                return state.map(item =>
                    item.id === action.payload.id
                        ? { ...item, qty: item.qty + 1 }
                        : item
                );
            } else {
                // If item doesn't exist, add it with qty = 1
                return [
                    ...state,
                    { ...action.payload, qty: 1 }
                ];
            }

        case "DELITEM":
            return state.filter((x) => {
                return x.id !== action.payload.id;
            });

        case "DECREASEQTY":
            return state.map(item =>
                item.id === action.payload.id && item.qty > 1
                    ? { ...item, qty: item.qty - 1 }
                    : item
            ).filter(item => item.qty > 0);

        default: 
            return state;
    }
};

export default addItems;