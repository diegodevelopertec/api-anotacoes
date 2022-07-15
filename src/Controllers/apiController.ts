import {Request,Response} from 'express'
import { notes } from '../Models/notes'


export const createNote= async(req:Request,res:Response)=>{

   

    let {title,content}=req.body
    let newNote=await notes.create({title,content})
    res.status(201).json({id:newNote.id,title,content})

}

export const listNotes= async(req:Request,res:Response)=>{


    let allNotations=await notes.findAll()
    res.status(200).json({allNotations})
    



    
}

export const getNote= async (req:Request,res:Response)=>{


    let {id}=req.params
    let note=await notes.findByPk(id)
   if(note){
    res.status(200).json({note})
   }else{
    res.json({erro:'algo deu errado'})
   }



    
}


export const updateNote=async (req:Request,res:Response)=>{

   
    let {id}=req.params
    let {title,content}=req.body
    let note=await notes.findByPk(id)

    if(note){
       note.title=title
       note.content=content
       await note.save()
       res.status(200).json({note})
    }else{
        res.json({erro:'usuário não encontrado'})
    }



    
}


export const deleteNote=async (req:Request,res:Response)=>{


    let {id}=req.params
    await notes.destroy({where:{id}})
    res.json({ok:'sucess delete'})



    
}