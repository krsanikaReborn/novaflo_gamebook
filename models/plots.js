const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('plots', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    id_scenarios: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'scenarios',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "0"
    },
    texts: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    id_next_1: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    id_next_2: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    id_next_3: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    text_next_1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    text_next_2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    text_next_3: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    judge: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    images: {
      type: DataTypes.JSON,
      allowNull: true
    },
    sounds: {
      type: DataTypes.TEXT,
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
    tableName: 'plots',
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
        name: "to_scenarios",
        using: "BTREE",
        fields: [
          { name: "id_scenarios" },
        ]
      },
    ]
  });
};
