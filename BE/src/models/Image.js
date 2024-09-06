import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Image extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    img_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    img_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    img_type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    img_content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    create_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    update_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    delete_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    admin_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'Admin',
        key: 'admin_id'
      }
    },
    lang_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'Language',
        key: 'lang_id'
      }
    }
  }, {
    sequelize,
    tableName: 'Image',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "img_id" },
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
