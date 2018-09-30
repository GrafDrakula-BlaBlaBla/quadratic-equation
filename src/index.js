module.exports = function solveEquation(equation) {
let rootsEquation = [];
let variableEquation, newVariableEquation,
  	 discremenenant, x1, x2;
// let equation = "-20 * 1^2 - 108797540 * 1 + 130011773690520";
// let equation = "1 * 1^2 - 70 * 1 + 600";

	// variableEquation = equation.match(/\d{1,}|\w/ig);
	// 	variableEquation = equation.match(/\S.\d{1,}|\w/ig);
	variableEquation = equation.replace(/\s/g, '');
	newVariableEquation = variableEquation.match(/(\-?)\s?(\d{1,})|\w/ig);
	console.log("newVariableEquation = " + newVariableEquation);
	// console.log("variableEquation = " + variableEquation);
	
	// discremenenant = b^2 - 4 * a * c
	discremenenant = Math.round((Number(newVariableEquation[3]) * Number(newVariableEquation[3])) - (4 * Number(newVariableEquation[0]) * Number(newVariableEquation[5])));

// console.log("discremenenant = " + discremenenant);

	if (discremenenant > 0) {
		x1 = Math.round((-Number(newVariableEquation[3]) + Math.sqrt(discremenenant)) / (2 * Number(newVariableEquation[0])));
		x2 = Math.round((-Number(newVariableEquation[3]) - Math.sqrt(discremenenant)) / (2 * Number(newVariableEquation[0])));
    	rootsEquation.push(x1, x2);
    }

    
    function sortRoots(x1, x2) {
    	if (x1 < x2)
    		return -1;
    	else
    		return 1;
    } 

    return rootsEquation.sort(sortRoots);
}	

	  

/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/




/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/
