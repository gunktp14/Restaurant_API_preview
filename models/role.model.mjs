import { DataTypes } from "sequelize";
import sequelize from "../db/connect.mjs";

const Role = sequelize.define("roles", {
  id:{
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey:true,
    allowNull: false,
  },
  name:{
    type:DataTypes.STRING,
    allowNull:false
  }
});

// Role.sync({force:false}).then(()=>{
//   console.log('Tabel created !')
// }).catch(err=>{
//   console.log(err)
// })

export default Role;
