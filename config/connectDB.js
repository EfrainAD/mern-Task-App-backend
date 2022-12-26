const mongoose = require('mongoose')

const connectDB = async () => {
     try {
          const connect = await mongoose.connect(process.env.MONGO_URI)

          console.log(`MongoDB Connected`)
     } catch (error) {
          console.log(error)
     }
}

// In Method to start the server this was in the server.js file
// const startServer = async () => {
//      try {
//           await connectDB()

//           app.listen(PORT, () => {
//                console.log(`The server is running on port ${PORT}`)
//           })
//      } catch (error) {
//           console.log(error)
//      }
// }
// startServer()

module.exports = connectDB