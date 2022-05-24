const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('my_flags', {
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
    id_team: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'my_team',
        key: 'id'
      }
    },
    id_scenario: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    flag_text: {
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
    tableName: 'my_flags',
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
        name: "my_flags_to_users",
        using: "BTREE",
        fields: [
          { name: "id_user" },
        ]
      },
      {
        name: "my_flags_to_my_teams",
        using: "BTREE",
        fields: [
          { name: "id_team" },
        ]
      },
    ]
  });
};
