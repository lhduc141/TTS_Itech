import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _admin from  "./admin.js";
import _feedback from  "./feedback.js";
import _fieldPost from  "./fieldPost.js";
import _fields from  "./fields.js";
import _image from  "./image.js";
import _information from  "./information.js";
import _language from  "./language.js";
import _post from  "./post.js";
import _postDetail from  "./postDetail.js";
import _teams from  "./teams.js";

export default function initModels(sequelize) {
  const admin = _admin.init(sequelize, DataTypes);
  const feedback = _feedback.init(sequelize, DataTypes);
  const fieldPost = _fieldPost.init(sequelize, DataTypes);
  const fields = _fields.init(sequelize, DataTypes);
  const image = _image.init(sequelize, DataTypes);
  const information = _information.init(sequelize, DataTypes);
  const language = _language.init(sequelize, DataTypes);
  const post = _post.init(sequelize, DataTypes);
  const postDetail = _postDetail.init(sequelize, DataTypes);
  const teams = _teams.init(sequelize, DataTypes);

  feedback.belongsTo(admin, { as: "admin", foreignKey: "admin_id"});
  admin.hasMany(feedback, { as: "feedbacks", foreignKey: "admin_id"});
  fields.belongsTo(admin, { as: "admin", foreignKey: "admin_id"});
  admin.hasMany(fields, { as: "fields", foreignKey: "admin_id"});
  image.belongsTo(admin, { as: "admin", foreignKey: "admin_id"});
  admin.hasMany(image, { as: "images", foreignKey: "admin_id"});
  information.belongsTo(admin, { as: "admin", foreignKey: "admin_id"});
  admin.hasMany(information, { as: "informations", foreignKey: "admin_id"});
  post.belongsTo(admin, { as: "admin", foreignKey: "admin_id"});
  admin.hasMany(post, { as: "posts", foreignKey: "admin_id"});
  teams.belongsTo(admin, { as: "admin", foreignKey: "admin_id"});
  admin.hasMany(teams, { as: "teams", foreignKey: "admin_id"});
  fieldPost.belongsTo(fields, { as: "field", foreignKey: "field_id"});
  fields.hasMany(fieldPost, { as: "fieldPosts", foreignKey: "field_id"});
  post.belongsTo(fields, { as: "field", foreignKey: "field_id"});
  fields.hasMany(post, { as: "posts", foreignKey: "field_id"});
  feedback.belongsTo(language, { as: "lang", foreignKey: "lang_id"});
  language.hasMany(feedback, { as: "feedbacks", foreignKey: "lang_id"});
  fields.belongsTo(language, { as: "lang", foreignKey: "lang_id"});
  language.hasMany(fields, { as: "fields", foreignKey: "lang_id"});
  image.belongsTo(language, { as: "lang", foreignKey: "lang_id"});
  language.hasMany(image, { as: "images", foreignKey: "lang_id"});
  information.belongsTo(language, { as: "lang", foreignKey: "lang_id"});
  language.hasMany(information, { as: "informations", foreignKey: "lang_id"});
  post.belongsTo(language, { as: "lang", foreignKey: "lang_id"});
  language.hasMany(post, { as: "posts", foreignKey: "lang_id"});
  teams.belongsTo(language, { as: "lang", foreignKey: "lang_id"});
  language.hasMany(teams, { as: "teams", foreignKey: "lang_id"});
  postDetail.belongsTo(post, { as: "post", foreignKey: "post_id"});
  post.hasMany(postDetail, { as: "postDetails", foreignKey: "post_id"});

  return {
    admin,
    feedback,
    fieldPost,
    fields,
    image,
    information,
    language,
    post,
    postDetail,
    teams,
  };
}
