import { DataTypes } from "sequelize";
import sequelize from "../db/connect.mjs";

const User = sequelize.define("users", {
  username: {
    type: DataTypes.STRING,
    primaryKey:true,
    unique: true,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,  
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false, 
  },
  role:{
    type:DataTypes.ENUM('user', 'moderator','admin'),
    allowNull:false
  }
});

// User.sync({force:true}).then(()=>{
//   console.log('Table created !')
// }).catch(err=>{
//   console.log(err)
// })

export default User;
