import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class FieldPost extends Model {
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
    field_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'Fields',
        key: 'field_id'
      }
    }
  }, {
    sequelize,
    tableName: 'FieldPost',
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
