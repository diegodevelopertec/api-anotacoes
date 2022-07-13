import { Router } from "express";
import * as apiController from '../Controllers/apiController'


const rotas=Router()


rotas.post('/anotacoes',apiController.createNote)
rotas.get('/anotacoes',apiController.listNotes)
rotas.get('/anotacoes/:id',apiController.getNote)
rotas.put('/anotacoes/:id',apiController.updateNote)
rotas.delete('/anotacoes/:id',apiController.deleteNote)

export default rotas