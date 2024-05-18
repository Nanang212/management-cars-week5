import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('car-week5', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

export { sequelize };
