function happy(arg) {
    let res;
    let lowarg = arg.toLowerCase()
    if (lowarg.includes("happy") && lowarg.includes("?") && lowarg[lowarg.length-1] === "?") {
        res = true;
    } else {
        res = false;
    }
    console.log(res)
}