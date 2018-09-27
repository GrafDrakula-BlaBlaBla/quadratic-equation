module.exports = function solveEquation(equation) {
  	let rootsEquation = [];
  	let variableEquation,
  	 	discremenenant,
  	 	x1,
  	 	x2;

	// a * x^2 - b * x + c
	variableEquation = equation.match(/(\b[\d]{2})|(\b[\w])/i);
	
	// discremenenant = b^2 - 4 * a * c
	discremenenant = (variableEquation[3] * variableEquation[3]) - (4 * variableEquation[0] * variableEquation[5]);

	if (discremenenant > 0) {
		x1 = (-variableEquation[3] + Math.sqrt(discremenenant)) / 2 * variableEquation[0]
		x2 = (-variableEquation[3] - Math.sqrt(discremenenant)) / 2 * variableEquation[0]
		if (x1 > x2 ) {
			rootsEquation.push(x2, x1);
		} else {
			rootsEquation.push(x1, x2);
		}
	} else if (discremenenant === 0) {
		return x1 = variableEquation[3] / 2 * variableEquation[0];
	} else if (discremenenant < 0) {
		return rootsEquation;
	} 
	return rootsEquation;	
}	

	  

/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/




/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/
