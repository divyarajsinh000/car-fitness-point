const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Customer = require('./Customer');

const Transaction = sequelize.define('Transaction', {
    TransactionId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    VehicleNo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    OperationDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    VehicleType: {  // New column added
        type: DataTypes.STRING,  // Change this to DataTypes.ENUM if you want fixed types (e.g., ['Car', 'Bike'])
        allowNull: false,        // Set `true` if the field is optional
    },
    Price: {  // New column added
        type: DataTypes.FLOAT,  // or DataTypes.INTEGER depending on your requirement
        allowNull: false,  // set to true if you want it to be optional
    },
  
},
{
    tableName: 'Transactions', // Explicitly set the table name
  });

Transaction.belongsTo(Customer, { foreignKey: 'CustomerId' });
Customer.hasMany(Transaction, { foreignKey: 'CustomerId' });

module.exports = Transaction;
