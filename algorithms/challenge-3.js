function sumMix(arr) {
    const v = arr.map((arr) => parseInt(arr, 10));
    const sum = v.reduce((a,b) => a + b);
    return sum
    // const sum = arr.map((elem) => {
    //     if (typeof elem == "string") {
    //         return parseInt(elem, 10);
    //     } else {
    //         return elem;
    //     }
    // }).reduce((a,b) => {
    //     return a + b
    // });  
    // return sum;
}
console.log(sumMix([1, '5', 6, 7]))
  module.exports = sumMix