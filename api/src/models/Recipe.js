const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('recipe', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      // autoIncrement: true,
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
    summary: { /*resumen (comentario) */
      type: DataTypes.TEXT,
      allowNull: false
    },
    healthScore:{ /*healt core: information */
      type: DataTypes.INTEGER,
      allowNull: false
    },
    stepByStep: { /*analizar receta */
    type: DataTypes.TEXT,
    allowNull: false
  },
    // stepByStep: { /*analizar receta */
    //   type: DataTypes.TEXT,
    //   allowNull: false
    // },
    createInDB: {
      type:DataTypes.BOOLEAN,
      defaultValue: true,
    }
  },{timestamps:false});
};
