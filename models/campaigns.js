const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('campaigns', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "0"
    },
    descript: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    img: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    /*
    created: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
    */
  }, {
    sequelize,
    tableName: 'campaigns',
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
    ]
  });
};
