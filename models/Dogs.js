import Sequelize from 'sequelize';
import connection from '../config/db.js';
import User from './User.js';

const Dogs = connection.define(
    'dogs',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true    
        },
        Raca: {
            type: Sequelize.STRING,
            allowNull: false
        },
        Nome: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        Idade: {
            type: Sequelize.STRING,
            allowNull: false
        },
        Sexo: {
            type: Sequelize.STRING,
            allowNull: false
        },
        Porte: {
            type: Sequelize.STRING,
            allowNull: false
        },
        idUser: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id'
            }
        }
    }
);

Dogs.belongsTo(User, {
    foreignKey: 'idUser'
  });

export default Dogs;