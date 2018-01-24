var express = require('express');
var router = express.Router();
var fs=require('fs')
var json2xls=require('json2xls');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Transform Json to excel' });
});
router.post('/api/transform',function(req,res){
	console.log(req.body)
	var data=json2xls(JSON.parse(req.body.data));
	fs.writeFile('./data.xlsx', data,'binary',function(err){
		if(err)console.log(err)
			res.download('./data.xlsx','result.xlsx',function(erro){
				if(erro)console.log(erro)
					console.log('ok')
			})
	});
})
module.exports = router;
