import Sequelize from 'sequelize';
import connection from '../config/db.js';


const PetWalker = connection.define(
    'PetWalker',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true    
        },
        Email: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            },
        },
        Nome: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        Telefone: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }
);

export default PetWalker;