const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema({ 
    id: String, 
    name: String,
    path: [{
        x: Number,
        y: Number,
        operation: String,
        timestamp: Number,
        color: String,
    }],
}, { collection: 'records' });

const Record = mongoose.model('Record', recordSchema);
module.exports = Record;


// Record.find({id: 'id'}, 'id', (error, redords) => {
//     if (error)
// });