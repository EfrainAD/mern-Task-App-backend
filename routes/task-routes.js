const express = require('express')
const Task = require('../models/taskModel')
const router = express.Router()
const {createTask, getAllTask, getTask, deleteTask, updateTask} = require('../controllers/task-controllor')

// another way Method 2
router.route('/')
     .get(getAllTask)
     .post(createTask)
router.route('/:id')
     .get(getTask)
     .put(updateTask)
     .delete(deleteTask)

// another way Method 1
// router.post('/', createTask)
// router.get('/', getAllTask)
// router.get('/:id', getTask)
// router.put('/:id', updateTask)
// router.delete('/:id', deleteTask)

module.exports = router