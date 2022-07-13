import { pgInstance } from "../Instances/pgInstance";
import {DataTypes,Model } from "sequelize";

export interface pgInterface extends Model{


    id:number,
    title:string,
    content:string



}



export const notes=pgInstance.define<pgInterface>('notes',
    
    {
            id:{
                type:DataTypes.INTEGER,
                primaryKey:true,
                autoIncrement:true
            },
            title:{
                type:DataTypes.STRING
            },
            content:{
                type:DataTypes.STRING
            }
    },
    {
        timestamps:false,
        tableName:'notes'
    }
    
  


)