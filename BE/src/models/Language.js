import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Language extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    lang_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    lang_name: {
      type: DataTypes.STRING(255),
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
    }
  }, {
    sequelize,
    tableName: 'Language',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "lang_id" },
        ]
      },
    ]
  });
  }
}
