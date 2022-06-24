function sumTwoSmallestNums(arr) {
   arr.sort((a,b) => a - b);
    let farr = arr.filter((arr) => arr >= 0); 
    
    return farr[0] + farr[1];
}

module.exports =sumTwoSmallestNums