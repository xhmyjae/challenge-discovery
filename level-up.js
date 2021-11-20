function shaker(quantity, fruit, alcohol) {
    let res;
    if (alcohol) {
        res = `${quantity} ${fruit} cocktail`;
    } else {
        res = `${quantity} ${fruit} milkshake`;
    }
    return res;
}