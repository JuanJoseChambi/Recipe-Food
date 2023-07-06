const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("diet",{
    id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull:false
    },
      name: {
        type: DataTypes.ENUM(
          'gluten free',
          'ketogenic',
          'dairy free',
          'vegan',
          'lacto ovo vegetarian',
          'pescatarian',
          'paleolithic',
          'fodmap friendly',
          'primal',
          'paleo',
          'whole 30'
      ),
        unique: true,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
