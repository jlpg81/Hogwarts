module.exports = (sequelize, DataTypes) => {
  const Service = sequelize.define("Service", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });
  Service.associate = (model) => {
    Service.hasMany(model.Order, {
      as: "orders",
      constraints: false,
      allowNull: true,
      defaultValue: null,
    });
  };

  return Service;
};
