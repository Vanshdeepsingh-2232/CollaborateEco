import express from 'express';
import ViteExpress from 'vite-express';
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const mongoose = require('mongoose');

//connection with the database
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connection successful!'))
  .catch((err) => console.error('DB connection error:', err));

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

ViteExpress.listen(app, 8000, () =>
  console.log('Server is listening on port 8000...')
);
