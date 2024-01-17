interface Circle {
    radius: number
}

interface Square{
    side: number
}

interface Rectangle {
    width: number,
    height: number
}

// OR's implement using types.
type Shape = Rectangle | Circle | Square;

// Union's implement using types.
type ShapeUnion = Rectangle & Circle & Square;

// shapeUnion = {
//     radius: number,
//     side: number,
//     width: number,
//     height: number
// }

const renderShape = (shape: Shape) => {
    console.log("Rendered!...");
} 

const renderShapeUnion = (shape: ShapeUnion) => {
    console.log("Render union types")
}
renderShape({
    side: 5
})

renderShapeUnion({
    radius: 10,
    width: 4,
    height: 5,
    side: 2
})

type number1 = {
    num: number
}

interface numbers2 extends number1 {
    num1: number
}

const printNumber = (shape: numbers2) => {
    console.log(shape.num, shape.num1)
}

printNumber({
    num: 10,
    num1:12
})

type numbers = {
    n1 : number
}

interface numbers1 {
    n2: number,
    result : numbers
}

const printNumber1 = (shape: numbers1):void => {
    console.log(shape.result.n1)
}

printNumber1({
    n2: 10,
    result: {
        n1:1
    }
})