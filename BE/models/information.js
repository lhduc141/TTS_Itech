const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('information', {
    cpn_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    cpn_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    cpn_sname: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    cpn_address: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    cpn_title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    cpn_desc: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    cpn_copyright: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    cpn_content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    admin_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'admin',
        key: 'admin_id'
      }
    },
    lang_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'language',
        key: 'lang_id'
      }
    }
  }, {
    sequelize,
    tableName: 'information',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cpn_id" },
        ]
      },
      {
        name: "admin_id",
        using: "BTREE",
        fields: [
          { name: "admin_id" },
        ]
      },
      {
        name: "lang_id",
        using: "BTREE",
        fields: [
          { name: "lang_id" },
        ]
      },
    ]
  });
};
