const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('my_characters', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    id_users: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    id_team: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'my_team',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    lv: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    gold: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    exp: {
      type: DataTypes.INTEGER,
      allowNull: true
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
    tableName: 'my_characters',
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
        name: "to_owner",
        using: "BTREE",
        fields: [
          { name: "id_users" },
        ]
      },
      {
        name: "to_my_team",
        using: "BTREE",
        fields: [
          { name: "id_team" },
        ]
      },
    ]
  });
};
