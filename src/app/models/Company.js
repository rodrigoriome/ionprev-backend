module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Company", {
    name: DataTypes.STRING
  });
};
