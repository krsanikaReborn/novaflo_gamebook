const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('my_team', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    id_user: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    id_last_scenario: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'scenarios',
        key: 'id'
      }
    },
    gold: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    exp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    magnifier: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    created: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'my_team',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "id_users",
        using: "BTREE",
        fields: [
          { name: "id_user" },
        ]
      },
      {
        name: "id_last_scenario",
        using: "BTREE",
        fields: [
          { name: "id_last_scenario" },
        ]
      },
    ]
  });
};
