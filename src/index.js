module.exports = function solveEquation(equation) {
let rootsEquation = [];
let varEquation, newVarEquation,
  	 discremenenant, x1, x2;
  	 
	varEquation = equation.replace(/\s/g, '');

	newVarEquation = varEquation.match(/(\-?)\s?(\d{1,})|\w/ig);

	discremenenant = Math.round((Number(newVarEquation[3]) * Number(newVarEquation[3])) - (4 * Number(newVarEquation[0]) * Number(newVarEquation[5])));

	if (discremenenant > 0) {
		x1 = Math.round((-Number(newVarEquation[3]) + Math.sqrt(discremenenant)) / (2 * Number(newVarEquation[0])));
		x2 = Math.round((-Number(newVarEquation[3]) - Math.sqrt(discremenenant)) / (2 * Number(newVarEquation[0])));
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

