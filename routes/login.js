const express = require('express');
const router = express.Router();


/* GET users listing. */
router.post('/', function(request, response, next) {    
	const data = request.body;
	
	const mysql = require('../src/mysql')
	
	mysql.query({
		sql: `SELECT * FROM Membros WHERE user = ${mysql.escape(data.login)} AND senha = ${mysql.escape(data.password)} ;`,
		timeout: 40000, // 40s
		values: {
			USUÁRIO: data.login,
			SENHA: data.password,
		}
	}, (error, results) => {
		if (error) console.error(error);
		console.log(results);
		response.json(results);
	});


});

module.exports = router;