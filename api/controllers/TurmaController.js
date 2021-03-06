const database = require('../models')


class TurmaController {
    static async pegaTodasAsTurmas(req, res){
        try{
            const todasAsPessoas = await database.Turmas.findAll()
            return res.status(200).json(todasAsPessoas)            
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmaTurma(req,res) {
        const { id } = req.params
        try{
            const umaTurma = await database.Turmas.findOne( {
                 where: {
                     id: Number(id)
                    }
            })
            return res.status(200).json(umaTurma)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaTurma(req, res) {
        const novaTurma = req.body
        try{
            const novaTurmaCriada = await database.Turmas.create(novaTurma)
            return res.status(200).json(novaTurmaCriada)
            
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaTurma(req, res) {
        const novasInfos = req.body
        const { id } = req.params
        try{
            await database.Turmas.update(novasInfos, {where: {id:Number(id)}})
            const turmaAtualizada =  await database.Turmas.findOne( {where: {id: Number(id)}})           
            return res.status(200).json(turmaAtualizada)           
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deletaTurma(req, res) {
        const { id } = req.params
        try {
            const deletaUmaTurma = await database.Turmas.destroy( {where: {id: Number(id)}})
            return res.status(200).json("O registro foi deletado com sucesso")
        } catch (error) {
            return res.status(500).json(error.message)            
        }
    }
 
    static async restauraTurma(req, res) {
        const { id } = req.params
        try {
           await database.Turmas.restore({where: { id: Number(id)}}) 
           return res.status(200).json({mensagem: 'A Turma foi restaurada'})
        } catch (error) {
            return res.status(500).json(error.message)  
        }
    }
}

module.exports = TurmaController