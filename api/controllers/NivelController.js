const database = require('../models')


class NivelController {
    static async pegaTodasOsNiveis(req, res){
        try{
            const todasOsNiveis = await database.Niveis.findAll()
            return res.status(200).json(todasOsNiveis)            
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmNivel(req,res) {
        const { id } = req.params
        try{
            const umNivel = await database.Niveis.findOne( {
                 where: {
                     id: Number(id)
                    }
            })
            return res.status(200).json(umNivel)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaNivel(req, res) {
        const novoNivel = req.body
        try{
            const novaNivelCriado = await database.Niveis.create(novoNivel)
            return res.status(200).json(novaNivelCriado)
            
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaNivel(req, res) {
        const novasInfos = req.body
        const { id } = req.params
        try{
            await database.Niveis.update(novasInfos, {where: {id:Number(id)}})
            const NivelAtualizado =  await database.Niveis.findOne( {where: {id: Number(id)}})           
            return res.status(200).json(NivelAtualizado)           
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deletaNivel(req, res) {
        const { id } = req.params
        try {
            const deletaUmNivel = await database.Niveis.destroy( {where: {id: Number(id)}})
            return res.status(200).json("O registro foi deletado com sucesso")
        } catch (error) {
            return res.status(500).json(error.message)            
        }
    }

    static async restauraNivel(req, res) {
        const { id } = req.params
        try {
           await database.Niveis.restore({where: { id: Number(id)}}) 
           return res.status(200).json({mensagem: 'O Nivel foi restaurado'})
        } catch (error) {
            return res.status(500).json(error.message)  
        }
    }
}

module.exports = NivelController