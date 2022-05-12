const mongoose = require('mongoose');
require('dotenv').config();


const URI = process.env.MONGO_URI


mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

const Task = new Schema({
  item: { type: String, required: true },
  created_at: { type: Date, required: true, default: Date.now}
});

module.exports = mongoose.model('task', Task);