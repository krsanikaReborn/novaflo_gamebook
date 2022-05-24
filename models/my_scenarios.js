const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('my_scenarios', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    id_scenarios: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'scenarios',
        key: 'id'
      }
    },
    repeatplay: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'my_scenarios',
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
        name: "to_origin_scenarios",
        using: "BTREE",
        fields: [
          { name: "id_scenarios" },
        ]
      },
    ]
  });
};
