var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	var first = 1;
	var second = 2;
	var fib = first + second;
	var sum = first + second + fib;

	while(fib <= 4000000) {
		if (fib % 2 == 0) {
			sum += fib;
		}
		fib = second + fib;
		first = second;
		second = fib;
	}

	res.json({
		answer: sum
	})
});
module.exports = router;
