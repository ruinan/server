const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');
const Record = require('../db/record');

const jsonParser = bodyParser.json();
/* GET home page. */

router.get('/records/:id', async (req, res) => {
    console.log(req.params);
    // res.json({id: req.params.id});
    try {
        const result = await Record.findById(req.params.id);
        console.log(result);
        res.json({r : result});
    } catch(error) {
        // logger && raven
        console.error(error.message);
        throw error;
    }
});
  
router.get('/records', async (req, res) => {
    try {
        const result = await Record.find({});
        res.json(result);
    } catch(error) {
        // logger && raven
        console.error(error.message);
        throw error;
    }
});
  
router.put('/records', jsonParser, async (req, res, next) => {
    console.log(req.body);
    var record = new Record({name: 'xxx', path: req.body});
    console.log(record);
    try {
        const result = await record.save();
        console.log(result);

        await res.json({success: true, id: record.objectId});
    } catch(error) {
        throw error;
    }
    
});

module.exports = router;
