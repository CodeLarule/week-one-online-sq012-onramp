function filterList(arr) {
    let p = arr.filter(arr => typeof arr !== "string");
    return p;
}

module.exports =filterList