import {Request,Response} from 'express'
import { pgInstance } from '../Instances/pgInstance'


export const createNote=(req:Request,res:Response)=>{






}

export const listNotes= async(req:Request,res:Response)=>{


    try{
        await pgInstance.authenticate()
        res.json({ok:'tudo ok'})
    }catch(e){
        console.log(e);
        
    }



    
}

export const getNote=(req:Request,res:Response)=>{





    
}


export const updateNote=(req:Request,res:Response)=>{





    
}


export const deleteNote=(req:Request,res:Response)=>{





    
}