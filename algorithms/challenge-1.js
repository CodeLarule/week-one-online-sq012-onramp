
function secondLargest(arr) {           
    const k = arr.sort((a,b) => b - a);
    return k[1];
}

module.exports = secondLargest