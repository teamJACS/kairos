module.exports.up = (queryInterface, DataTypes) => {
  return queryInterface.createTable(
    "status",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
      },
    },
    {
      charset: "utf8",
    }
  );
};

module.exports.down = queryInterface => queryInterface.dropTable("status");