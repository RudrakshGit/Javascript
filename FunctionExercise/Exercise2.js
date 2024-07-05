function minmax (arr){
    const min = Math.min(arr);
    const max = Math.max(arr);

    return {
        min,
        max
    };
}

console.log(minmax([1,2,3,4,5]));