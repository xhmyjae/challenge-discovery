function happy(arg) {
    let res;
    if (arg.includes("happy") && arg.includes("?")) {
        res = true;
    } else {
        res = false;
    }
    return res;
}