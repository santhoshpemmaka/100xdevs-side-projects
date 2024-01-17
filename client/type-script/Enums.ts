enum Arithmetic {
	Add,
	Sub,
	Div
}

const calculate = (a:number, b:number, type: Arithmetic) => {
	console.log(type); // value is the 2
	return 1;
}

const ans = calculate(1,2,Arithmetic.Div);