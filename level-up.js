function shaker(quantity, fruit, alcohol) {
    let res;
    if (alcohol) {
        if (quantity > 1) {
            res = `${quantity} ${fruit} cocktails`;
        } else {
            res = `${quantity} ${fruit} cocktail`;
        }
    } else {
        if (quantity > 1) {
            res = `${quantity} ${fruit} milkshakes`;
        } else {
            res = `${quantity} ${fruit} milkshake`;
        }
    }
    return res;
}