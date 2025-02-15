const express = require('express')
const router = express.Router()
const messageController = require('../../controllers/api/messageController')

// '/api/messages' endpoint
router.get('/', messageController.getMessages)
router.get('/:id', messageController.getMessage)
router.post('/', messageController.createMessage)
router.put('/:id', messageController.updateMessage)
router.delete('/:id', messageController.deleteMessage)

module.exports = router