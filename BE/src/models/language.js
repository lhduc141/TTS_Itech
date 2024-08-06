import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class language extends Model {
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
    }
  }, {
    sequelize,
    tableName: 'language',
    timestamps: true,
    paranoid: true,
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
