import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Information extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
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
      allowNull: false
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
    tableName: 'Information',
    timestamps: false,
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
  }
}
