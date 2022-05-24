const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('my_plots', {
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
    id_scenarios: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'my_scenarios',
        key: 'id'
      }
    },
    id_plots: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'plots',
        key: 'id'
      }
    },
    id_next_plots: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    judged: {
      type: DataTypes.JSON,
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
    tableName: 'my_plots',
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
        name: "to_origin_plots",
        using: "BTREE",
        fields: [
          { name: "id_plots" },
        ]
      },
      {
        name: "my_plots_to_users",
        using: "BTREE",
        fields: [
          { name: "id_user" },
        ]
      },
      {
        name: "my_plots_to_my_scenarios",
        using: "BTREE",
        fields: [
          { name: "id_scenarios" },
        ]
      },
    ]
  });
};
