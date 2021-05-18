var express = require('express');
const mongoose = require('mongoose');
const config = require('./configu/config')
const app = express();
const cors = require('cors')
const route = require('./router/router')
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerDoc=require('./swaggerui/swaggerapi')
const host = '0.0.0.0';
const webPush = require('web-push');
const path = require('path');
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({
    extended: true
}));



  const options = {
    swaggerDefinition,
    // Paths to files containing OpenAPI definitions
    apis: ['router/router.js'],
  };
  
  const swaggerSpec = swaggerJSDoc(options);



app.use('/api', route);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc,{ explorer: true }));

app.get('/',(req,res)=>{
    res.redirect('/api-docs')
   
   })
   
// app.use(express.static(path.join(__dirname, 'client')));
// const publicVapidKey = process.env.PUBLIC_VAPID_KEY;
// const privateVapidKey = process.env.PRIVATE_VAPID_KEY;

// webPush.setVapidDetails('mailto:mineshmane94@gmail.com.com', publicVapidKey, privateVapidKey);
// app.post('/subscribe', (req, res) => {
//     const subscription = req.body

//     res.status(201).json({});

//     const payload = JSON.stringify({
//       title: 'Push notifications with Service Workers',
//     });


//     webPush.sendNotification(subscription, payload)
//       .catch(error => console.error(error));
//   });
mongoose.connect(config.mongoUrl, {
    useNewUrlParser: true,
    useFindAndModify: false, useCreateIndex: true
}, (err, data) => {
    if (err) {
        console.log('error in database connection');

    } else {
        console.log('Database connected successFully');


    }
})
app.listen(process.env.PORT || 4000, (err, data) => {
    if (err) {
        console.log(" error in listening ", err);

    } else {
        console.log('server connected successfully');
        console.log('listening on port 4000');
    }
})

