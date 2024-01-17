const calculateSum2 = (a: number, b: number):number => {
    return a + b;
}

const result2 = calculateSum2(1, 2);
console.log(result2);

interface Person {
    name: string,
    age :number
}


export function greet(person: Person):string {
    return "Hello" + person.name + " glad that you are " + person.age;
}

export const agePrint = (person: Person): string => {
    return "Age " + person.age;
}

console.log(greet({name:"sathsoh",age:23}))