"use strict";
var Arithmetic;
(function (Arithmetic) {
    Arithmetic[Arithmetic["Add"] = 0] = "Add";
    Arithmetic[Arithmetic["Sub"] = 1] = "Sub";
    Arithmetic[Arithmetic["Div"] = 2] = "Div";
})(Arithmetic || (Arithmetic = {}));
const calculate = (a, b, type) => {
    console.log(type); // value is the 2
    return 1;
};
const ans = calculate(1, 2, Arithmetic.Div);
