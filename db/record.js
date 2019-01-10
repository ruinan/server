const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema({ 
    id: String, 
    name: String, 
}, { collection: 'records' });

const Record = mongoose.model('Record', recordSchema);
module.exports = Record;
// var x = new Record({id: 'id', name: 'name'});
// console.log(x);
// x.save((error) => {
//   if (error) {
//     console.error('save record error', error.message);
//     throw error;
//   }
//   console.log("save record successfully!");
// });

// Record.find({id: 'id'}, 'id', (error, redords) => {
//     if (error)
// });