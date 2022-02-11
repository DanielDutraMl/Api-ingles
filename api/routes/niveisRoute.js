const { Router } = require('express')
const NivelController = require('../controllers/NivelController')

const router = Router()

router.get('/niveis', NivelController.pegaTodasOsNiveis)
router.get('/niveis/:id', NivelController.pegaUmNivel)
router.post('/niveis', NivelController.criaNivel)
router.delete('/niveis/:id', NivelController.deletaNivel)
router.put('/niveis/:id', NivelController.atualizaNivel)

module.exports = router