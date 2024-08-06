import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class post extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    post_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    post_type: {
      type: DataTypes.ENUM('aboutus','whyus'),
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
    },
    field_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'fields',
        key: 'field_id'
      }
    }
  }, {
    sequelize,
    tableName: 'post',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "post_id" },
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
      {
        name: "field_id",
        using: "BTREE",
        fields: [
          { name: "field_id" },
        ]
      },
    ]
  });
  }
}
