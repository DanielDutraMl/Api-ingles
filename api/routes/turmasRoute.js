const { Router } = require('express')
const TurmaController = require('../controllers/TurmaController')

const router = Router()

router.get('/turmas', TurmaController.pegaTodasAsTurmas)
router.get('/turmas/:id', TurmaController.pegaUmaTurma)
router.post('/turmas', TurmaController.criaTurma)
router.delete('/turmas/:id', TurmaController.deletaTurma)
router.put('/turmas/:id', TurmaController.atualizaTurma)

module.exports = router