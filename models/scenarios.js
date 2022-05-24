const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('scenarios', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    id_author_user: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    id_campaigns: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'campaigns',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    descript: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    id_season: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
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
    tableName: 'scenarios',
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
        name: "to_author_idx",
        using: "BTREE",
        fields: [
          { name: "id_author_user" },
        ]
      },
      {
        name: "to_campaigns",
        using: "BTREE",
        fields: [
          { name: "id_campaigns" },
        ]
      },
    ]
  });
};
