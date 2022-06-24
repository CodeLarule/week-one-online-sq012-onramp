function filterArray(arr) {
    const x = arr.filter(arr => typeof arr !== "string");
    return x;
}

module.exports = filterArray