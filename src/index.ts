import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import rotas from './Routers/routes'


dotenv.config()

const server=express()
server.use(cors({origin:'*'}))
server.use(express.urlencoded({extended:true}))
server.use(rotas)
server.use((req,res)=>{
    res.json({error:'Págna não Encontrada'})
})

server.listen(process.env.PORT)