import 'dotenv/config';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

export default {
  port: parseInt(process.env.PORT, 10),

  mongoURI: process.env.MONGODB_URI,

  jwtSecret: process.env.JWT_SECRET,
  jwtAlgorithm: process.env.JWT_ALGO,
};
