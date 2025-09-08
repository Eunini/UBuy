export const addItem = (product) => {
    return {
        type : "ADDITEM",
        payload : product
    }
}

export const delItem = (product) => {
    return {
        type : "DELITEM",
        payload : product
    }
}

export const decreaseQty = (product) => {
    return {
        type : "DECREASEQTY",
        payload : product
    }
}