"use strict";
// shapeUnion = {
//     radius: number,
//     side: number,
//     width: number,
//     height: number
// }
const renderShape = (shape) => {
    console.log("Rendered!...");
};
const renderShapeUnion = (shape) => {
    console.log("Render union types");
};
renderShape({
    side: 5
});
renderShapeUnion({
    radius: 10,
    width: 4,
    height: 5,
    side: 2
});
const printNumber = (shape) => {
    console.log(shape.num, shape.num1);
};
printNumber({
    num: 10,
    num1: 12
});
const printNumber1 = (shape) => {
    console.log(shape.result.n1);
};
printNumber1({
    n2: 10,
    result: {
        n1: 1
    }
});
