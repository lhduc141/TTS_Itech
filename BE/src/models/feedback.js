import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class feedback extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    fb_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    fb_writer: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    fb_cpn: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    fb_content: {
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
    tableName: 'feedback',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "fb_id" },
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
  }
}
