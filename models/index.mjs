import {
  USER,
  HOST,
  PASSWORD,
  DIALECT,
  POOL,
  DATABASE,
} from "../config/db.Config.mjs";
import Sequelize from "sequelize";
import User from "./user.model.mjs";
import Role from "./role.model.mjs";

const sequelize = new Sequelize(DATABASE, USER, PASSWORD, {
  host: HOST,
  dialect: DIALECT,
  dialectOptions: {
    ssl: {
      required: true,
      rejectUnauthorized: false, 
    },
  },
  pool: {
    max: POOL.max,
    min: POOL.min,
    acquire: POOL.acquire,
    idle: POOL.idle,
  },
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = User;
db.role = Role;

db.role.belongsToMany(db.user, {
  through: "users_roles",
});
db.user.belongsToMany(db.role, {
  through: "users_roles",
});

// // 1 to m
// db.role.belongsToMany(db.user, {
//   through: "users_roles",
// });
// // 1 to m
// db.user.belongsToMany(db.role, {
//   through: "users_roles",
// });

db.ROLES = ["user", "admin", "moderator"];

export { db };

export default sequelize;
