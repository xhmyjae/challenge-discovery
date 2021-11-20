function happy(arg) {
    let lowarg = arg.toLowerCase();
    console.log(Boolean(lowarg.includes("happy") && lowarg.includes("?") && lowarg[lowarg.length - 1] === "?" ? 'true' : 'false'));
}
