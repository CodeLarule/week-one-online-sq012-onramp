function sumMix(arr) {
    const v = arr.map((arr) => parseInt(arr, 10));
    const sum = v.reduce((a,b) => a + b);
    return sum
}

  module.exports = sumMix