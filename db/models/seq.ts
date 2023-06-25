import { Options, Sequelize } from "sequelize";

import config from "../config/config.mjs";

const sequelize = new Sequelize({ ...config.development } as Options);
export default sequelize;
