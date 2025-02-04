import { Sequelize } from "sequelize";
import databaseConfig from "../config/database.js";

import User from "../app/models/User.mjs";
import Task from "../app/models/Task.mjs";

const models = [User, Task]

class Database {
  constructor() {
    this.init();
  }
  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection)).map(model => model.associate && model.associate(this.connection.models));

  }
}

export default new Database;