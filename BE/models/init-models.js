var DataTypes = require("sequelize").DataTypes;
var _admin = require("./admin");
var _feedback = require("./feedback");
var _fieldPost = require("./fieldPost");
var _fields = require("./fields");
var _image = require("./image");
var _information = require("./information");
var _language = require("./language");
var _post = require("./post");
var _postDetail = require("./postDetail");
var _teams = require("./teams");

function initModels(sequelize) {
  var admin = _admin(sequelize, DataTypes);
  var feedback = _feedback(sequelize, DataTypes);
  var fieldPost = _fieldPost(sequelize, DataTypes);
  var fields = _fields(sequelize, DataTypes);
  var image = _image(sequelize, DataTypes);
  var information = _information(sequelize, DataTypes);
  var language = _language(sequelize, DataTypes);
  var post = _post(sequelize, DataTypes);
  var postDetail = _postDetail(sequelize, DataTypes);
  var teams = _teams(sequelize, DataTypes);

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
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
