const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://Evemern:Evemernpassword@cluster1.lierq53.mongodb.net/Events';

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', false);
    const conn = await mongoose.connect(MONGODB_URI);
    //console.log('Database connected', conn.connection)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = connectDB;