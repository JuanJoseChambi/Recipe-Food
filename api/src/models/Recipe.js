const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('recipe', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image:{
      type: DataTypes.TEXT,
      allowNull: false
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    healthScore:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    stepByStep: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  createInDB: {
    type:DataTypes.BOOLEAN,
    defaultValue: true,
  }
  },{timestamps:false});
};
