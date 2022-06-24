function filterList(arr) {
    let p = arr.filter(arr => typeof arr !== "string");
    return p;
}
console.log(filterList([3, "Pop", 8, 9, 7,"learn" ]))
module.exports =filterList