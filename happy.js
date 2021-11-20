function happy(arg) {
    let res;
    let lowarg = arg.toLowerCase()
    if (lowarg.includes("happy") && lowarg.includes("?")) {
        res = true;
    } else {
        res = false;
    }
    return res;
}