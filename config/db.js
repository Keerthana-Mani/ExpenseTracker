const mongoose = require('mongoose');
//mongodb+srv://keerthuvaishu114:Uj82dJG9FUZxBYY0@Cluster0.mongodb.net/expensedb?retryWrites=true&w=majority
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://keerthanam:Nx25JoVVSLkIn8IL@cluster0.6r7vozm.mongodb.net/');

    console.log(' MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  }
};
module.exports = connectDB;