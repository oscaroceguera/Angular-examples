let app = angular.module('myApp.filter1', [])
.filter('ordinal',[function() {
    return function(number) {
    	if (isNaN(number) || number < 1) {
        	return number;
    	} else {
        	let lastDigit = number % 10;
        	if (lastDigit === 1) {
            	return number + 'st'
        	} else if (lastDigit === 2) {
            	return number + 'nd'
        	} else if (lastDigit === 3) {
            	return number + 'rd'
        	} else if (lastDigit > 3) {
            	return number + 'th'
			}
        }
    }
}])

export default app;
