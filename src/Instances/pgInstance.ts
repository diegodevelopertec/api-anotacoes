import { Sequelize } from "sequelize";
import dotenv from  'dotenv'


dotenv.config()

export const pgInstance=new Sequelize(

        process.env.PG_USER as string,
        process.env.PG_BD as string,
        process.env.PG_PASS as string,
 
    {
        dialect:'postgres',
        port:parseInt(process.env.PG_PORT as string)
    }

)