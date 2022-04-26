// You might know some pretty large perfect squares. But what about the NEXT one?

// Write a function in perfectSquare.js that finds the next perfect square after the one passed in as an argument and returns it.

// Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer (look at the examples if this sounds confusing).

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

const perfectSquare =(num) => {
    sqrt = Math.sqrt(num);
    console.log("This is before the if statement:", sqrt)
    if(sqrt % 1 == 0){
        sqrt = (sqrt + 1) ** 2
    }else{
        return -1;
    }
    return sqrt
};

console.log(perfectSquare(7))

// const perfectSquare = (num) => {
//     if(Number.isInteger(Math.sqrt(num))){
//         return (Math.sqrt(num) + 1) ** 2
//     }else {
//         return -1;
//     }
// }

