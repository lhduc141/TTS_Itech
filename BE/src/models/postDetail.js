import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class postDetail extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    pDetail_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    pDetail_title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    pDetail_content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    post_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'post',
        key: 'post_id'
      }
    }
  }, {
    sequelize,
    tableName: 'postDetail',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "pDetail_id" },
        ]
      },
      {
        name: "post_id",
        using: "BTREE",
        fields: [
          { name: "post_id" },
        ]
      },
    ]
  });
  }
}
