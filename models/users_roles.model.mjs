import { DataTypes } from "sequelize";
import sequelize from "../db/connect.mjs";

const Users_Roles = sequelize.define("users_roles", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role_id:{
    type: DataTypes.INTEGER,
    allowNull: false,
  }
});

// Users_Roles.sync({force:false}).then(()=>{
//   console.log('Tabel created !')
// }).catch(err=>{
//   console.log(err)
// })

export default Users_Roles;
