import dotenv from 'dotenv';
import Sequelize from 'sequelize';

// Load Config
dotenv.config({ path: './config.env' });

const connection = new Sequelize(
    'foodreview',
    'foodreview',
    'foodreview',
    {
        dialect: 'mysql',
        host: 'localhost'
    }
);

export default connection;