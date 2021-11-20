function happy(arg) {
    let res;
    let lowarg = arg.toLowerCase();
    lowarg.includes("happy") ? res = true : res = false;
    lowarg.includes("?") ? res = true : res = false;
    lowarg[lowarg.length-1] === "?" ? res = true : res = false;

    console.log(res)
}