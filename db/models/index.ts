import { DataTypes, Model, type Options, Sequelize } from "sequelize";

import config from "../config/config.mjs";
import Possession from "./possessions";
import sequelize from "./seq";
import User from "./users";
// const sequelize = new Sequelize({...development})
// const sequelize = new Sequelize({ ...config.development } as Options);

// class User extends Model {}

// User.init({ name: { type: DataTypes.STRING } }, { sequelize, modelName: "users" });

// User.hasMany(Possession, { foreignKey: "user_id" });
// Possession.belongsTo(User, { foreignKey: "user_id" });

Possession.associate();
User.associate();

(async () => {
  await sequelize.sync();
})();

export { Possession, User };
