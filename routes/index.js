const express = require('express');
const router = express.Router();
// const Record = require('../db/record');

/* GET home page. */

router.get('/', (req, res, next) => {
    // res.sendStatus(200);
    console.log(req.params);
    res.json({id: 'xx'});
  });
  
  
router.put('/', function(req, res, next){
if (req.headers['Content-Type'] === 'application/json') {
    console.log('xxx');
}
res.send({body: res.body});
});

module.exports = router;
