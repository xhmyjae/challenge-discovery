function happy(arg) {
    let res;
    let lowarg = arg.toLowerCase();
    lowarg.includes("happy") ? res = true : res = false;
    lowarg.includes("?") ? res = true : res = false;
    console.log([lowarg.length-1] === "?" ? res = reTrue() : res = reFalse());
}

function reTrue() {
    return true;
}

function reFalse() {
    return false;
}