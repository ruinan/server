const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');
const Record = require('../db/record');

const jsonParser = bodyParser.json();
/* GET home page. */

router.get('/records/:id', async (req, res) => {
    try {
        const result = await Record.findById(req.params.id);
        res.json({ r: result });
    } catch (error) {
        console.error(error.message);
        throw error;
    }
});

router.get('/records', async (req, res) => {
    try {
        const result = await Record.find({});
        res.json(result);
    } catch (error) {
        console.error(error.message);
        throw error;
    }
});

router.put('/records', jsonParser, async (req, res, next) => {
    var record = new Record({ path: req.body.records, name: req.body.name });
    try {
        await record.save();
        await res.json({ success: true, id: record.objectId });
    } catch (error) {
        throw error;
    }
});

module.exports = router;
