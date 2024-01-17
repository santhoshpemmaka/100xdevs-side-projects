const calculateSum2 = (a, b) => {
    return a + b;
};
const result2 = calculateSum2(1, 2);
console.log(result2);
export function greet(person) {
    return "Hello" + person.name + " glad that you are " + person.age;
}
export const agePrint = (person) => {
    return "Age " + person.age;
};
console.log(greet({ name: "sathsoh", age: 23 }));
