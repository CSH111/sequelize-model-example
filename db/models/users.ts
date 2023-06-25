import { DataTypes, Model, type Options, Sequelize } from "sequelize";

// import Possession from "./possessions";
import { Possession } from "./index";
// import {``} from '@/db/config/config.js';
// import config from "../config/config.mjs";
import sequelize from "./seq";
// import { Possession } from "./test";

// const sequelize = new Sequelize({...development})
// const sequelize = new Sequelize({ ...config.development } as Options);

class User extends Model {
  // static associate
  static associate() {
    User.hasMany(Possession, { foreignKey: "user_id" });
  }
}

// const User = sequelize.define("users", {
//   name: { type: DataTypes.STRING },
// });

User.init({ name: { type: DataTypes.STRING } }, { sequelize, modelName: "users" });

// User.associations
// User.hasMany(Possession, { foreignKey: "user_id" });

export default User;
