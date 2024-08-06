import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class fieldPost extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    fPost_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    fPost_title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    fPost_content: {
      type: DataTypes.TEXT,
      allowNull: false
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
    tableName: 'fieldPost',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "fPost_id" },
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
