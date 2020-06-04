
module.exports.up = (queryInterface, DataTypes) => {
  return queryInterface.createTable(
    "jobs",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      userId: {
        allowNull: false,
        references: {
          key: "id",
          model: "users"
        },
        type: DataTypes.INTEGER
      },
      statusId: {
        allowNull: false,
        references: {
          key: "id",
          model: "status"
        },
        type: DataTypes.INTEGER
      },
      jobTitle: {
        allowNull: false,
        type: DataTypes.STRING
      },
      company: {
        allowNull: false,
        type: DataTypes.STRING
      },
      location: {
        allowNull: true,
        type: DataTypes.STRING
      },
      notes: {
        allowNull: true,
        type: DataTypes.STRING
      },
      dateApplied: {
        allowNull: true,
        type: DataTypes.DATE
      },
      createdAt: {
        allowNull: true,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: true,
        type: DataTypes.DATE
      },
      deletedAt: {
        allowNull: true,
        type: DataTypes.DATE
      }
    },
    {
      charset: "utf8",
    }
  );
};

module.exports.down = queryInterface => queryInterface.dropTable("jobs");