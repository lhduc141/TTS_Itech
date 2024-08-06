import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class teams extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    mem_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    mem_img: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    mem_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    mem_pos: {
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
    tableName: 'teams',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "mem_id" },
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
