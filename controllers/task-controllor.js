const Task = require('../models/taskModel')

const createTask = async (req, res) => {
     try {
          const task = await Task.create(req.body)
          res.status(200).json(task)
     } catch (error) {
          res.status(500).json({message: error.message})
     }
}

const getAllTask = async (req, res) => {
     try {
          const task = await Task.find()
          res.status(200).json(task)
     } catch (error) {
          res.status(500).json({message: error.message})
     }
}

const getTask = async (req, res) => {
     try {
          const {id} = req.params
          const task = await Task.findById(id)
          if (!task) return res.status(404).json(`404 - task not found Id:${id}`)
          res.status(200).json(task)
     } catch (error) {
          res.status(500).json({message: error.message})
     }
}

const updateTask = async (req, res) => {
     try {
          const {id} = req.params
          const task = await Task.findOneAndUpdate({_id: id}, req.body, {new: true, runValidators: true})
          if (!task) return res.status(404).json(`404 - task not found Id:${id}`)
          res.status(200).json(task)
     } catch (error) {
          res.status(500).json({message: error.message})
     }
}
const deleteTask = async (req, res) => {
     try {
          const {id} = req.params
          const task = await Task.deleteOne({'_id': id})
          if (!task) return res.status(404).json(`404 - task not found Id:${id}`)
          res.status(200).json(task)
     } catch (error) {
          res.status(500).json({message: error.message})
     }
}



module.exports = {
     createTask,
     getAllTask,
     getTask,
     updateTask,
     deleteTask,
}