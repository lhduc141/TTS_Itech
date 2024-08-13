import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _Admin from  "./Admin.js";
import _Feedback from  "./Feedback.js";
import _FieldPost from  "./FieldPost.js";
import _Fields from  "./Fields.js";
import _Image from  "./Image.js";
import _Information from  "./Information.js";
import _Language from  "./Language.js";
import _Post from  "./Post.js";
import _PostDetail from  "./PostDetail.js";
import _Teams from  "./Teams.js";

export default function initModels(sequelize) {
  const Admin = _Admin.init(sequelize, DataTypes);
  const Feedback = _Feedback.init(sequelize, DataTypes);
  const FieldPost = _FieldPost.init(sequelize, DataTypes);
  const Fields = _Fields.init(sequelize, DataTypes);
  const Image = _Image.init(sequelize, DataTypes);
  const Information = _Information.init(sequelize, DataTypes);
  const Language = _Language.init(sequelize, DataTypes);
  const Post = _Post.init(sequelize, DataTypes);
  const PostDetail = _PostDetail.init(sequelize, DataTypes);
  const Teams = _Teams.init(sequelize, DataTypes);

  Feedback.belongsTo(Admin, { as: "admin", foreignKey: "admin_id"});
  Admin.hasMany(Feedback, { as: "Feedbacks", foreignKey: "admin_id"});
  Fields.belongsTo(Admin, { as: "admin", foreignKey: "admin_id"});
  Admin.hasMany(Fields, { as: "Fields", foreignKey: "admin_id"});
  Image.belongsTo(Admin, { as: "admin", foreignKey: "admin_id"});
  Admin.hasMany(Image, { as: "Images", foreignKey: "admin_id"});
  Information.belongsTo(Admin, { as: "admin", foreignKey: "admin_id"});
  Admin.hasMany(Information, { as: "Informations", foreignKey: "admin_id"});
  Post.belongsTo(Admin, { as: "admin", foreignKey: "admin_id"});
  Admin.hasMany(Post, { as: "Posts", foreignKey: "admin_id"});
  Teams.belongsTo(Admin, { as: "admin", foreignKey: "admin_id"});
  Admin.hasMany(Teams, { as: "Teams", foreignKey: "admin_id"});
  FieldPost.belongsTo(Fields, { as: "field", foreignKey: "field_id"});
  Fields.hasMany(FieldPost, { as: "FieldPosts", foreignKey: "field_id"});
  Post.belongsTo(Fields, { as: "field", foreignKey: "field_id"});
  Fields.hasMany(Post, { as: "Posts", foreignKey: "field_id"});
  Feedback.belongsTo(Language, { as: "lang", foreignKey: "lang_id"});
  Language.hasMany(Feedback, { as: "Feedbacks", foreignKey: "lang_id"});
  Fields.belongsTo(Language, { as: "lang", foreignKey: "lang_id"});
  Language.hasMany(Fields, { as: "Fields", foreignKey: "lang_id"});
  Image.belongsTo(Language, { as: "lang", foreignKey: "lang_id"});
  Language.hasMany(Image, { as: "Images", foreignKey: "lang_id"});
  Information.belongsTo(Language, { as: "lang", foreignKey: "lang_id"});
  Language.hasMany(Information, { as: "Informations", foreignKey: "lang_id"});
  Post.belongsTo(Language, { as: "lang", foreignKey: "lang_id"});
  Language.hasMany(Post, { as: "Posts", foreignKey: "lang_id"});
  Teams.belongsTo(Language, { as: "lang", foreignKey: "lang_id"});
  Language.hasMany(Teams, { as: "Teams", foreignKey: "lang_id"});
  PostDetail.belongsTo(Post, { as: "post", foreignKey: "post_id"});
  Post.hasMany(PostDetail, { as: "PostDetails", foreignKey: "post_id"});

  return {
    Admin,
    Feedback,
    FieldPost,
    Fields,
    Image,
    Information,
    Language,
    Post,
    PostDetail,
    Teams,
  };
}
