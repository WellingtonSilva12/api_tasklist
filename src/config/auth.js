import dotenv from 'dotenv';

dotenv.config(); 

export default {
  secret: process.env.SECRET_KEY,
  expiresIn: process.env.TOKEN_EXPIRES_IN,
};
