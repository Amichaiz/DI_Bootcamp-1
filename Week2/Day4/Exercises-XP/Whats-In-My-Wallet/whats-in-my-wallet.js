function changeEnough(itemPrice, amountOfChange) {

    let sumOfChange =
    amountOfChange[0] * 0.25 +
    amountOfChange[1] * 0.1 +
    amountOfChange[2] * 0.05 +
    amountOfChange[3] * 0.01;

    if (sumOfChange >= itemPrice) {
        return true;
    } else {
        return false;
    }
}

console.log(changeEnough(14.11, [2,100,0,0])); // false
console.log(changeEnough(0.75, [0,0,20,5])); // true