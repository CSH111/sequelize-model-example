import { DataTypes, Model, type Options, Sequelize } from "sequelize";

import { User } from "./index";
import sequelize from "./seq";

class Possession extends Model {
  static associate() {
    Possession.belongsTo(User, { foreignKey: "user_id" });
  }
}

Possession.init(
  { user_id: { type: DataTypes.INTEGER }, name: DataTypes.STRING },
  { sequelize, modelName: "possession" }
);

export default Possession;
