var DataTypes = require("sequelize").DataTypes;
var _campaigns = require("./campaigns");
var _my_characters = require("./my_characters");
var _my_flags = require("./my_flags");
var _my_plots = require("./my_plots");
var _my_scenarios = require("./my_scenarios");
var _my_team = require("./my_team");
var _plots = require("./plots");
var _scenarios = require("./scenarios");
var _users = require("./users");

function initModels(sequelize) {
  var campaigns = _campaigns(sequelize, DataTypes);
  var my_characters = _my_characters(sequelize, DataTypes);
  var my_flags = _my_flags(sequelize, DataTypes);
  var my_plots = _my_plots(sequelize, DataTypes);
  var my_scenarios = _my_scenarios(sequelize, DataTypes);
  var my_team = _my_team(sequelize, DataTypes);
  var plots = _plots(sequelize, DataTypes);
  var scenarios = _scenarios(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  scenarios.belongsTo(campaigns, { as: "id_campaigns_campaign", foreignKey: "id_campaigns"});
  campaigns.hasMany(scenarios, { as: "scenarios", foreignKey: "id_campaigns"});
  my_plots.belongsTo(my_scenarios, { as: "id_scenarios_my_scenario", foreignKey: "id_scenarios"});
  my_scenarios.hasMany(my_plots, { as: "my_plots", foreignKey: "id_scenarios"});
  my_characters.belongsTo(my_team, { as: "id_team_my_team", foreignKey: "id_team"});
  my_team.hasMany(my_characters, { as: "my_characters", foreignKey: "id_team"});
  my_flags.belongsTo(my_team, { as: "id_team_my_team", foreignKey: "id_team"});
  my_team.hasMany(my_flags, { as: "my_flags", foreignKey: "id_team"});
  my_plots.belongsTo(plots, { as: "id_plots_plot", foreignKey: "id_plots"});
  plots.hasMany(my_plots, { as: "my_plots", foreignKey: "id_plots"});
  my_scenarios.belongsTo(scenarios, { as: "id_scenarios_scenario", foreignKey: "id_scenarios"});
  scenarios.hasMany(my_scenarios, { as: "my_scenarios", foreignKey: "id_scenarios"});
  my_team.belongsTo(scenarios, { as: "id_last_scenario_scenario", foreignKey: "id_last_scenario"});
  scenarios.hasMany(my_team, { as: "my_teams", foreignKey: "id_last_scenario"});
  plots.belongsTo(scenarios, { as: "id_scenarios_scenario", foreignKey: "id_scenarios"});
  scenarios.hasMany(plots, { as: "plots", foreignKey: "id_scenarios"});
  my_characters.belongsTo(users, { as: "id_users_user", foreignKey: "id_users"});
  users.hasMany(my_characters, { as: "my_characters", foreignKey: "id_users"});
  my_flags.belongsTo(users, { as: "id_user_user", foreignKey: "id_user"});
  users.hasMany(my_flags, { as: "my_flags", foreignKey: "id_user"});
  my_plots.belongsTo(users, { as: "id_user_user", foreignKey: "id_user"});
  users.hasMany(my_plots, { as: "my_plots", foreignKey: "id_user"});
  my_team.belongsTo(users, { as: "id_user_user", foreignKey: "id_user"});
  users.hasMany(my_team, { as: "my_teams", foreignKey: "id_user"});
  scenarios.belongsTo(users, { as: "id_author_user_user", foreignKey: "id_author_user"});
  users.hasMany(scenarios, { as: "scenarios", foreignKey: "id_author_user"});

  return {
    campaigns,
    my_characters,
    my_flags,
    my_plots,
    my_scenarios,
    my_team,
    plots,
    scenarios,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
