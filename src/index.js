  require('./models/User')
  require('./models/Project')
  const express = require('express')
  const mongoose = require('mongoose')
  const bodyParser = require('body-parser')
  const authRoutes = require('./routes/authRoutes')
  const projectRoutes = require('./routes/projectRoutes')
  const requireAuth = require('./middlewares/requireAuth')

  const app = express()

  app.use(bodyParser.json())
  app.use(authRoutes)
  app.use(projectRoutes)

  const mongoUri = 'mongodb+srv://Uyadav207:Or41hAmVD5WgMVCB@cluster0.wonb0.mongodb.net/<dbname>?retryWrites=true&w=majority'
  mongoose.connect(mongoUri,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  
  mongoose.connection.on('connected',()=>{
    console.log("Connected to DataBase");
  })

  mongoose.connection.on('error',() => {
    console.log("Error in DataBase");
  })


  app.get('/', requireAuth,(req,res) => {
      res.send(`Your email: ${req.user.email}`)
  } )


  app.listen(5000,()=>{
      console.log("listening on port 5000");
  })
