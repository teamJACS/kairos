import { Sequelize } from "sequelize-typescript";

import accessEnv from "../../src/helpers/accessEnv";
import models from "./models";

const DB_URL = accessEnv("DB_URL");
const sequelize = new Sequelize(DB_URL, {
  dialectOptions: {
    multipleStatement: true,
    charset: "utf8",
  },
  logging: false,
  models
})

export default sequelize;