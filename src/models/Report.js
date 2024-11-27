const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, default: 'Pending' },  // Ex: Pending, Validated, Signed
  employee: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
});

module.exports = mongoose.model('Report', reportSchema);
