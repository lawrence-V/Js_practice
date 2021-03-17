function calcuPrice(price, taxes, descript) {
    taxes =taxes ?? 0.05
    descript = descript ?? "Default item"
    const total = price * (1 + taxes)
    console.log(`${descript} With the tax $${total}`);
}

calcuPrice(100, 0.07, "my item")
calcuPrice(100, 0, "My other item")
calcuPrice(100, undefined, undefined)